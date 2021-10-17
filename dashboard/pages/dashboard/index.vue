<template>
  <div class="pt-20">
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

    <div class="border-t border-accent2">
      <DashboardOverview v-if="currentTab === 'tab1'" />
      <DashboardSettings v-if="currentTab === 'tab2'" />
    </div>
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
      visible: false,
      navigationItems: [
        { title: 'Overview', value: 'tab1' },
        { title: 'Settings', value: 'tab2' },
      ],
      currentTab: 'tab1',
    }
  },
  methods: {
    handleClick(newTab: string) {
      this.currentTab = newTab
    },
    openDialog() {
      this.visible = true
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
