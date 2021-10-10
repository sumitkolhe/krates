<template>
  <div>
    <CommonHeader v-if="$route.path === '/'" />
    <DashboardHeader v-else />

    <main class="flex-grow dark:bg-black">
      <Nuxt />
    </main>
    <CommonFooter />
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

::selection {
  background: var(--geist-cyan);
}
</style>
