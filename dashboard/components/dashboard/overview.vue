<template>
  <div class="max-w-5xl mx-auto pt-12">
    <div class="grid grid-cols-3 gap-8">
      <zi-card shadow hoverable v-for="base in allBases" :key="base.baseId"
        >{{ base.baseId }}
      </zi-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {}
  },

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

/* .zi-tabs-content {
  width: 100vw !important;
  margin: 0 auto !important;
} */
</style>
