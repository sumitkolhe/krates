<template>
  <div :class="[isDark ? 'dark' : ' ']">
    <Header />
    <main class="flex-grow dark:bg-black">
      <Nuxt />
    </main>
    <Footer @clicked="onThemeChange" />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isDark: false,
    }
  },

  methods: {
    onThemeChange(value) {
      this.isDark = value
    },
  },
})
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
}
</style>
