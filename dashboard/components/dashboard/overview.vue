<template>
  <div class="max-w-5xl mx-auto pt-12">
    <div class="grid grid-cols-3 gap-8">
      <zi-card hoverable v-for="base in allBases" :key="base.baseId">
        <zi-description
          title="BASE ID "
          :content="base.baseId"
        ></zi-description>
        <zi-code bash>{{ base.baseId }}</zi-code>
      </zi-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    allBases() {
      return this.$store.getters['bases/getAllBases']
    },
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
