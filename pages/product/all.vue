<template>
  <div class="product-all">
    <SpinnerLoading v-if="loading" :loading="loading" />
    <div v-else class="main-layout">
      <Header type="all" filter @resultFilterProduct="getResultFilter" />
      <div class="container mt-4">
        <SpinnerSoftLoading v-if="softLoading" :loading="softLoading" class="text-center my-8" />
        <div v-else>
          <div v-if="$_.isEmpty(items)">
            <SectionResultNotFound class="mt-12" />
          </div>
          <div v-else>
            <ProductItemLength :length="items.length" />
            <div class="flex flex-wrap -mx-2">
              <div
                v-for="(product, index) in items"
                :key="index"
                class="product-list-card-wrap px-2 my-3"
              >
                <ProductCardItem :item="product" />
              </div>
            </div>
          </div>
          <ButtonPrimary
            text="Back"
            theme="btn-outline-primary"
            icon="arrow-left"
            class="mt-12"
            @action="getBack()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllProduct',
  data() {
    return {
      loading: true,
      softLoading: false,
      items: [],
      type: '',
      brand: '',
      tag: '',
    }
  },
  mounted() {
    new Promise((resolve) => resolve()).then(this.getData).then(() => (this.loading = false))
  },
  methods: {
    async getData() {
      if (this.$_.isEmpty(this.productLists)) {
        await this.$getProduct()
        this.items = this.productLists
      } else if (
        !this.$_.isEmpty(this.type) ||
        !this.$_.isEmpty(this.brand) ||
        !this.$_.isEmpty(this.tag)
      ) {
        this.softLoading = true
        try {
          const resp = await this.$axios.$get(
            `${this.$config.baseUrl}?product_type=${this.type}&brand=${this.brand}&product_tags=${this.tag}`
          )
          this.items = resp
        } catch (error) {
        } finally {
          this.softLoading = false
        }
      } else {
        this.softLoading = true
        this.items = this.productLists
        setTimeout(() => {
          this.softLoading = false
        }, 100)
      }
    },
    getResultFilter(category, type, brand, tag) {
      this.type = type === 'All' ? '' : type
      this.brand = brand === 'All' ? '' : brand
      this.tag = tag === 'All' ? '' : tag
      this.getData()
    },
  },
}
</script>

<style>
</style>