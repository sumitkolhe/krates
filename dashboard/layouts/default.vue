<template>
  <div>
    <Header />
    <main class="flex-grow dark:bg-black">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
}
</style>
