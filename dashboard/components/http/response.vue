<template>
  <zi-fieldset class="mt-8 mb-12">
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
</template>

<script lang="ts">
import Vue from 'vue'
import { calculateObjectSize } from 'bson'
import '@nuxtjs/axios'
export default Vue.extend({
  layout: 'krates',

  data() {
    return {}
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

    responsePayload(): String {
      const payload = this.$store.getters['request/getResponsePayload']
      return payload ? JSON.stringify(payload, null, 2) : ''
    },
  },

  methods: {
    calculateResponseSize() {
      return (
        calculateObjectSize(
          this.$store.getters['request/getResponsePayload'] || {}
        ) / 1000
      )
        .toString()
        .slice(0, 4)
    },
  },
})
</script>
