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
          <zi-card>
            <h4 class="pb-6">Add Krate</h4>
            <div class="-mt-4">
              <zi-input
                prefix-label="Krate Name"
                autofocus="true"
                v-model="newKrateName"
                class="w-full mb-4"
                :type="inputError.name"
                :placeholder="
                  inputError.name === 'danger' ? 'Name is required' : ''
                "
              >
              </zi-input>
            </div>
            <div class="flex flex-row flex-grow mt-4 mb-2">
              <div class="font-medium mr-4 flex-grow">
                <zi-tag> Custom ID</zi-tag>
              </div>
              <div>
                <zi-toggle class="ml-4" v-model="customKrateToggle"></zi-toggle>
              </div>
            </div>
            <div>
              <zi-input
                prefix-label="krat.es/"
                :disabled="!customKrateToggle"
                autofocus="true"
                v-model="newKrateId"
                :type="inputError.krate"
                :placeholder="
                  inputError.krate === 'danger' ? 'Krate ID is invalid' : ''
                "
                class="w-full"
              >
              </zi-input>
            </div>

            <div class="flex flex-row flex-grow mt-6 mb-2">
              <div class="font-medium mr-4 flex-grow">
                <div class="flex flex-row">
                  <zi-tag> Protected Krate</zi-tag>
                  <zi-link href="//docs.krat.es" pure class="m-1 ml-2">
                    <question-circle-icon />
                  </zi-link>
                </div>
              </div>
              <div>
                <zi-toggle
                  class="ml-4"
                  v-model="protectedKrateToggle"
                ></zi-toggle>
              </div>
            </div>
            <div>
              <zi-input
                :disabled="!protectedKrateToggle"
                autofocus="true"
                v-model="newKrateApiKey"
                :type="inputError.apiKey"
                :placeholder="
                  inputError.apiKey === 'danger' ? 'API key is invalid' : ''
                "
                class="w-full"
              >
              </zi-input>
            </div>
          </zi-card>
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
      protectedKrateToggle: false,
      newKrateId: '',
      newKrateName: '',
      newKrateApiKey: '',
      inputError: {
        name: 'primary',
        krate: 'primary',
        apiKey: 'primary',
      },
    }
  },

  methods: {
    openNewKrateDialog() {
      this.addKratedialog = !this.addKratedialog
      this.newKrateId = this.generateKrateId()
      this.newKrateApiKey = this.generateApiKey()
    },

    async createNewKrate() {
      if (!this.newKrateName.trim()) return (this.inputError.name = 'danger')
      if (this.newKrateId.trim().length < 20)
        return (this.inputError.krate = 'danger')
      if (this.newKrateApiKey.trim().length < 36)
        return (this.inputError.apiKey = 'danger')

      try {
        await this.$store.dispatch('krates/createNewKrate', {
          krateId: this.newKrateId,
          krateName: this.newKrateName,
          apiKey: this.protectedKrateToggle ? this.newKrateApiKey : null,
        })
        this.customKrateToggle = false
        this.protectedKrateToggle = false
        this.newKrateName = ''
        this.addKratedialog = !this.addKratedialog
      } catch (error: any) {
        ;(this as any).$Toast.show({
          type: 'danger',
          text: error.response.data.message || error,
          duration: 5000,
        })
      }
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

    generateApiKey(): string {
      // @ts-ignore
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g,
        (c: number) =>
          // tslint:disable-next-line:no-bitwise
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
      )
    },
  },
})
</script>
