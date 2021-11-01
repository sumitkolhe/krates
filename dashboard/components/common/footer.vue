<template>
  <div class="w-full z-30 bg-accent1 border-t border-accent2">
    <footer class="max-w-5xl mx-auto">
      <div class="border-b border-accent2 py-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <NuxtLink
            to="/"
            class="inline-flex cursor-pointer text-accent8"
            aria-label="logo"
          >
            <package-icon class="h-10 w-10" />
            <p class="text-2xl font-bold pl-4">Krates</p>
          </NuxtLink>

          <CommonTheme />
        </div>
      </div>

      <div
        class="
          flex flex-col
          md:flex-row
          justify-between
          items-center
          py-10
          gap-4
        "
      >
        <div class="text-accent6 text-sm text-center py-2">
          © 2021 Krates. All rights reserved.
        </div>

        <div
          class="
            border border-accent2
            p-2
            bg-geist-background
            rounded-md
            text-sm
          "
        >
          <span class="font-semibold">Status:</span>
          <zi-dot :type="health ? 'success' : 'danger'" class="pl-1"></zi-dot>
          <span
            :class="
              health
                ? 'text-blue-500 font-medium px-1'
                : 'text-red-500 font-medium px-1'
            "
          >
            {{ health ? 'System Healthy' : 'System Unhealthy' }}
          </span>
        </div>

        <a
          href="https://github.com/sumitkolhe/krates"
          class="text-accent8 hover:text-accent4"
          target="_blank"
          ><github-icon
        /></a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async mounted() {
    await this.$store.dispatch('request/getHealthStatus')
  },

  computed: {
    health() {
      const healthStatus = this.$store.getters['request/getHealthStatus']

      if (!healthStatus) {
        ;(this as any).$Toast.show({
          type: 'danger',
          text: 'System Unhealthy',
          duration: 5000,
        })
      }

      return healthStatus
    },
  },
})
</script>
