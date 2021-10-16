<template>
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
      v-for="krate in allKrates"
      :key="krate.krateId"
      class="cursor-pointer"
      @click="setSelectedKrate(krate.krateId)"
    >
      <zi-fieldset
        class="text-accent8 hover:drop-shadow-xl"
        footer="The Evil Rabbit Jumped over the Fence"
      >
        <span class="text-lg font-semibold">Krate ID</span>
        <span
          class="text-sm float-right border border-accent2 py-1 px-2 rounded-md"
        >
          {{ numberOfDays(krate.createdAt) }}</span
        >
        <zi-snippet :text="krate.krateId" class="mt-6"></zi-snippet>
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
            :to="{ path: `dashboard/${krate.krateId}` }"
            class="float-left"
          >
            <zi-button size="small" auto class="float-right"
              ><arrow-right-icon /> </zi-button
          ></NuxtLink>
        </template>
      </zi-fieldset>
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
    },
    numberOfDays(krateDate: number) {
      const currentDate = Date.now()
      const days = Math.round((currentDate - krateDate) / (1000 * 60 * 60 * 24))
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
