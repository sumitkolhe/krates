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
              dark:text-white
            "
            aria-label="logo"
          >
            <box-icon class="h-12 w-12" />

            <span class="text-2xl font-bold pl-4 dark:text-white"
              >Detabase
            </span>
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
          <div class="text-accent6 text-sm text-center py-2">
            © 2021 Detabase. All rights reserved.
          </div>
        </nav>

        <a href="https://github.com/sumitkolhe/detabase" target="_blank"
          ><github-icon
        /></a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GeistUI from '@geist-ui/vue'
export default Vue.extend({})
</script>
<style>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
