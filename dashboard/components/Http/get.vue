<template>
  <!-- GET  -->
  <zi-fieldset class="mt-8">
    <zi-switcher @label-selected="switcher">
      <!-- ALL DATA -->
      <zi-switcher-item active label="All Data">
        <zi-grid
          container
          align-items="center"
          :spacing="3"
          justify="center"
          class="pt-4"
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
            <zi-grid
              container
              align-items="center"
              justify="center"
              :spacing="2"
            >
              <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
              <zi-grid>
                <zi-toggle v-model="toggleCollection"></zi-toggle
              ></zi-grid>
            </zi-grid> </zi-grid
        ></zi-grid>

        <!-- LIMIT -->
        <zi-grid
          container
          align-items="center"
          :spacing="3"
          justify="center"
          class="pt-2"
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
            <zi-grid
              container
              align-items="center"
              :spacing="2"
              justify="center"
            >
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
          class="pt-2"
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
            <zi-grid
              container
              align-items="center"
              :spacing="2"
              justify="center"
            >
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
          class="py-2"
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
            <zi-grid
              container
              align-items="center"
              :spacing="2"
              justify="center"
            >
              <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
              <zi-grid> <zi-toggle v-model="toggleQuery"></zi-toggle></zi-grid>
            </zi-grid>
          </zi-grid> </zi-grid
      ></zi-switcher-item>

      <!-- RECORD -->
      <zi-switcher-item label="By Record">
        <zi-grid
          container
          align-items="center"
          justify="center"
          :spacing="3"
          class="pt-4 pb-2"
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
            <zi-grid
              container
              align-items="center"
              justify="center"
              :spacing="2"
            >
              <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
              <zi-grid> <zi-toggle v-model="toggleRecord"></zi-toggle></zi-grid>
            </zi-grid>
          </zi-grid>
        </zi-grid>
      </zi-switcher-item>
    </zi-switcher>

    <!-- Footer -->
    <template #footer>
      <p></p>

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
      isRecord: false,
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
  created() {
    // to reset response payload on every krate change
    this.$store.commit('request/setResponsePayload', undefined)
  },

  methods: {
    switcher(label: string) {
      if (label === 'By Record') this.isRecord = true
      else this.isRecord = false
    },

    buildRequestUrl() {
      const krateId = this.$store.getters['krates/getSelectedKrate']

      let url = krateId

      if (this.isRecord) {
        if (this.toggleRecord && this.requestParams.recordId)
          return `${url}/record/${this.requestParams.recordId}`
        return url
      } else {
        return `${url}/${
          this.toggleCollection && this.requestParams.collectionId
            ? this.requestParams.collectionId
            : ''
        }?query=${
          this.toggleQuery && this.requestParams.query
            ? this.requestParams.query
            : ''
        }&limit=${
          this.toggleLimit && this.requestParams.limit
            ? this.requestParams.limit
            : ''
        }&skip=${
          this.toggleSkip && this.requestParams.skip
            ? this.requestParams.skip
            : ''
        }`
      }
    },
    async sendRequest() {
      try {
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
      } catch (error) {
        ;(this as any).$Toast.show({
          type: 'danger',
          text: error,
          duration: 5000,
        })
        this.loading = false
      }
    },
  },
})
</script>
