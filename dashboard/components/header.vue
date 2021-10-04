<template>
  <header
    class="
      fixed
      w-full
      z-30
      transition
      duration-300
      ease-in-out
      bg-geist-background
      md:bg-opacity-10
      border-b border-accent2
    "
  >
    <div class="max-w-5xl mx-auto px-5 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <div class="flex-shrink-0">
          <NuxtLink
            to="/"
            class="
              font-medium
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
              py-3
            "
          >
            <box-icon class="w-10 h-10" />

            <p class="pl-4 font-bold text-2xl text-accent8">Detabase</p>
          </NuxtLink>
        </div>

        <nav
          v-if="$route.path !== '/dashboard'"
          class="md:flex flex-grow justify-end flex-wrap items-center"
        >
          <NuxtLink to="/dashboard">
            <zi-button type="primary" auto> Dashboard </zi-button>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({}),
})
</script>
