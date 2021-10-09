<template>
  <div class="pt-24">
    <div>
      <tabs
        :tabs="navigationItems"
        :currentTab="currentTab"
        :wrapper-class="`relative mx-auto max-w-5xl`"
        :tab-class="`hover:bg-accent2 hover:rounded-md mx-2 my-2 p-2 text-sm`"
        :tab-active-class="`font-medium`"
        :line-class="`border-b border-b-2 border-geist-foreground`"
        @onClick="handleClick"
      />
      <div class="border-t border-accent2">
        <DashboardOverview v-if="currentTab === 'tab1'" />
        <DashboardSettings v-if="currentTab === 'tab2'" />
      </div>
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
      newBaseId: '',
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
    createNewBase() {
      this.$store.dispatch('bases/createNewBase')
      this.visible = !this.visible
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
