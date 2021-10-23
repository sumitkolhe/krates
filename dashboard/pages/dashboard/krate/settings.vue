<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl my-12 md:px-2 px-4">
        <p class="text-3xl font-medium">Settings</p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto my-12 md:px-2 px-4">
      <zi-fieldset class="mb-8" footer="Krate ID acts as a namespace for data.">
        <h3 class="text-lg font-medium">Delete Krate</h3>
        <zi-note type="warning" class="mt-6">
          This will delete all data in your krate. This action is
          irreversible.</zi-note
        >
        <template #footer>
          <p></p>
          <zi-button type="danger" auto @click="">Delete Krate </zi-button>
        </template>
      </zi-fieldset>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'krates',
  data() {
    return {}
  },

  mounted() {},

  methods: {},
})
</script>
