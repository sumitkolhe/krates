<template>
  <section class="relative">
    <div
      class="
        absolute
        inset-0
        md:mt-24
        lg:mt-0
        bg-gray-50
        dark:bg-gray-900 dark:border-gray-600
        border-t border-b
        pointer-events-none
      "
      aria-hidden="true"
    ></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <h2 class="text-4xl font-black mb-2 dark:text-white text-center pt-20">
        Detabase is...
      </h2>
      <div class="py-12 md:pb-24">
        <div
          class="
            max-w-sm
            mx-auto
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
            items-start
            md:max-w-2xl
            lg:max-w-none
          "
        >
          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              bg-white
              rounded-lg
              dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800
              border-gray-200 border-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-14 h-14 p-1 -mt-1 mb-4"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <h4 class="text-lg font-bold mb-1 dark:text-white">Simple</h4>
            <p class="text-gray-600 text-center dark:text-gray-400">
              Zero configuration required and super easy to use.
            </p>
          </div>

          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              bg-white
              rounded-lg
              dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800
              border-gray-200 border-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="w-14 h-14 p-1 -mt-1 mb-4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M7 15h0M2 9.5h20" />
            </svg>
            <h4 class="text-lg font-bold mb-1 dark:text-white">Free</h4>
            <p class="text-gray-600 text-center dark:text-gray-400">
              Detabase is completely free to use and always will be.
            </p>
          </div>

          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              bg-white
              rounded-lg
              dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800
              border-gray-200 border-2
            "
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
              class="w-14 h-14 p-1 -mt-1 mb-4"
            >
              <polygon
                points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
              ></polygon>
            </svg>
            <h4 class="text-lg font-bold mb-1 dark:text-white">
              Lightning Fast
            </h4>
            <p class="text-gray-600 text-center dark:text-gray-400">
              Saving your data is just a HTTP call away.
            </p>
          </div>

          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              bg-white
              rounded-lg
              dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800
              border-gray-200 border-2
            "
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="w-14 h-14 p-1 -mt-1 mb-4"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              shape-rendering="geometricPrecision"
            >
              <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"></path>
              <path d="M8 16h.01"></path>
              <path d="M8 20h.01"></path>
              <path d="M12 18h.01"></path>
              <path d="M12 22h.01"></path>
              <path d="M16 16h.01"></path>
              <path d="M16 20h.01"></path>
            </svg>
            <h4 class="text-lg font-bold mb-1 dark:text-white">
              Backend Agnostic
            </h4>
            <p class="text-gray-600 text-center dark:text-gray-400">
              Use detabase with a backend server or even directly from the
              browser.
            </p>
          </div>

          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              bg-white
              rounded-lg
              dark:bg-gray-900 dark:text-gray-200
              border-gray-200 border-2
              dark:border-gray-800
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="w-14 h-14 p-1 -mt-1 mb-4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
            <h4 class="text-lg font-bold mb-1 dark:text-white">
              Host your own instance
            </h4>
            <p class="text-gray-600 text-center dark:text-gray-400">
              Use Detabase as a free service or host your own private instance.
            </p>
          </div>

          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              bg-white
              rounded-lg
              dark:text-gray-200 dark:bg-gray-900
              border-gray-200 border-2
              dark:border-gray-800
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              class="w-14 h-14 p-1 -mt-1 mb-4"
              stroke-linejoin="round"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
            <h4 class="text-lg font-bold mb-1 dark:text-white">
              Backed by MongoDB
            </h4>
            <p class="text-gray-600 text-center dark:text-gray-400">
              Unlimited possibilites in terms of structure of the data you can
              store.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
