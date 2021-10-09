<template>
  <div class="max-w-5xl mx-auto mt-12">
    <div class="grid grid-cols-3 gap-10">
      <NuxtLink
        :to="`dashboard/${base.baseId}`"
        v-for="base in allBases"
        :key="base.baseId"
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
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    allBases() {
      return this.$store.getters['bases/getAllBases']
    },
  },
  methods: {
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

.zi-tabs-container {
  border: none !important;
}
</style>
