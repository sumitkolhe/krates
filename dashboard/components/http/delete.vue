<template>
  <!-- POST   -->
  <zi-fieldset class="mt-8">
    <zi-switcher @label-selected="switcher">
      <!-- FILTER QUERY -->
      <zi-switcher-item active label="By Filter">
        <zi-grid
          container
          align-items="center"
          :spacing="3"
          justify="center"
          class="py-2"
        >
          <zi-grid :xs="24" :sm="4" class="sm:order-none order-first">
            <p class="text-accent5 font-medium">
              <zi-tag>FILTER</zi-tag>
            </p></zi-grid
          >

          <zi-grid :xs="24" :sm="20" class="sm:order-none order-last">
            <zi-textarea
              placeholder="Filter query"
              :rows="1"
              v-model="requestParams.query"
            ></zi-textarea>
          </zi-grid>
        </zi-grid>
      </zi-switcher-item>

      <zi-switcher-item label="By Record">
        <!-- RECORD -->
        <zi-grid
          container
          align-items="center"
          :spacing="3"
          justify="center"
          class="py-2"
        >
          <zi-grid :xs="24" :sm="4">
            <p class="text-accent5 font-medium">
              <zi-tag>RECORD ID</zi-tag>
            </p></zi-grid
          >
          <zi-grid :xs="24" :sm="20">
            <zi-textarea
              placeholder="Record ID"
              :rows="1"
              v-model="requestParams.recordId"
            ></zi-textarea
          ></zi-grid>
        </zi-grid>
      </zi-switcher-item>
    </zi-switcher>

    <!-- Footer -->
    <template #footer>
      <p></p>
      <zi-button
        :disabled="isRecord ? !requestParams.recordId : !requestParams.query"
        type="success"
        @click="sendRequest"
        auto
        :loading="loading"
        >Send
      </zi-button>
    </template></zi-fieldset
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      loading: false,
      isRecord: false,
      requestParams: {
        recordId: '',
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
      if (label === 'By Record') {
        this.isRecord = true
        this.$store.commit('request/setResponsePayload', undefined)
      } else {
        this.isRecord = false
      }
    },

    buildRequestUrl() {
      const krateId = this.$store.getters['krates/getSelectedKrate']
      let url = krateId
      if (this.isRecord) {
        return `${url}/record/${this.requestParams.recordId}`
      } else {
        return `${url}/?query=${this.requestParams.query}`
      }
    },

    async sendRequest() {
      try {
        this.loading = true
        await this.$store
          .dispatch('request/deleteKrateData', {
            requestUrl: this.buildRequestUrl(),
          })
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
