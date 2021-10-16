<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl my-12 md:px-2 px-4">
        <p class="text-3xl font-medium">Details</p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto my-12 md:px-2 px-4">
      <zi-fieldset class="mb-8">
        <h3 class="text-lg font-medium">Krate ID</h3>
        <p class="text-sm">
          This is your namespace for storing data within krates.
        </p>
        <zi-snippet :text="krateId" type="lite"></zi-snippet>
        <template #footer>
          <p>
            This is your personal krate ID and is used for storing your data.
          </p>
          <!-- <zi-button type="success" class="px-4" auto @click=""
            >Regenerate ID
          </zi-button> -->
        </template>
      </zi-fieldset>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      krateId: '',
    }
  },

  mounted() {
    this.krateId = this.$store.getters['krates/getSelectedKrate']
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
