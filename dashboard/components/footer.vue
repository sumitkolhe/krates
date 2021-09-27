<template>
  <footer
    class="
      w-full
      z-30
      md:bg-opacity-90
      transition
      duration-300
      ease-in-out
      bg-gray-50
      blur
      border-t border-gray-200
      dark:bg-gray-900 dark:border-t dark:border-gray-600
    "
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between py-8 md:py-12">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
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
          <span class="text-2xl font-bold pl-4 dark:text-white">Detabase </span>
        </NuxtLink>

        <!-- Theme -->
        <h6 class="text-gray-800 font-medium mt-2">
          <div class="relative inline-block text-left dropdown">
            <span class="rounded-md shadow-sm"
              ><button
                class="
                  inline-flex
                  justify-center
                  w-full
                  px-4
                  py-2
                  text-sm
                  font-medium
                  leading-5
                  text-gray-700
                  transition
                  duration-100
                  ease-in-out
                  bg-white
                  border border-gray-300
                  rounded-md
                  hover:text-gray-500
                  focus:outline-none
                  focus:border-blue-300
                  focus:shadow-outline-blue
                  active:bg-gray-50 active:text-gray-800
                  dark:bg-black dark:text-gray-600
                "
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
              >
                <span>Theme</span>
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg></button
            ></span>
            <div
              class="
                opacity-0
                invisible
                dropdown-menu
                transition-all
                duration-100
                transform
                origin-top-right
                -translate-y-2
                scale-95
              "
            >
              <div
                id="headlessui-menu-items-117"
                class="
                  absolute
                  right-0
                  w-56
                  mt-2
                  origin-top-right
                  bg-white
                  border border-gray-200
                  divide-y divide-gray-100
                  rounded-md
                  shadow-lg
                  outline-none
                "
                aria-labelledby="theme-select"
                role="menu"
              >
                <div class="py-1">
                  <button
                    tabindex="0"
                    class="
                      text-gray-700
                      flex
                      justify-between
                      px-4
                      py-2
                      text-sm
                      leading-5
                      text-left
                    "
                    role="menuitem"
                    @click="changeTheme('light')"
                  >
                    Light
                  </button>
                  <button
                    tabindex="1"
                    class="
                      text-gray-700
                      flex
                      justify-between
                      px-4
                      py-2
                      text-sm
                      leading-5
                      text-left
                    "
                    role="menuitem"
                    @click="changeTheme('dark')"
                  >
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </h6>
      </div>

      <!-- Copyright -->
      <div
        class="
          md:flex md:items-center md:justify-between
          py-4
          md:py-6 md:pb-12
          border-t border-gray-200
          dark:border-gray-600
        "
      >
        <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li class="ml-4">
            <a
              href="https://github.com/sumitkolhe/detabase"
              target="_blank"
              class="
                flex
                justify-center
                items-center
                text-gray-600
                hover:text-gray-900 hover:bg-white-100
                rounded-full
                transition
                duration-150
                ease-in-out
              "
              aria-label="Github"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            </a>
          </li>
        </ul>

        <div class="text-sm text-gray-600 mr-4 dark:text-gray-400">
          Copyright © 2021 All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    changeTheme(themeType: string) {
      if (themeType === 'dark') this.$emit('clicked', true)
      else this.$emit('clicked', false)
    },
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
