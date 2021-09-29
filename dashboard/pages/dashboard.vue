<template>
  <div class="max-w-6xl mx-auto pt-56">
    <!-- <Request :bucket="generatedBoxId" /> -->

    <div class="">
      <div
        class="
          relative
          flex flex-col
          border
          py-6
          border-gray-200
          rounded
          bg-white
          mx-6
          px-6
          my-12
        "
      >
        <h3 class="text-lg font-medium">Bucket ID</h3>
        <p class="text-sm mt-3 mb-2">This is your primary namespace id</p>
        <input
          v-model="bucketId"
          type="text"
          class="
            border border-gray-200
            rounded
            text-sm
            p-2
            my-2
            w-1/5
            cursor-not-allowed
            active:border-none
          "
        />
      </div>
    </div>

    <client-only>
      <div class="max-w-6xl mx-auto px-5 sm:px-6">
        <div class="codemirror">
          <codemirror v-model="code" class="codemirror" :options="options" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      bucketId: '',
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
      code: `{
  "method": "GET",
  "args": {},
  "data": "",
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "br, gzip",
    "accept-language": "en-US,en;q=0.5",
    "client-ip": "100.64.0.173",
    "connection": "keep-alive",
    "dnt": "1",
    "forwarded": "for=8.17.206.150;proto=https",
    "host": "echo.hoppscotch.io",
    "origin": "https://hoppscotch.io",
    "referer": "https://hoppscotch.io/",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:93.0) Gecko/20100101 Firefox/93.0",
    "via": "http/1.1 Netlify[1510c625-d031-4f5a-abc5-3cb96d7e1cc7] (Netlify Edge Server)",
    "x-bb-ab": "0.962265",
    "x-bb-client-request-uuid": "01FG8D9T80FZHNY4HSPVCFX5QZ",
    "x-bb-ip": "8.17.206.150",
    "x-bb-loop": "1",
    "x-cdn-domain": "www.bitballoon.com",
    "x-country": "IN",
    "x-datadog-parent-id": "6715390182971566616",
    "x-datadog-sampling-priority": "1",
    "x-datadog-trace-id": "15176559194503943294",
    "x-forwarded-for": "8.17.206.150, 100.64.0.173",
    "x-forwarded-proto": "https",
    "x-language": "en,en;q=0.5",
    "x-nf-client-connection-ip": "8.17.206.150",
    "x-nf-connection-proto": "https",
    "x-nf-request-id": "01FG8D9T80FZHNY4HSPVCFX5QZ"
  },
  "path": "/",
  "isBase64Encoded": false
}`,
    }
  },

  mounted() {
    let d = new Date().getTime()
    const id = 'xxyxxxxxxyxxxxxyxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
    this.bucketId = id
  },
})
</script>
