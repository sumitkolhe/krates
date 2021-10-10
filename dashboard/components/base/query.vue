<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl my-12 md:px-2 px-4">
        <p class="text-3xl font-medium">Query Data</p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto my-12 md:px-2 px-4">
      <zi-fieldset
        class="mb-8"
        footer="This is your personal detabase Id and used for storing your data."
      >
        <div class="flex mb-2">
          <h3 class="text-lg font-medium">Modify Data</h3>
          <zi-tooltip placement="right">
            <template v-slot:content>
              <p>Make requests to detabase endpoint with your Base ID to</p>
              <p>GET, INSERT, UPDATE, MODIFY, DELETE data.</p>
            </template>

            <question-circle-icon class="ml-4 h-5 w-5 mt-1" />
          </zi-tooltip>
        </div>

        <zi-select v-model="selectedRequestType" class="mt-4">
          <zi-option value="GET"> </zi-option>
          <zi-option value="POST"> </zi-option>
          <zi-option value="PUT"> </zi-option>
          <zi-option value="PATCH"> </zi-option>
          <zi-option value="DELETE"> </zi-option>
        </zi-select>
        <zi-input
          class="ml-2"
          :placeholder="baseId"
          prefix-label="https://detabase.me/"
          disabled
        ></zi-input>
        <p class="border-b border-accent2 py-4"></p>
        <div class="grid grid-cols-2 gap-4">
          <zi-description
            title="COLLECTION ID"
            content="Collections are optional"
          ></zi-description>
          <zi-input class="ml-1 py-8" :placeholder="baseId" disabled>
          </zi-input>
        </div>

        <template #footer>
          <zi-input
            class="ml-2"
            :placeholder="baseId"
            prefix-label="https://detabase.me/"
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
      baseId: '',
      toggle: false,
      items: [
        { label: 'GET', value: 'setting' },
        { label: 'POST', value: 'lambda' },
        { label: 'PUT', value: 'server' },
        { label: 'PATCH', value: 'rver' },
        { label: 'DELETE', value: 'seer' },
      ],
      payload: `{"method":"GET","args":{},"data":"","path":"/","isBase64Encoded":false}`,
    }
  },
  mounted() {
    this.baseId = this.$store.getters['bases/getSelectedBase']
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
      if (isDark) return (options.theme = 'ayu-dark'), options
      else {
        return options
      }
    },
  },

  methods: {
    getBaseData() {
      this.$axios.$get('http://localhost:4000/')
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
</style>
