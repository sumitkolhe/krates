<template>
  <div>
    <Header />
    <main class="flex-grow dark:bg-black">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {}
  },

  methods: {},
})
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
}
</style>
