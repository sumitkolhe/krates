<template>
  <div>
    <div class="border-b border-accent2">
      <div class="mx-auto max-w-5xl pt-8 pb-12 text-center">
        <database-icon class="h-20 w-20 align-center block mx-auto mb-6" />

        <zi-button
          :icon="database"
          shadow
          size="big"
          type="success"
          class="inline-block"
          @click="openDialog"
          >Create Base</zi-button
        >

        <zi-dialog closeByModal v-model="visible" :beforeDone="createNewBase">
          <h3>Create new base?</h3>
          <zi-note label="" filled class="mt-20"> {{ newBaseId }} </zi-note>
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
        @click="setSelectedBaseAndNavigate(base.baseId)"
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
            <a href="http://google.com" class="float-left">
              <zi-button size="small" auto class="float-right"
                ><arrow-right-icon /> </zi-button
            ></a>
          </template>
        </zi-fieldset>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import database from '@geist-ui/vue-icons/packages/database'

export default Vue.extend({
  data() {
    return {
      newBaseId: '',
      visible: false,
      database,
    }
  },
  computed: {
    allBases() {
      return this.$store.getters['bases/getAllBases']
    },
  },
  methods: {
    openDialog() {
      this.visible = true
    },
    createNewBase() {
      this.$store.dispatch('bases/createNewBase')
      this.visible = !this.visible
    },
    setSelectedBaseAndNavigate(baseId: string) {
      this.$store.commit('bases/setSelectedBase', baseId)
      this.$router.push(`dashboard/${baseId}`)
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
</style>
