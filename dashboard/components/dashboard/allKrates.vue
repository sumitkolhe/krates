<template>
  <div class="max-w-5xl mx-auto px-4 my-12">
    <div
      v-show="allKrates.length > 0"
      class="grid md:grid-cols-3 grid-cols-auto sm:grid-cols-2 gap-8 md:gap-10"
    >
      <div
        v-for="krate in allKrates"
        :key="krate.krateId"
        class="cursor-pointer"
        @click="setSelectedKrate(krate)"
      >
        <zi-fieldset class="text-accent8 hover:drop-shadow-xl">
          <span class="text-lg font-semibold">{{
            truncatedKrateName(krate.krateName)
          }}</span>
          <span
            class="
              text-sm
              float-right
              border border-accent2
              py-1
              px-2
              rounded-md
            "
          >
            {{ numberOfDays(krate.createdAt) }}</span
          >

          <zi-snippet
            :copy="false"
            :text="krate.krateId"
            class="mt-8 mb-4"
            type="lite"
          ></zi-snippet>

          <template v-slot:footer>
            <p class="h-6"></p>

            <span>
              <zi-tooltip
                v-if="krate.apiKey"
                content="Protected Krate"
                placement="left"
              >
                <!-- <shield-icon class="h-5 w-5" color="blue"
              /> -->

                <zi-dot
                  type="success"
                  class="border rounded-full p-1 border-blue-500"
                ></zi-dot>
              </zi-tooltip>
              <zi-tooltip content="Public Krate" placement="left" v-else>
                <!-- <shield-off-icon class="h-5 w-5" color="#f55"
              /> -->
                <zi-dot
                  type="warning"
                  class="border rounded-full p-1 border-yellow-400"
                ></zi-dot>
              </zi-tooltip>
            </span>
          </template>
        </zi-fieldset>
      </div>
    </div>

    <div class="max-w-5xl mx-auto my-24" v-show="allKrates.length < 1">
      <coffee-icon class="h-12 w-12 mx-auto" />
      <p class="text-center font-semibold">No Krates found</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {}
  },
  computed: {
    allKrates() {
      return this.$store.getters['krates/getAllKrates']
    },
  },

  methods: {
    setSelectedKrate(krateId: string) {
      this.$store.commit('krates/setSelectedKrate', krateId)
      this.$router.push('/dashboard/krate/details')
    },
    numberOfDays(krateDate: number) {
      const currentDate = Date.now()
      const days = Math.round((currentDate - krateDate) / (1000 * 60 * 60 * 24))
      return days === 0 ? '0d ago' : `${days}d ago`
    },
    truncatedKrateName(krateName: string) {
      return `${krateName?.slice(0, 15)}${krateName?.length > 15 ? '..' : ''}`
    },
  },
})
</script>
