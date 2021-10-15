<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl my-12 md:px-2 px-4">
        <p class="text-3xl font-medium">Query Data</p>
      </div>
    </div>

    <!-- Query  -->
    <div class="max-w-5xl mx-auto my-12 md:px-2 px-4">
      <!-- Request module -->
      <zi-fieldset
        class="mb-8"
        footer="This is your personal detabase Id and used for storing your data."
      >
        <div class="flex mb-2">
          <h3 class="text-lg font-medium">Query data with HTTP requests</h3>
          <zi-tooltip placement="right">
            <template v-slot:content>
              <p>Make requests to detabase endpoint with your Base ID to</p>
              <p>GET, INSERT, UPDATE, MODIFY, DELETE data.</p>
            </template>

            <question-circle-icon class="ml-4 h-5 w-5 mt-1" />
          </zi-tooltip>
        </div>

        <div class="flex">
          <zi-select v-model="selectedRequestType" class="mt-4 flex-none">
            <zi-option value="GET"> </zi-option>
            <zi-option value="POST"> </zi-option>
            <zi-option value="PUT"> </zi-option>
            <zi-option value="PATCH"> </zi-option>
            <zi-option value="DELETE"> </zi-option>
          </zi-select>
          <zi-input
            class="ml-2 mt-4 flex-grow"
            :placeholder="baseId"
            prefix-label="https://detabase.me/"
            disabled
          ></zi-input>
        </div>
        <p class="border-b border-accent2 py-2"></p>

        <!-- GET  -->
        <zi-grid
          container
          align-items="center"
          :spacing="3"
          justify="center"
          class="pt-8"
          v-if="selectedRequestType === 'GET'"
        >
          <zi-grid :xs="4"> <p>COLLECTION ID</p></zi-grid>
          <zi-grid :xs="16">
            <zi-textarea
              placeholder="placeholder"
              rows="1"
              :disabled="!toggleCollection"
            ></zi-textarea
          ></zi-grid>

          <zi-grid :xs="4">
            <zi-grid container align-items="center" spacing="2">
              <zi-grid> <p>ENABLE</p></zi-grid>
              <zi-grid>
                <zi-toggle v-model="toggleCollection"></zi-toggle
              ></zi-grid>
            </zi-grid>
          </zi-grid>
          <zi-grid :xs="4"> <p>RECORD ID</p></zi-grid>
          <zi-grid :xs="16">
            <zi-textarea
              placeholder="placeholder"
              rows="1"
              :disabled="!toggleRecord"
            ></zi-textarea
          ></zi-grid>

          <zi-grid :xs="4">
            <zi-grid container align-items="center" spacing="2">
              <zi-grid> <p>ENABLE</p></zi-grid>
              <zi-grid> <zi-toggle v-model="toggleRecord"></zi-toggle></zi-grid>
            </zi-grid>
          </zi-grid>
        </zi-grid>

        <!-- POST   -->
        <zi-grid
          container
          align-items="center"
          :spacing="3"
          justify="center"
          class="pt-8"
          v-if="selectedRequestType === 'POST'"
        >
          <zi-grid :xs="4"> <p>COLLECTION ID</p></zi-grid>
          <zi-grid :xs="16">
            <zi-textarea
              placeholder="placeholder"
              rows="1"
              :disabled="!toggleCollection"
            ></zi-textarea
          ></zi-grid>

          <zi-grid :xs="4">
            <zi-grid container align-items="center" spacing="2">
              <zi-grid> <p>ENABLE</p></zi-grid>
              <zi-grid>
                <zi-toggle v-model="toggleCollection"></zi-toggle
              ></zi-grid>
            </zi-grid>
          </zi-grid>
          <zi-grid :xs="4"> <p>RECORD ID</p></zi-grid>
          <zi-grid :xs="16">
            <zi-textarea
              placeholder="placeholder"
              rows="4"
              :disabled="!toggleRecord"
            ></zi-textarea
          ></zi-grid>

          <zi-grid :xs="4">
            <zi-grid container align-items="center" spacing="2">
              <zi-grid> <p>ENABLE</p></zi-grid>
              <zi-grid> <zi-toggle v-model="toggleRecord"></zi-toggle></zi-grid>
            </zi-grid>
          </zi-grid>
        </zi-grid>
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
      toggleCollection: false,
      toggleRecord: false,
      items: [
        { label: 'GET', value: 'setting' },
        { label: 'POST', value: 'lambda' },
        { label: 'PUT', value: 'server' },
        { label: 'PATCH', value: 'rver' },
        { label: 'DELETE', value: 'seer' },
      ],
      payload: '',
    }
  },
  mounted() {
    this.baseId = this.$store.getters['bases/getSelectedBase']
    this.payload = ''
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

  methods: {
    async getBaseData() {
      const response = await this.$axios.$get(
        `http://localhost:4000/${this.baseId}`
      )

      this.payload = JSON.stringify(response, null, 2)
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
