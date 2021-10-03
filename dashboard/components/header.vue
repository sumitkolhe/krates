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
            aria-label="Cruip"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 dark:text-white"
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
            <span class="pl-4 font-bold text-2xl dark:text-white"
              >Detabase</span
            >
          </NuxtLink>
        </div>

        <nav
          v-if="$route.path !== '/dashboard'"
          class="md:flex flex-grow hidden"
        >
          <ul class="flex flex-grow justify-end flex-wrap items-center">
            <li>
              <NuxtLink
                to="/dashboard"
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
                  text-gray-200
                  bg-black
                  dark:bg-white dark:text-black
                  hover:bg-white hover:border-black hover:text-black
                  dark:hover:bg-black
                  dark:hover:border-white
                  dark:hover:text-white
                  ml-3
                  p-2
                  px-4
                "
              >
                <span>Dashboard</span>

                <svg
                  class="w-3 h-3 fill-current flex-shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({})
</script>
