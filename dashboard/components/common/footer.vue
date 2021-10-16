<template>
  <div
    class="
      w-full
      z-30
      md:bg-opacity-90
      transition
      duration-300
      ease-in-out
      bg-accent1
      border-t border-accent2
    "
  >
    <footer class="max-w-5xl mx-auto">
      <div
        class="
          flex flex-col
          md:flex-row
          justify-between
          items-center
          border-b border-accent2
          gap-4
          py-8
        "
      >
        <nav
          class="
            flex flex-wrap
            justify-center
            md:justify-start
            gap-x-4 gap-y-2
            md:gap-6
          "
        >
          <NuxtLink
            to="/"
            class="
              inline-flex
              cursor-pointer
              items-center
              justify-center
              border border-transparent
              rounded
              leading-snug
              transition
              duration-150
              ease-in-out
              text-accent8
            "
            aria-label="logo"
          >
            <box-icon class="h-10 w-10" />

            <p class="text-2xl font-bold pl-4">Detabase</p>
          </NuxtLink>
        </nav>

        <div class="flex gap-4">
          <CommonTheme />
        </div>
      </div>
      <div
        class="
          flex flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          py-10
        "
      >
        <div class="text-accent6 text-sm text-center py-2">
          © 2021 Detabase. All rights reserved.
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
          <zi-dot :type="healthy ? 'success' : 'danger'"></zi-dot>
          <span
            :class="
              healthy
                ? 'text-blue-500 font-medium px-1'
                : 'text-red-500 font-medium px-1'
            "
          >
            {{ healthy ? 'System Healthy' : 'System Unhealthy' }}
          </span>
        </div>

        <a
          href="https://github.com/sumitkolhe/detabase"
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
  data() {
    return {
      healthy: false,
    }
  },
  async mounted() {
    const response = await this.$store.dispatch('request/getHealth')
    if (response?.status === 200) this.healthy = true
  },
})
</script>
<style>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
