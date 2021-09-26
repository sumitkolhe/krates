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
          "
          aria-label="Cruip"
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
          <span class="text-2xl font-bold pl-4">Detabase </span>
        </NuxtLink>

        <h6 class="text-gray-800 font-medium mt-2">Subscribe</h6>
      </div>

      <!-- Copyright -->
      <div
        class="
          md:flex md:items-center md:justify-between
          py-4
          md:py-6 md:pb-8
          border-t border-gray-200
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

        <div class="text-sm text-gray-600 mr-4">
          Copyright © 2021 All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
