<template>
  <div class="product-tag-card" @click="goToPage">{{ item }}</div>
</template>

<script>
export default {
  name: 'ProductCardTag',
  props: {
    item: {
      type: String,
      default: null,
    },
  },
  methods: {
    goToPage() {
      this.$router.push(`/tag/list?tag=${ this.item }`)
    },
  },
}
</script>

<style>
</style>