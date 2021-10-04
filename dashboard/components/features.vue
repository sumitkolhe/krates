<template>
  <section class="relative">
    <div
      class="
        absolute
        inset-0
        md:mt-24
        lg:mt-0
        bg-accent1
        border-accent2 border-t border-b
        pointer-events-none
      "
      aria-hidden="true"
    ></div>

    <div class="relative max-w-5xl mx-auto px-6">
      <h2 class="text-4xl font-black mb-2 text-center pt-20">Detabase is...</h2>
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
              rounded-lg
              border-accent2 border-2
            "
          >
            <circle-icon class="h-16 w-16 mb-2" />
            <h4 class="text-lg font-bold mb-1">Simple</h4>
            <p class="text-accent6 text-center">
              Zero configuration required and super easy to use.
            </p>
          </div>

          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              rounded-lg
              border-accent2 border-2
            "
          >
            <credit-card-icon class="h-16 w-16 mb-2" />

            <h4 class="text-lg font-bold mb-1">Free</h4>
            <p class="text-accent6 text-center">
              Detabase is completely free to use and always will be.
            </p>
          </div>

          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              rounded-lg
              border-accent2 border-2
            "
          >
            <zap-icon class="h-16 w-16 mb-2" />

            <h4 class="text-lg font-bold mb-1">Lightning Fast</h4>
            <p class="text-accent6 text-center">
              Saving your data is just a HTTP request away.
            </p>
          </div>

          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              rounded-lg
              border-accent2 border-2
            "
          >
            <cloud-snow-icon class="h-16 w-16 mb-2" />
            <h4 class="text-lg font-bold mb-1">Backend Agnostic</h4>
            <p class="text-accent6 text-center">
              Use detabase with a backend server or directly from the browser.
            </p>
          </div>

          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              rounded-lg
              border-accent2 border-2
            "
          >
            <server-icon class="h-16 w-16 mb-2" />

            <h4 class="text-lg font-bold mb-1">Host your own instance</h4>
            <p class="text-accent6 text-center">
              Use Detabase as a free service or host your own instance.
            </p>
          </div>

          <div
            class="
              relative
              flex flex-col
              items-center
              p-6
              rounded-lg
              border-accent2 border-2
            "
          >
            <database-icon class="h-16 w-16 mb-2" />

            <h4 class="text-lg font-bold mb-1">Backed by MongoDB</h4>
            <p class="text-accent6 text-center">
              Supports all data formats that MongoDB supports.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
