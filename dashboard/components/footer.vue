<template>
  <div
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
    <footer class="max-w-6xl px-4 md:px-8 mx-auto">
      <div
        class="
          flex flex-col
          md:flex-row
          justify-between
          items-center
          border-b
          dark:border-gray-600
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
            <span class="text-2xl font-bold pl-4 dark:text-white"
              >Detabase
            </span>
          </NuxtLink>
        </nav>

        <div class="flex gap-4">
          <select
            id="theme"
            name="theme"
            class="
              rounded
              text-sm
              border
              dark:border
              border-gray-300
              dark:border-gray-600
              outline-none
              dark:outline-none dark:bg-black dark:text-white
              focus:ring-black focus:outline-none focus:ring-0
            "
          >
            <option selected @click="changeTheme('light')">Light Theme</option>
            <option @click="changeTheme('dark')">Dark Theme</option>
          </select>
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
          <div class="text-gray-600 text-sm text-center py-2">
            © 2021 Detabase. All rights reserved.
          </div>
        </nav>

        <div class="flex gap-4">
          <a
            href="https://github.com/sumitkolhe/detabase"
            target="_blank"
            class="
              text-gray-400
              hover:text-gray-500
              active:text-gray-600
              transition
              duration-100
            "
          >
            <svg
              class="w-6 h-6"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import GeistUI from '@geist-ui/vue'
export default Vue.extend({
  methods: {
    changeTheme() {
      // if (themeType === 'dark') this.$emit('clicked', true)
      // else this.$emit('clicked', false)
      // GeistUI.theme.enableLight()
      GeistUI.theme.enableDark()
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
