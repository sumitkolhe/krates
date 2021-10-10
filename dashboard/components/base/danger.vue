<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl my-12 md:px-2 px-4">
        <p class="text-3xl font-medium">Danger Zone</p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto my-12 md:px-2 px-4">
      <zi-fieldset class="mb-8" footer="Base ID acts as a namespace for data.">
        <h3 class="text-lg font-medium">Delete Base</h3>
        <zi-note type="warning" class="mt-6">
          This will delete all data in your base. This action is
          irreversible.</zi-note
        >
        <template #footer>
          <p></p>
          <zi-button type="danger" auto @click="">Delete Base </zi-button>
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
      baseId: '',
    }
  },

  mounted() {},

  methods: {},
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
