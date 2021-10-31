<template>
  <zi-fieldset class="mt-8 mb-12" v-if="responsePayload">
    <div class="text-lg font-medium">Response</div>
    <client-only>
      <div
        class="max-w-5xl mx-auto mb-12 mt-6 border border-accent2 rounded-sm"
      >
        <codemirror :value="responsePayload" :options="options" />
      </div>
    </client-only>
    <template #footer>
      <p>
        <span class="font-semibold text-lg"> Response Size:</span>
        {{ calculateResponseSize() }} Kilobytes
      </p>

      <zi-button type="primary" auto @click="copyResponse(responsePayload)"
        >Copy
      </zi-button>
    </template>
  </zi-fieldset>
</template>

<script lang="ts">
import Vue from 'vue'
import { calculateObjectSize } from 'bson'
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

    responsePayload(): string {
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

    async copyResponse(text: string) {
      if (!text) return
      const clipboardEl = document.querySelector('#geist-clipboard')
      const copyText = (el: any) => {
        const selection = window.getSelection()!
        const range = document.createRange()
        range.selectNode(el)
        selection.removeAllRanges()
        selection.addRange(range)
        try {
          document.execCommand('Copy')
          ;(this as any).$Toast.show({
            type: 'success',
            text: 'Copied to clipboard!',
            duration: 5000,
          })
        } catch (error) {
          console.error('copy failed!')
        }
        selection.removeAllRanges()
        el.textContent = ''
      }
      if (clipboardEl) {
        clipboardEl.textContent = text
        copyText(clipboardEl)
        return
      }
      const el = document.createElement('div')
      el.id = 'geist-clipboard'
      el.style.whiteSpace = 'pre'
      el.textContent = text
      document.body.appendChild(el)
      copyText(el)
    },
  },
})
</script>
