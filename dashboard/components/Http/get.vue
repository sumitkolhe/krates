<template>
  <zi-grid
    container
    align-items="center"
    :spacing="3"
    justify="center"
    class="pt-6 pb-2"
  >
    <zi-grid :xs="6">
      <p class="text-accent5 font-medium">COLLECTION / RECORD ID</p></zi-grid
    >
    <zi-grid :xs="14">
      <zi-textarea
        placeholder="Collection / Record ID"
        rows="1"
        :disabled="!toggleCollection"
      ></zi-textarea
    ></zi-grid>

    <zi-grid :xs="4">
      <zi-grid container align-items="center" spacing="2">
        <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
        <zi-grid> <zi-toggle v-model="toggleCollection"></zi-toggle></zi-grid>
      </zi-grid>
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
      toggleCollection: false,
      toggleRecord: false,
    }
  },
  mounted() {
    this.krateId = this.$store.getters['krate/getSelectedKrate']
  },

  computed: {},

  methods: {},
})
</script>
