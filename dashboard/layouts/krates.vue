<template>
  <div>
    <DashboardHeader />
    <div class="px-2 md:px-0">
      <CommonTabs
        :tabs="navigationItems"
        :currentTab="currentTab"
        @onClick="handleClick"
      />
    </div>

    <main class="border-t border-accent2">
      <Nuxt />
    </main>
    <CommonFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'dashboard',
  data() {
    return {
      navigationItems: [
        { title: 'Details', value: 'details' },
        { title: 'Queries', value: 'query' },
        { title: 'Settings', value: 'settings' },
      ],
      currentTab: this.$route.fullPath.split('/')[3],
    }
  },

  methods: {
    handleClick(newTab: string) {
      this.$router.push(newTab)
    },
  },
})
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
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
.CodeMirror {
  height: 300px !important;
}
</style>
