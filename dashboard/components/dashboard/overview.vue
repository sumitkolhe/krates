<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl pt-8 pb-12 text-center">
        <database-icon class="h-20 w-20 align-center block mx-auto mb-6" />
        <zi-button
          :icon="plusCircle"
          shadow
          size="big"
          type="success"
          class="inline-block"
          @click="openNewBaseDialog"
          >Add Base</zi-button
        >
        <zi-dialog
          :closeByModal="false"
          v-model="addBasedialog"
          :beforeDone="createNewBase"
        >
          <zi-fieldset footer="The Evil Rabbit Jumped over the Fence">
            <h3 class="pb-6">Add Base</h3>
            <div>
              <zi-input
                prefix-label="https://detabase.me/"
                :disabled="!customBaseToggle"
                autofocus="true"
                v-model="newBaseId"
              >
              </zi-input>
            </div>
            <template v-slot:footer>
              <span class="font-medium mr-4">Custom ID</span>
              <zi-toggle class="ml-4" v-model="customBaseToggle"></zi-toggle>
            </template>
          </zi-fieldset>
        </zi-dialog>
      </div>
    </div>

    <DashboardAllBases />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import plusCircle from '@geist-ui/vue-icons/packages/plus-circle'
import database from '@geist-ui/vue-icons/packages/database'
import { generateBaseId } from '~/utils/generateBaseId'
export default Vue.extend({
  data() {
    return {
      plusCircle,
      database,
      addBasedialog: false,
      customBaseToggle: false,
      newBaseId: '',
    }
  },
  computed: {},
  methods: {
    openNewBaseDialog() {
      this.addBasedialog = !this.addBasedialog
      this.newBaseId = generateBaseId()
    },

    createNewBase() {
      this.$store.dispatch('bases/createNewBase', this.newBaseId)
      this.addBasedialog = !this.addBasedialog
      this.customBaseToggle = !this.customBaseToggle
    },
  },
})
</script>

<style>
.zi-snippet > pre::before {
  content: '';
  user-select: none;
}
.zi-input-group {
  height: 42px !important;
}
.zi-input-group.prefix input {
  height: 42px !important;
}

.zi-dialog-content {
  padding: 0 !important;
}
</style>
