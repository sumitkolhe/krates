<template>
  <div class="max-w-5xl mx-auto">
    <zi-fieldset
      class="mb-8"
      footer="This is your personal detabase Id and used for storing your data."
    >
      <zi-select v-model="selectedRequestType">
        <zi-option value="GET"> </zi-option>
        <zi-option value="POST"> </zi-option>
        <zi-option value="PUT"> </zi-option>
        <zi-option value="PATCH"> </zi-option>
        <zi-option value="DELETE"> </zi-option>
      </zi-select>
      <zi-input
        class="ml-2"
        :placeholder="id"
        prefix-label="https://detabase.me/"
        suffix-label="/api/"
        disabled
      ></zi-input>
      <zi-input
        v-model="collectionId"
        class="ml-2"
        size="big"
        placeholder="Collection ID"
      ></zi-input>
      <template #footer>
        <p></p>
        <zi-button type="success" auto @click="getBaseData">Send </zi-button>
      </template>
    </zi-fieldset>
  </div>
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
      collectionId: '',
    }
  },

  methods: {
    getBaseData() {
      this.$axios.$get('http://localhost:3000/')
    },
  },
})
</script>
<style>
.zi-input-group {
  height: 42px !important;
}
.zi-input-group.prefix input {
  height: 42px !important;
}
</style>
