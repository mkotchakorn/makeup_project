<template>
  <div :class="{ dark: isDarkMode }">
    <div class="wrapper">
      <Navbar />
      <Nuxt class="content" />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  watch: {
    isDarkMode(newVal, oldVal) {
      if(newVal && newVal !== oldVal) document.querySelector('body').classList.add('bg-black');
      else document.querySelector('body').classList.remove('bg-black');
    }
  },
  mounted() {
    if (this.isDarkMode) document.querySelector('body').classList.add('bg-black');
  },
}
</script>

<style>
</style>