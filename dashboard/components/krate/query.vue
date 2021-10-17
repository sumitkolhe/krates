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
        footer="This is your personal krates Id and used for storing your data."
      >
        <div class="flex mb-4">
          <span class="text-lg font-medium">Query data with HTTP requests</span>
          <zi-tooltip placement="right">
            <template v-slot:content>
              <p>Make requests to krates endpoint with your Krate ID to</p>
              <p>GET, INSERT, UPDATE, MODIFY, DELETE data.</p>
            </template>

            <question-circle-icon class="ml-4 h-5 w-5 mt-1" />
          </zi-tooltip>
        </div>
        <p class="text-accent5">
          Make requests to krates API endpoints to query / modify your data.
        </p>
        <p class="border-b border-accent2 py-2"></p>
        <div class="flex flex-col md:flex-row">
          <zi-select v-model="selectedRequestType" class="mt-4 flex-none">
            <zi-option value="GET"> </zi-option>
            <zi-option value="POST"> </zi-option>
            <zi-option value="PUT"> </zi-option>
            <zi-option value="PATCH"> </zi-option>
            <zi-option value="DELETE"> </zi-option>
          </zi-select>

          <zi-input
            class="md:ml-3 mt-4 flex-grow"
            :placeholder="krateId"
            prefix-label="krat.es/"
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
          class="pt-6 pb-2"
          v-if="selectedRequestType === 'GET'"
        >
          <zi-grid :xs="24" :md="4">
            <p class="text-accent5 font-medium">
              <zi-tag>COLLECTION ID</zi-tag>
            </p></zi-grid
          >
          <zi-grid :xs="14" :md="14">
            <zi-textarea
              placeholder="Collection ID"
              :rows="1"
              :disabled="!toggleCollectionId"
              v-model="collectionId"
            ></zi-textarea
          ></zi-grid>

          <zi-grid :xs="10" :md="6">
            <zi-grid
              container
              align-items="center"
              justify="center"
              :spacing="2"
            >
              <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
              <zi-grid>
                <zi-toggle v-model="toggleCollectionId"></zi-toggle
              ></zi-grid>
            </zi-grid>
          </zi-grid>

          <zi-grid :xs="24" :md="4">
            <p class="text-accent5 font-medium">
              <zi-tag> LIMIT</zi-tag>
            </p></zi-grid
          >
          <zi-grid :xs="14" :md="14">
            <zi-textarea
              placeholder="Limit number of records"
              :rows="1"
              :disabled="!toggleLimit"
              v-model="limit"
            ></zi-textarea>
          </zi-grid>

          <zi-grid :xs="10" :md="6">
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

          <zi-grid :xs="24" :md="4">
            <p class="text-accent5 font-medium">
              <zi-tag> SKIP</zi-tag>
            </p></zi-grid
          >
          <zi-grid :xs="14" :md="14">
            <zi-textarea
              placeholder="Skip number of records"
              :rows="1"
              :disabled="!toggleSkip"
              v-model="skip"
            ></zi-textarea>
          </zi-grid>

          <zi-grid :xs="10" :md="6">
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

          <zi-grid :xs="24" :md="4">
            <p class="text-accent5 font-medium">
              <zi-tag>FILTER</zi-tag>
            </p></zi-grid
          >
          <zi-grid :xs="14" :md="14">
            <zi-textarea
              placeholder="Filter query"
              :rows="1"
              :disabled="!togglefilter"
              v-model="filter"
            ></zi-textarea>
          </zi-grid>

          <zi-grid :xs="10" :md="6">
            <zi-grid
              container
              align-items="center"
              :spacing="2"
              justify="center"
            >
              <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
              <zi-grid> <zi-toggle v-model="togglefilter"></zi-toggle></zi-grid>
            </zi-grid>
          </zi-grid>
        </zi-grid>

        <!-- POST   -->
        <zi-grid
          container
          align-items="center"
          :spacing="3"
          justify="center"
          class="pt-6"
          v-if="selectedRequestType === 'POST'"
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
            <zi-grid
              container
              align-items="center"
              :spacing="2"
              justify="center"
            >
              <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
              <zi-grid>
                <zi-toggle v-model="toggleCollectionId"></zi-toggle
              ></zi-grid>
            </zi-grid>
          </zi-grid>

          <zi-grid :xs="24">
            <p class="text-accent5 font-medium">PAYLOAD</p></zi-grid
          >
          <zi-grid :xs="24">
            <codemirror v-model="responsePayload" :options="options" />
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
          <zi-button type="success" auto @click="getKrateData">Send </zi-button>
        </template>
      </zi-fieldset>

      <zi-fieldset class="mb-8">
        <div class="text-lg font-medium">Response</div>
        <p class="border-b border-accent2 pt-2"></p>
        <client-only>
          <div class="max-w-5xl mx-auto mb-12 mt-6">
            <codemirror :value="responsePayload" :options="options" />
          </div>
        </client-only>
        <template #footer>
          <p>
            <span class="font-semibold text-lg"> Response Size:</span>
            {{ calculateResponseSize() }} Kilobytes
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
<style scoped>
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

.CodeMirror {
  height: 1200px !important;
}
</style>
