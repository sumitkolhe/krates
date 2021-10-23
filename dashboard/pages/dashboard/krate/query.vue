<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl my-12 md:px-2 px-4">
        <p class="text-3xl font-medium">Query</p>
      </div>
    </div>

    <!-- Query  -->
    <div class="max-w-5xl mx-auto my-12 md:px-2 px-4">
      <!-- Request module -->
      <zi-card class="mb-8">
        <div class="flex mb-4">
          <span class="text-lg font-medium">Query data with HTTP requests</span>
        </div>
        <p class="text-accent5">
          Make requests to krates API endpoints to query / modify your data.
        </p>
        <p class="border-b border-accent2 py-2"></p>
        <div class="flex flex-col md:flex-row">
          <zi-select v-model="selectedRequestType" class="mt-4 flex-none">
            <zi-option value="GET"> </zi-option>
            <zi-option value="POST"> </zi-option>
            <zi-option value="PUT"> </zi-option>
            <zi-option value="PATCH"> </zi-option>
            <zi-option value="DELETE"> </zi-option>
          </zi-select>

          <zi-input
            class="md:ml-3 mt-4 flex-grow"
            :placeholder="krateId"
            prefix-label="krat.es/"
            disabled
          ></zi-input>
        </div>
      </zi-card>

      <HttpGet v-if="selectedRequestType === 'GET'" />
      <HttpPost v-else-if="selectedRequestType === 'POST'" />

      <HttpResponse />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '@nuxtjs/axios'
export default Vue.extend({
  layout: 'krates',

  data() {
    return {
      selectedRequestType: 'GET',
      krateId: '',
    }
  },

  created() {
    this.krateId = this.$store.getters['krates/getSelectedKrate']
  },
})
</script>
