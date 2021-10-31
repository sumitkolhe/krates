<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl my-12 md:px-2 px-4">
        <p class="text-3xl font-medium">Settings</p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto my-12 md:px-2 px-4">
      <zi-fieldset class="mb-8" footer="Krate ID acts as a namespace for data.">
        <h3 class="text-lg font-medium">Delete Krate</h3>
        <zi-note type="warning" class="mt-6">
          This will delete all the data in your krate. This action is
          irreversible.</zi-note
        >
        <template #footer>
          <p></p>
          <zi-button
            type="danger"
            auto
            @click="deleteKrateDialog = !deleteKrateDialog"
            >Delete Krate
          </zi-button>
        </template>
      </zi-fieldset>
    </div>

    <zi-dialog
      :closeByModal="false"
      v-model="deleteKrateDialog"
      :beforeDone="deleteKrate"
    >
      <zi-card>
        <h3 class="pb-4">Delete Krate</h3>
        <zi-note type="error" label="NOTE">This action is irreversible</zi-note>
      </zi-card>
    </zi-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'krates',
  data() {
    return {
      krateId: '',
      deleteKrateDialog: false,
      krateDetails: {
        krateId: '',
        createdAt: '',
        apiKey: '',
        krateName: '',
      },
    }
  },

  mounted() {
    this.krateDetails = this.$store.getters['krates/getSelectedKrate']
  },

  methods: {
    async deleteKrate() {
      try {
        await this.$store.dispatch('request/deleteKrateData', {
          requestUrl: this.krateDetails.krateId,
          headers: this.krateDetails.apiKey
            ? { 'x-api-key': this.krateDetails.apiKey }
            : '',
        })
        this.$router.push('/dashboard')
      } catch (error: any) {
        ;(this as any).$Toast.show({
          type: 'danger',
          text: error.response.data.message || error,
          duration: 5000,
        })
      }
    },
  },
})
</script>
