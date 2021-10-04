<template>
  <div>
    <CommonHeader />
    <main class="flex-grow dark:bg-black pt-32">
      <Nuxt />
    </main>
    <CommonFooter v-if="$route.path !== '/dashboard'" />
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
