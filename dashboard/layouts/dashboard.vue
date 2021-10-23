<template>
  <div>
    <DashboardHeader />
    <div class="px-2">
      <tabs
        :tabs="navigationItems"
        :currentTab="currentTab"
        :wrapper-class="`relative mx-auto max-w-5xl`"
        :tab-class="`hover:bg-accent2 hover:rounded-md mx-2 my-2 p-2 text-sm`"
        :tab-active-class="`font-medium`"
        :line-class="`border-b border-b-2 border-geist-foreground `"
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
import Tabs from 'vue-tabs-with-active-line'
export default Vue.extend({
  components: {
    Tabs,
  },
  data() {
    return {
      navigationItems: [
        { title: 'Overview', value: '/' },
        { title: 'Settings', value: 'settings' },
      ],
      currentTab: '/',
    }
  },
  methods: {
    handleClick(newTab: string) {
      if (newTab === '/') newTab = ''
      this.$router.push({ path: `/dashboard/${newTab}` })
    },
  },
})
</script>

<style scoped>
.zi-snippet > pre::before {
  content: '';
  user-select: none;
}
</style>
