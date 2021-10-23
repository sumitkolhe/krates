<template>
  <!-- GET  -->
  <zi-grid
    container
    align-items="center"
    :spacing="3"
    justify="center"
    class="pt-6 pb-2"
  >
    <zi-grid :xs="24" :md="4">
      <p class="text-accent5 font-medium">
        <zi-tag>RECORD ID</zi-tag>
      </p></zi-grid
    >
    <zi-grid :xs="14" :md="14">
      <zi-textarea
        placeholder="Record ID"
        :rows="1"
        :disabled="!toggleRecord && !toggleCollection"
        v-on:input="updateRecordId"
      ></zi-textarea
    ></zi-grid>

    <zi-grid :xs="10" :md="6">
      <zi-grid container align-items="center" justify="center" :spacing="2">
        <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
        <zi-grid> <zi-toggle v-model="toggleRecord"></zi-toggle></zi-grid>
      </zi-grid>
    </zi-grid>

    <zi-more text="OR" text-up="OR"></zi-more>

    <zi-grid :xs="24" :md="4">
      <p class="text-accent5 font-medium">
        <zi-tag>COLLECTION ID</zi-tag>
      </p></zi-grid
    >
    <zi-grid :xs="14" :md="14">
      <zi-textarea
        placeholder="Collection ID"
        :rows="1"
        :disabled="!toggleCollection && !toggleRecord"
        v-on:input="updateCollectionId"
      ></zi-textarea
    ></zi-grid>

    <zi-grid :xs="10" :md="6">
      <zi-grid container align-items="center" justify="center" :spacing="2">
        <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
        <zi-grid> <zi-toggle v-model="toggleCollection"></zi-toggle></zi-grid>
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
        v-on:input="updateLimit"
      ></zi-textarea>
    </zi-grid>

    <zi-grid :xs="10" :md="6">
      <zi-grid container align-items="center" :spacing="2" justify="center">
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
        v-on:input="updateSkip"
      ></zi-textarea>
    </zi-grid>

    <zi-grid :xs="10" :md="6">
      <zi-grid container align-items="center" :spacing="2" justify="center">
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
        v-on:input="updateFilter"
      ></zi-textarea>
    </zi-grid>

    <zi-grid :xs="10" :md="6">
      <zi-grid container align-items="center" :spacing="2" justify="center">
        <zi-grid> <p class="text-accent5 font-medium">ENABLE</p></zi-grid>
        <zi-grid> <zi-toggle v-model="togglefilter"></zi-toggle></zi-grid>
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
      toggleRecord: false,
      toggleCollection: false,
      toggleLimit: false,
      toggleSkip: false,
      togglefilter: false,
      requestParams: {
        recordId: '',
        collectionId: '',
        limit: '',
        skip: '',
        filter: '',
      },
    }
  },

  methods: {
    // toggleRecord() {
    //   this.toggleCollection = false
    //   this.toggleLimit = false
    //   this.toggleSkip = false
    //   this.togglefilter = false
    // },
    updateRecordId(event: any) {
      this.requestParams.recordId = event
      this.updateRequestParams()
    },
    updateCollectionId(event: any) {
      this.requestParams.collectionId = event
      this.updateRequestParams()
    },
    updateFilter(event: any) {
      this.requestParams.filter = event
      this.updateRequestParams()
    },
    updateLimit(event: any) {
      this.requestParams.limit = event
      this.updateRequestParams()
    },
    updateSkip(event: any) {
      this.requestParams.skip = event
      this.updateRequestParams()
    },

    updateRequestParams() {
      this.$store.commit('request/setRequestParams', this.requestParams)
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
