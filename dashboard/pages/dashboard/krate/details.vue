<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl my-12 md:px-2 px-4">
        <p class="text-3xl font-medium">Details</p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto my-12 md:px-2 px-4">
      <zi-fieldset class="my-8">
        <h3 class="text-lg font-medium pb-6">Krate ID</h3>

        <zi-snippet :text="krateId" type="lite"></zi-snippet>
        <template #footer>
          <p>
            This is your personal krate ID and is used for storing your data.
          </p>
        </template>
      </zi-fieldset>

      <div class="grid md:grid-cols-3 gap-6 md:gap-12">
        <zi-card hoverable>
          <h3 class="text-lg font-medium mb-6">Krate Size</h3>
          <zi-snippet
            :text="`${(krateStats.size / 1024).toString().slice(0, 5)} Kb`"
            :copy="false"
            type="lite"
          >
          </zi-snippet>
        </zi-card>
        <zi-card class="" hoverable>
          <h3 class="text-lg font-medium mb-6">Total Records</h3>
          <zi-snippet
            :text="`${krateStats.totalRecords} Records`"
            :copy="false"
            type="lite"
          >
          </zi-snippet>
        </zi-card>
        <zi-card class="" hoverable>
          <h3 class="text-lg font-medium mb-6">Created At</h3>
          <zi-snippet
            :text="`${krateStats.createdAt}`"
            :copy="false"
            type="lite"
          >
          </zi-snippet>
        </zi-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'krates',
  data() {
    return {
      krateId: '',
      krateStats: {
        size: 0,
        totalRecords: 0,
        createdAt: '',
      },
    }
  },

  async mounted() {
    this.krateId = this.$store.getters['krates/getSelectedKrate']
    await this.$store.dispatch('request/getKrateStats', this.krateId)
    const stats = this.$store.getters['request/getKrateStats']

    this.krateStats.size = stats.krateSize
    this.krateStats.totalRecords = stats.totalRecords
    this.krateStats.createdAt =
      stats.totalRecords > 0
        ? new Date(stats.createdAt).toString().split('G')[0]
        : 'No records yet!'
  },
})
</script>
