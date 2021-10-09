<template>
  <div class="pt-24">
    <div>
      <tabs
        :tabs="navigationItems"
        :currentTab="currentTab"
        :wrapper-class="`relative mx-auto max-w-5xl`"
        :tab-class="`hover:bg-accent2 hover:rounded-md mx-2 my-2 p-2  text-sm`"
        :tab-active-class="`font-medium`"
        :line-class="`border-b border-b-2 border-geist-foreground`"
        @onClick="handleClick"
      />
      <div class="border-t border-accent2">
        <div class="border-b border-accent2">
          <div class="mx-auto max-w-5xl pt-8 pb-12 text-center">
            <database-icon class="h-20 w-20 align-center block mx-auto mb-6" />

            <zi-button
              :icon="database"
              shadow
              size="big"
              type="success"
              class="inline-block"
              >Create Base</zi-button
            >
          </div>
        </div>
        <div class="max-w-5xl mx-auto mt-8">
          <DashboardOverview v-if="currentTab === 'tab1'" />
          <DashboardSettings v-if="currentTab === 'tab2'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tabs from 'vue-tabs-with-active-line'
import database from '@geist-ui/vue-icons/packages/database'
export default Vue.extend({
  components: {
    Tabs,
  },
  data() {
    return {
      database,
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
  },
})
</script>

<style>
.zi-snippet > pre::before {
  content: '';
  user-select: none;
}
</style>
