<template>
  <!-- GET  -->
  <zi-fieldset class="mt-8">
    <!-- RECORD -->
    <zi-grid
      container
      align-items="center"
      justify="center"
      :spacing="3"
      class="pt-2 pb-2"
    >
      <zi-grid :xs="12" :sm="6" :md="4" class="sm:order-none order-first">
        <p class="text-accent5 font-medium">
          <zi-tag>RECORD ID</zi-tag>
        </p></zi-grid
      >

      <zi-grid :xs="24" :sm="12" :md="14" class="sm:order-none order-last">
        <zi-textarea
          placeholder="Record ID"
          :rows="1"
          :disabled="!toggleRecord"
          v-model="requestParams.recordId"
        ></zi-textarea
      ></zi-grid>

      <zi-grid :xs="12" :sm="6" class="sm:order-none">
        <zi-grid container align-items="center" justify="center" :spacing="2">
          <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
          <zi-grid> <zi-toggle v-model="toggleRecord"></zi-toggle></zi-grid>
        </zi-grid>
      </zi-grid>
    </zi-grid>

    <zi-more text="OR" text-up="OR"></zi-more>

    <!-- COLLECTION -->
    <zi-grid
      container
      align-items="center"
      :spacing="3"
      justify="center"
      class="pt-2 pb-2"
    >
      <zi-grid :xs="12" :sm="6" :md="4" class="sm:order-none order-first">
        <p class="text-accent5 font-medium">
          <zi-tag>COLLECTION ID</zi-tag>
        </p></zi-grid
      >

      <zi-grid :xs="24" :sm="12" :md="14" class="sm:order-none order-last">
        <zi-textarea
          placeholder="Collection ID"
          :rows="1"
          :disabled="!toggleCollection"
          v-model="requestParams.collectionId"
        ></zi-textarea
      ></zi-grid>

      <zi-grid :xs="12" :sm="6" class="sm:order-none">
        <zi-grid container align-items="center" justify="center" :spacing="2">
          <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
          <zi-grid> <zi-toggle v-model="toggleCollection"></zi-toggle></zi-grid>
        </zi-grid> </zi-grid
    ></zi-grid>

    <!-- LIMIT -->
    <zi-grid
      container
      align-items="center"
      :spacing="3"
      justify="center"
      class="pt-2 pb-2"
    >
      <zi-grid :xs="12" :sm="6" :md="4" class="sm:order-none order-first">
        <p class="text-accent5 font-medium">
          <zi-tag> LIMIT</zi-tag>
        </p></zi-grid
      >

      <zi-grid :xs="24" :sm="12" :md="14" class="sm:order-none order-last">
        <zi-textarea
          placeholder="Limit number of records"
          :rows="1"
          :disabled="!toggleLimit"
          v-model="requestParams.limit"
        ></zi-textarea>
      </zi-grid>

      <zi-grid :xs="12" :sm="6" class="sm:order-none">
        <zi-grid container align-items="center" :spacing="2" justify="center">
          <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
          <zi-grid> <zi-toggle v-model="toggleLimit"></zi-toggle></zi-grid>
        </zi-grid>
      </zi-grid>
    </zi-grid>

    <!-- SKIP -->
    <zi-grid
      container
      align-items="center"
      :spacing="3"
      justify="center"
      class="pt-2 pb-2"
    >
      <zi-grid :xs="12" :sm="6" :md="4" class="sm:order-none order-first">
        <p class="text-accent5 font-medium">
          <zi-tag> SKIP</zi-tag>
        </p></zi-grid
      >

      <zi-grid :xs="24" :sm="12" :md="14" class="sm:order-none order-last">
        <zi-textarea
          placeholder="Skip number of records"
          :rows="1"
          :disabled="!toggleSkip"
          v-model="requestParams.skip"
        ></zi-textarea>
      </zi-grid>

      <zi-grid :xs="12" :sm="6" class="sm:order-none">
        <zi-grid container align-items="center" :spacing="2" justify="center">
          <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
          <zi-grid> <zi-toggle v-model="toggleSkip"></zi-toggle></zi-grid>
        </zi-grid>
      </zi-grid>
    </zi-grid>

    <!-- FILTER QUERY -->
    <zi-grid
      container
      align-items="center"
      :spacing="3"
      justify="center"
      class="pt-2 pb-2"
    >
      <zi-grid :xs="12" :sm="6" :md="4" class="sm:order-none order-first">
        <p class="text-accent5 font-medium">
          <zi-tag>FILTER</zi-tag>
        </p></zi-grid
      >

      <zi-grid :xs="24" :sm="12" :md="14" class="sm:order-none order-last">
        <zi-textarea
          placeholder="Filter query"
          :rows="1"
          :disabled="!toggleQuery"
          v-model="requestParams.query"
        ></zi-textarea>
      </zi-grid>

      <zi-grid :xs="12" :sm="6" class="sm:order-none">
        <zi-grid container align-items="center" :spacing="2" justify="center">
          <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
          <zi-grid> <zi-toggle v-model="toggleQuery"></zi-toggle></zi-grid>
        </zi-grid>
      </zi-grid>
    </zi-grid>

    <!-- Footer -->
    <template #footer>
      <p></p>
      <!-- <zi-input
            class="ml-2"
            :placeholder="krateId"
            prefix-label="https://krat.es/"
            disabled
          ></zi-input> -->
      <zi-button type="success" @click="sendRequest" auto :loading="loading"
        >Send
      </zi-button>
    </template>
  </zi-fieldset>
</template>

<script lang="ts">
import Vue from 'vue'
import '@nuxtjs/axios'
export default Vue.extend({
  layout: 'krates',

  data() {
    return {
      loading: false,
      toggleRecord: false,
      toggleCollection: false,
      toggleLimit: false,
      toggleSkip: false,
      toggleQuery: false,
      requestParams: {
        recordId: '',
        collectionId: '',
        limit: '',
        skip: '',
        query: '',
      },
    }
  },

  methods: {
    buildRequestUrl() {
      const krateId = this.$store.getters['krates/getSelectedKrate']

      let url = krateId
      if (this.toggleCollection && this.requestParams.collectionId)
        url += '/' + this.requestParams.collectionId

      if (this.toggleQuery && this.requestParams.query)
        url += '&query=' + this.requestParams.query

      if (this.toggleLimit && this.requestParams.limit)
        url += '?limit=' + this.requestParams.limit
      if (this.toggleSkip && this.requestParams.skip)
        url += '&skip=' + this.requestParams.skip

      return url
    },
    async sendRequest() {
      this.loading = true
      await this.$store
        .dispatch('request/getKrateData', this.buildRequestUrl())
        .catch((error) => {
          this.loading = false
          ;(this as any).$Toast.show({
            type: 'danger',
            text: error.response.data.message,
            duration: 5000,
          })
        })

      this.loading = false
    },
  },
})
</script>
