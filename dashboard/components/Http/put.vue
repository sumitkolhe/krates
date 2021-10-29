<template>
  <!-- POST   -->
  <zi-fieldset class="mt-8">
    <zi-grid
      container
      align-items="center"
      :spacing="3"
      justify="center"
      class="py-2"
    >
      <zi-grid :xs="24" :sm="4">
        <p class="text-accent5 font-medium">RECORD ID</p></zi-grid
      >
      <zi-grid :xs="24" :sm="20">
        <zi-textarea
          placeholder="Record ID"
          :rows="1"
          v-model="requestParams.recordId"
        ></zi-textarea
      ></zi-grid>
    </zi-grid>

    <zi-grid
      container
      align-items="center"
      :spacing="3"
      justify="center"
      class="py-2"
    >
      <zi-grid :xs="24">
        <p class="text-accent5 font-medium">PAYLOAD</p></zi-grid
      >
      <zi-grid :xs="24">
        <codemirror :options="options" v-model="payload" />
      </zi-grid>
    </zi-grid>

    <!-- Footer -->
    <template #footer>
      <p></p>
      <zi-button type="success" @click="sendRequest" auto :loading="loading"
        >Send
      </zi-button>
    </template></zi-fieldset
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    id: String,
  },
  data() {
    return {
      loading: false,
      payload: '',
      requestParams: {
        recordId: '',
      },
    }
  },
  computed: {
    options() {
      let isDark = this.$store.getters['theme/getTheme']
      let options = {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'application/ld+json',
        matchBrackets: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        theme: 'default',
      }
      if (isDark) {
        options.theme = 'isotope'
        return options
      } else {
        return options
      }
    },
  },

  created() {
    // to reset response payload on every krate change
    this.$store.commit('request/setResponsePayload', undefined)
  },

  methods: {
    buildRequestUrl() {
      const krateId = this.$store.getters['krates/getSelectedKrate']
      return krateId + '/' + this.requestParams.recordId
    },

    async sendRequest() {
      try {
        this.loading = true
        await this.$store
          .dispatch('request/putKrateData', {
            requestUrl: this.buildRequestUrl(),
            payload: JSON.parse(this.payload),
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
