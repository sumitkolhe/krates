<template>
  <div class="max-w-6xl mx-auto px-5 sm:px-6">
    <form>
      <div class="flex flex-wrap mb-4">
        <div class="grid grid-flow-col auto-cols-max">
          <label class="block text-sm sr-only" htmlFor="httpRequest"
            >Base id</label
          >
          <div class="relative flex items-center max-w-md mr-8">
            <input
              id="http"
              type="text"
              class="
                cursor-not-allowed
                opacity-50
                w-full
                text-gray-800
                px-3
                py-4
                pr-12
                text-md
                bg-white
                rounded-lg
                border border-gray-300
              "
              :placeholder="base"
              required
            />
          </div>
          <div class="relative flex items-center max-w-md mr-8">
            <input
              id="http"
              type="text"
              class="
                cursor-not-allowed
                opacity-50
                w-full
                text-gray-800
                px-3
                py-4
                pr-12
                text-md
                bg-white
                rounded-lg
                border border-gray-300
              "
              :placeholder="base"
              required
            />
          </div>
          <div class="relative flex items-center max-w-md">
            <input
              id="http"
              type="text"
              class="
                cursor-not-allowed
                opacity-50
                w-full
                text-gray-800
                px-3
                py-4
                pr-12
                text-md
                bg-white
                rounded-lg
                border border-gray-300
              "
              :placeholder="base"
              required
            />
          </div>
          <!-- <button
              type="submit"
              class="absolute inset-0 left-auto"
              aria-label="Subscribe"
            >
              <span
                class="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                aria-hidden="true"
              ></span>
              <svg
                class="w-3 h-3 fill-current text-grey-600 mx-3 flex-shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                  fillRule="nonzero"
                />
              </svg>
            </button> -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    base: String,
  },
})
</script>
