<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl pt-8 pb-12 text-center">
        <package-icon class="h-20 w-20 align-center block mx-auto mb-6" />
        <zi-button
          :icon="plusCircle"
          shadow
          size="big"
          type="success"
          class="inline-block"
          @click="openNewKrateDialog"
          >Add Krate</zi-button
        >
        <zi-dialog
          :closeByModal="false"
          v-model="addKratedialog"
          :beforeDone="createNewKrate"
        >
          <zi-fieldset>
            <h3 class="pb-6">Add Krate</h3>
            <div>
              <zi-input
                prefix-label="Krate Name"
                autofocus="true"
                v-model="newKrateName"
                class="w-full mb-4"
              >
              </zi-input>
            </div>
            <div>
              <zi-input
                prefix-label="krat.es/"
                :disabled="!customKrateToggle"
                autofocus="true"
                v-model="newKrateId"
                class="w-full"
              >
              </zi-input>
            </div>

            <template v-slot:footer>
              <span class="font-medium mr-4">Custom ID</span>
              <zi-toggle class="ml-4" v-model="customKrateToggle"></zi-toggle>
            </template>
          </zi-fieldset>
        </zi-dialog>
      </div>
    </div>

    <DashboardAllKrates />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import plusCircle from '@geist-ui/vue-icons/packages/plus-circle'

export default Vue.extend({
  layout: 'dashboard',
  data() {
    return {
      plusCircle,
      addKratedialog: false,
      customKrateToggle: false,
      newKrateId: '',
      newKrateName: '',
    }
  },
  computed: {},
  methods: {
    openNewKrateDialog() {
      this.addKratedialog = !this.addKratedialog
      this.newKrateId = this.generateKrateId()
    },

    createNewKrate() {
      this.$store.dispatch('krates/createNewKrate', {
        krateId: this.newKrateId,
        krateName: this.newKrateName,
      })
      this.addKratedialog = !this.addKratedialog
      this.customKrateToggle = !this.customKrateToggle
    },

    generateKrateId() {
      let date = new Date().getTime()
      const id = 'xxyxxxxxxyxxxxxyxxxx'.replace(/[xy]/g, function (c) {
        const r = (date + Math.random() * 16) % 16 | 0
        date = Math.floor(date / 16)
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
      })
      return id.toString()
    },
  },
})
</script>
