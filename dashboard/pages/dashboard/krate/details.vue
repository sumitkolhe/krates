<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl my-12 md:px-2 px-4">
        <p class="text-3xl font-medium">Details</p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto my-12 md:px-2 px-4">
      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        <zi-fieldset>
          <h3 class="text-lg font-medium pb-6">Krate ID</h3>

          <zi-snippet :text="krateDetails.krateId" type="lite"></zi-snippet>
          <template #footer>
            <p>
              Learn more about
              <zi-link bold href="//docs.krat.es" more color>Krate ID</zi-link>
            </p>
          </template>
        </zi-fieldset>
        <zi-fieldset>
          <h3 class="text-lg font-medium pb-6">API Key</h3>

          <zi-snippet
            :text="
              krateDetails.apiKey
                ? krateDetails.apiKey
                : 'This krate is not protected'
            "
            :copy="krateDetails.apiKey !== undefined"
            type="lite"
          ></zi-snippet>
          <template #footer>
            <p>
              Learn more about
              <zi-link bold href="//docs.krat.es" more color
                >Protected Krates</zi-link
              >
            </p>
          </template>
        </zi-fieldset>
      </div>

      <div class="grid md:grid-cols-3 gap-6 md:gap-10 mt-10">
        <zi-card hoverable>
          <h3 class="text-lg font-medium mb-6">Krate Size</h3>
          <zi-snippet
            :text="`${(krateDetails.krateSize / 1024)
              .toString()
              .slice(0, 5)} Kb`"
            :copy="false"
            type="lite"
          >
          </zi-snippet>
        </zi-card>
        <zi-card hoverable>
          <h3 class="text-lg font-medium mb-6">Total Collections</h3>
          <zi-snippet
            :text="`${krateDetails.totalCollections} collections`"
            :copy="false"
            type="lite"
          >
          </zi-snippet>
        </zi-card>
        <zi-card hoverable>
          <h3 class="text-lg font-medium mb-6">Total Records</h3>
          <zi-snippet
            :text="`${krateDetails.totalRecords} Records`"
            :copy="false"
            type="lite"
          >
          </zi-snippet>
        </zi-card>
      </div>

      <div class="grid md:grid-cols-3 gap-6 md:gap-10 mt-6 md:mt-10">
        <zi-card hoverable>
          <h3 class="text-lg font-medium mb-6">Created On</h3>
          <zi-snippet
            :text="`${
              krateDetails.createdAt
                ? new Date(krateDetails.createdAt).toString().split('G')[0]
                : 'No records yet!'
            }`"
            :copy="false"
            type="lite"
          >
          </zi-snippet>
        </zi-card>
        <zi-card class="" hoverable>
          <h3 class="text-lg font-medium mb-6">Updated On</h3>
          <zi-snippet
            :text="`${
              krateDetails.updatedAt
                ? new Date(krateDetails.updatedAt).toString().split('G')[0]
                : 'No records yet!'
            }`"
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
      krateDetails: {
        krateId: '',
        apiKey: '',
        krateSize: 0,
        totalRecords: 0,
        totalCollections: 0,
        createdAt: '',
        updatedAt: '',
      },
    }
  },

  async mounted() {
    const data = this.$store.getters['krates/getSelectedKrate']

    try {
      await this.$store.dispatch('request/getKrateStats', data.krateId)
    } catch (error: any) {
      ;(this as any).$Toast.show({
        type: 'danger',
        text: error.response.data.message || error,
        duration: 5000,
      })
    }

    const stats = this.$store.getters['request/getKrateStats']

    this.krateDetails = stats
    this.krateDetails.krateId = data.krateId
    this.krateDetails.apiKey = data.apiKey
  },
})
</script>
