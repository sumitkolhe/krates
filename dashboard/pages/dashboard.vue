<template>
  <div>
    <div class="pt-32 pb-12 border-b border-accent2">
      <h1 class="text-4xl font-semibold max-w-5xl mx-auto px-6">Dashboard</h1>
    </div>
    <!-- <div class="max-w-5xl mx-auto">
      <zi-tabs class="" @label-selected="selectHandler">
        <zi-tabs-item
          v-for="(item, index) in items"
          :key="item.value + index"
          :label="item.label"
          :value="item.value"
          class="border-t border-red-600"
        >
          ok
        </zi-tabs-item>
      </zi-tabs>
    </div> -->

    <div class="max-w-5xl mx-auto pt-12">
      <zi-fieldset class="mb-8" footer="Base ID acts as a namespace for data.">
        <h3 class="text-lg font-medium">Base ID</h3>
        <p class="text-sm mt-3 mb-2">Base ID acts as a namespace for data.</p>
        <zi-snippet :text="baseId" width="300px"></zi-snippet>
        <template #footer>
          <p>
            This is your personal detabase ID and is used for storing your data.
          </p>
          <zi-button type="error" auto @click="regenerateBaseId"
            >Regenerate ID
          </zi-button>
        </template>
      </zi-fieldset>
      <Request :base-id="baseId" />
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
          <zi-button type="primary" auto @click="regenerateBaseId"
            >Copy
          </zi-button>
        </template>
      </zi-fieldset>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      items: [
        { label: 'Setting', value: 'setting' },
        { label: 'Lambda', value: 'lambda' },
        { label: 'Server', value: 'server' },
      ],
      baseId: '',
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
      payload: `{"method":"GET","args":{},"data":"","path":"/","isBase64Encoded":false}`,
    }
  },

  mounted() {
    const storedBaseId = localStorage.getItem('baseId')

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
      return id
    },

    regenerateBaseId() {
      this.baseId = this.generateBaseId()
      localStorage.setItem('baseId', this.baseId)
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
.zi-snippet > pre::before {
  content: '';
  user-select: none;
}
.zi-tabs-container {
  border-bottom: none !important;
}
</style>
