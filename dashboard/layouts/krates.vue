<template>
  <div>
    <DashboardHeader />
    <div class="px-2 md:px-0">
      <tabs
        :tabs="navigationItems"
        :currentTab="currentTab"
        :wrapper-class="`relative mx-auto max-w-5xl`"
        :tab-class="`hover:bg-accent2 hover:rounded-md mx-2 my-2 p-2 text-sm`"
        :tab-active-class="`font-medium`"
        :line-class="` border-b border-b-2 border-geist-foreground`"
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
  layout: 'dashboard',
  components: {
    Tabs,
  },
  data() {
    return {
      newKrateId: '',
      visible: false,
      navigationItems: [
        { title: 'Details', value: 'details' },
        { title: 'Query', value: 'query' },
        { title: 'Settings', value: 'settings' },
      ],
      currentTab: 'details',
    }
  },
  methods: {
    handleClick(newTab: string) {
      // if (newTab === '') this.$router.replace(newTab)
      // else
      this.$router.push(newTab)
    },
  },
})
</script>

<style>
.zi-snippet > pre::before {
  content: '';
  user-select: none;
}
</style>
