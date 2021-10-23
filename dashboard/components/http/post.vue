<template>
  <!-- POST   -->
  <zi-grid
    container
    align-items="center"
    :spacing="3"
    justify="center"
    class="pt-6"
  >
    <zi-grid :xs="24" :md="4">
      <p class="text-accent5 font-medium">COLLECTION ID</p></zi-grid
    >
    <zi-grid :xs="14" :md="14">
      <zi-textarea
        placeholder="Collection ID"
        :rows="1"
        :disabled="!toggleCollectionId"
      ></zi-textarea
    ></zi-grid>

    <zi-grid :xs="10" :md="6">
      <zi-grid container align-items="center" :spacing="2" justify="center">
        <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
        <zi-grid> <zi-toggle v-model="toggleCollectionId"></zi-toggle></zi-grid>
      </zi-grid>
    </zi-grid>

    <zi-grid :xs="24"> <p class="text-accent5 font-medium">PAYLOAD</p></zi-grid>
    <zi-grid :xs="24">
      <codemirror v-model="responsePayload" :options="options" />
    </zi-grid>
  </zi-grid>
</template>

<script lang="ts">
import Vue from 'vue'
import '@nuxtjs/axios'
export default Vue.extend({
  props: {
    id: String,
  },
  data() {
    return {
      selectedRequestType: 'GET',
      krateId: '',
      toggleCollectionId: false,
      collectionId: '',
      toggleLimit: false,
      limit: '',
      toggleSkip: false,
      skip: '',
      togglefilter: false,
      filter: '',
      items: [
        { label: 'GET', value: 'setting' },
        { label: 'POST', value: 'lambda' },
        { label: 'PUT', value: 'server' },
        { label: 'PATCH', value: 'rver' },
        { label: 'DELETE', value: 'seer' },
      ],
    }
  },

  created() {
    this.krateId = this.$store.getters['krates/getSelectedKrate']
    // to reset response payload on every krate change
    this.$store.commit('request/setResponsePayload', undefined)
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
        readOnly: true,
        theme: 'default',
      }
      if (isDark) {
        options.theme = 'isotope'
        return options
      } else {
        return options
      }
    },

    finalUrl(): string {
      return `${this.krateId}/${
        this.collectionId && this.toggleCollectionId ? this.collectionId : ''
      }?query=${this.filter && this.togglefilter ? this.filter : ''}&limit=${
        this.limit
      }&skip=${this.skip}`
    },

    responsePayload(): String {
      return JSON.stringify(
        this.$store.getters['request/getResponsePayload'],
        null,
        2
      )
    },
  },

  methods: {
    async getKrateData() {
      await this.$store.dispatch('request/getKrateData', { url: this.finalUrl })
    },

    calculateResponseSize() {
      const bytes = ~-encodeURI(JSON.stringify(this.responsePayload)).split(
        /%..|./
      ).length
      const kilobytes = bytes / 1024
      return kilobytes.toString().slice(0, 4)
    },
  },
})
</script>
