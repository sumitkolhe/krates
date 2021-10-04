<template>
  <div class="max-w-5xl mx-auto">
    <zi-fieldset
      class="mb-8"
      footer="This is your personal detabase Id and used for storing your data."
    >
      <h3 class="text-lg font-medium">Modify Data</h3>
      <p class="text-sm mt-3 pb-6">
        Make requests to detabase endpoint with your
        <zi-tag class="mr-2">Base ID</zi-tag> to
        <zi-tag class="mr-2">GET</zi-tag><zi-tag class="mr-2">INSERT</zi-tag
        ><zi-tag class="mr-2">UPDATE</zi-tag
        ><zi-tag class="mr-2">MODIFY</zi-tag> or
        <zi-tag class="mr-2">DELETE</zi-tag> your data.
      </p>

      <zi-select v-model="selectedRequestType" class="mt-4">
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

      <template #footer>
        <zi-input
          class="ml-2"
          :placeholder="id"
          prefix-label="https://detabase.me/"
          suffix-label="/api/"
          disabled
        ></zi-input>
        <zi-button type="success" auto @click="getBaseData">Send </zi-button>
      </template>
    </zi-fieldset>

    <zi-fieldset
      class="mb-8"
      footer="This is your personal detabase Id and used for storing your data."
    >
      <client-only>
        <div class="max-w-5xl mx-auto mb-12">
          <div class="codemirror">
            <codemirror v-model="payload" :options="options" />
          </div>
        </div>
      </client-only>
      <template #footer>
        <p>
          <span class="font-semibold text-lg"> Payload Size:</span>
          {{ calculatePayloadSize() }} Kilobytes
        </p>
        <zi-button type="primary" auto @click="">Copy </zi-button>
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
      toggle: false,
      items: [
        { label: 'GET', value: 'setting' },
        { label: 'POST', value: 'lambda' },
        { label: 'PUT', value: 'server' },
        { label: 'PATCH', value: 'rver' },
        { label: 'DELETE', value: 'seer' },
      ],
      payload: `{"method":"GET","args":{},"data":"","path":"/","isBase64Encoded":false}`,
      options: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'application/ld+json',
        theme: 'seti',
        matchBrackets: true,
        autoCloseBrackets: true,
        lineWrapping: true,
      },
    }
  },

  methods: {
    getBaseData() {
      this.$axios.$get('http://localhost:3000/')
    },

    calculatePayloadSize() {
      const bytes = ~-encodeURI(JSON.stringify(this.payload)).split(/%..|./)
        .length
      const kilobytes = bytes / 1024
      return kilobytes.toString().slice(0, 6)
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

.zi-toggle {
  height: 20px !important;
  width: 40px !important;
}

.zi-toggle::before {
  height: 1rem !important;
  width: 1rem !important;
}
.zi-tabs-item .active {
  background-color: aqua !important;
}
.zi-tag {
  height: 1rem !important;
}
</style>
