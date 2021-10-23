<template>
  <div>
    <CommonHeader />
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

<style scoped>
#app {
  font-family: 'Inter', sans-serif;
}

::selection {
  background: var(--geist-cyan);
}

.zi-input-group {
  height: 42px !important;
}
.zi-input-group.prefix input {
  height: 42px !important;
}

.zi-toggle {
  height: 20px !important;
  width: 40px !important;
}

.zi-toggle::before {
  height: 1rem !important;
  width: 1rem !important;
}

.zi-snippet > pre::before {
  content: '';
  user-select: none;
}
</style>
