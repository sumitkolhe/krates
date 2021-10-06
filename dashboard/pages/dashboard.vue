<template>
  <div class="pt-24">
    <div class="border-accent2 border-b absolute mt-8 w-full"></div>
    <div class="border-accent2 border-b absolute mt-40 w-full"></div>
    <zi-tabs class="max-w-5xl mx-auto">
      <zi-tabs-item
        v-for="(item, index) in items"
        :key="item.value + index"
        :label="item.label"
        :value="item.value"
      >
        <CommonBlock :title="item.label" />
        <DashboardOverview v-if="item.label === 'Overview'" />
        <DashboardSettings v-if="item.label === 'Settings'" />
      </zi-tabs-item>
    </zi-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      items: [
        { label: 'Overview', value: 'overview' },
        { label: 'Settings', value: 'settings' },
      ],
    }
  },
})
</script>

<style>
.zi-snippet > pre::before {
  content: '';
  user-select: none;
}

.zi-tabs-container {
  border: none !important;
}
</style>
