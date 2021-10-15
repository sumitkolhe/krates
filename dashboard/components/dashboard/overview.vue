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
          closeByModal
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
                :value="newBaseId"
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

    <div
      class="
        grid
        md:grid-cols-3
        max-w-5xl
        mx-auto
        grid-cols-auto
        sm:grid-cols-2
        gap-10
        px-4
        my-12
      "
    >
      <div
        v-for="base in allBases"
        :key="base.baseId"
        class="cursor-pointer"
        @click="setSelectedBase(base.baseId)"
      >
        <zi-fieldset
          class="text-accent8 hover:drop-shadow-xl"
          footer="The Evil Rabbit Jumped over the Fence"
        >
          <span class="text-lg font-semibold">Base ID</span>
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
            {{ numberOfDays(base.createdAt) }}</span
          >
          <zi-snippet :text="base.baseId" class="mt-6"></zi-snippet>
          <template v-slot:footer>
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
              0 Kb</span
            >
            <NuxtLink
              :to="{ path: `dashboard/${base.baseId}` }"
              class="float-left"
            >
              <zi-button size="small" auto class="float-right"
                ><arrow-right-icon /> </zi-button
            ></NuxtLink>
          </template>
        </zi-fieldset>
      </div>
    </div>
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
    }
  },
  computed: {
    allBases() {
      return this.$store.getters['bases/getAllBases']
    },

    newBaseId() {
      return generateBaseId()
    },
  },
  methods: {
    openNewBaseDialog() {
      this.addBasedialog = true
    },

    createNewBase() {
      this.$store.dispatch('bases/createNewBase', this.newBaseId)
      this.addBasedialog = !this.addBasedialog
    },
    setSelectedBase(baseId: string) {
      this.$store.commit('bases/setSelectedBase', baseId)
    },
    numberOfDays(baseDate: number) {
      const currentDate = Date.now()
      const days = Math.round((currentDate - baseDate) / (1000 * 60 * 60 * 24))
      return days === 0 ? '0d ago' : `${days}d ago`
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
