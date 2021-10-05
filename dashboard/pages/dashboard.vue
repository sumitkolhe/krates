<template>
  <div>
    <CommonBlock />
    <!-- <h1 class="text-4xl font-semibold max-w-5xl mx-auto px-6 pb-8">
      Dashboard
    </h1> -->

    <div class="border-accent2 border-b absolute mt-8 w-full"></div>
    <zi-tabs class="max-w-5xl mx-auto">
      <zi-tabs-item
        v-for="(item, index) in items"
        :key="item.value + index"
        :label="item.label"
        :value="item.value"
      >
        <div class="max-w-5xl mx-auto pt-12">
          <div v-if="item.label === 'Base Details'">
            <zi-fieldset
              class="mb-8"
              footer="Base ID acts as a namespace for data."
            >
              <h3 class="text-lg font-medium">Base ID</h3>
              <p class="text-sm mt-3 mb-2">
                Base ID acts as a namespace for data.
              </p>
              <zi-snippet :text="baseId" width="200px"></zi-snippet>
              <template #footer>
                <p>
                  This is your personal detabase ID and is used for storing your
                  data.
                </p>
                <zi-button
                  type="success"
                  class="px-4"
                  auto
                  @click="regenerateBaseId"
                  >Regenerate ID
                </zi-button>
              </template>
            </zi-fieldset>
            <zi-fieldset
              class="mb-8"
              footer="Base ID acts as a namespace for data."
            >
              <h3 class="text-lg font-medium">Delete Base</h3>
              <zi-note type="warning" class="mt-6">
                This will delete all data in your base. This action is
                irreversible.</zi-note
              >
              <template #footer>
                <p></p>
                <zi-button type="danger" auto @click="regenerateBaseId"
                  >Delete Base
                </zi-button>
              </template>
            </zi-fieldset>
          </div>

          <DashboardRequest :id="baseId" v-else /></div
      ></zi-tabs-item>
    </zi-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      items: [
        { label: 'Base Details', value: 'details' },
        { label: 'Connection', value: 'connect' },
      ],
      baseId: '',
    }
  },

  mounted() {
    const storedBaseId = localStorage.getItem('baseId') as string
    if (storedBaseId) this.baseId = storedBaseId
    else {
      this.baseId = this.generateBaseId()
      localStorage.setItem('baseId', this.baseId)
    }
  },

  methods: {
    generateBaseId() {
      let date = new Date().getTime()
      const id = 'xxyxxxxxxyxxxxxyxxxx'.replace(/[xy]/g, function (c) {
        const r = (date + Math.random() * 16) % 16 | 0
        date = Math.floor(date / 16)
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
      })
      return id.toString()
    },

    regenerateBaseId() {
      this.baseId = this.generateBaseId()
      localStorage.setItem('baseId', this.baseId)
    },
  },
})
</script>

<style>
.zi-snippet > pre::before {
  content: '';
  user-select: none;
}

.zi-tabs-container {
  border: none !important;
}
</style>
