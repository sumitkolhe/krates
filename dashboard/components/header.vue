<template>
  <header
    class="
      fixed
      w-full
      z-30
      md:bg-opacity-90
      transition
      duration-300
      ease-in-out
      bg-geist-background
      blur
      border-b border-accent2
    "
  >
    <div class="max-w-6xl mx-auto px-5 sm:px-6">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <p class="pl-4 font-bold text-2xl text-accent8">Detabase</p>
          </NuxtLink>
        </div>

        <nav v-if="$route.path !== '/dashboard'" class="md:flex flex-grow">
          <ul class="flex flex-grow justify-end flex-wrap items-center">
            <NuxtLink to="/dashboard">
              <zi-button
                type="primary"
                size="large"
                auto
                :icon-right="arrowRight"
              >
                <span class="pr-6">Dashboard</span>
              </zi-button>
            </NuxtLink>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import arrowRight from '@geist-ui/vue-icons/packages/arrow-right'
export default Vue.extend({
  data: () => ({
    arrowRight,
  }),
})
</script>
