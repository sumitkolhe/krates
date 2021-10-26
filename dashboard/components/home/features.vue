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
      <h2 class="text-4xl font-black mb-2 text-center pt-20">Krates is</h2>
      <div class="py-12 md:pb-24">
        <div
          class="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
            items-start
            md:max-w-2xl
            lg:max-w-none
          "
        >
          <zi-card hoverable class="flex flex-col items-center">
            <circle-icon class="h-16 w-16 mb-2" />
            <h4 class="text-lg font-bold mb-1">Simple</h4>
            <p class="text-accent6 text-center">
              Zero configuration required and super easy to use.
            </p>
          </zi-card>

          <zi-card hoverable class="flex flex-col items-center">
            <credit-card-icon class="h-16 w-16 mb-2" />
            <h4 class="text-lg font-bold mb-1">Free</h4>
            <p class="text-accent6 text-center">
              Krates is completely free to use and always will be.
            </p>
          </zi-card>

          <zi-card hoverable class="flex flex-col items-center">
            <zap-icon class="h-16 w-16 mb-2" />
            <h4 class="text-lg font-bold mb-1">Lightning Fast</h4>
            <p class="text-accent6 text-center">
              Saving your data is just a HTTP request away.
            </p>
          </zi-card>

          <zi-card hoverable class="flex flex-col items-center">
            <cloud-snow-icon class="h-16 w-16 mb-2" />
            <h4 class="text-lg font-bold mb-1">Backend Agnostic</h4>
            <p class="text-accent6 text-center">
              Use krates with a backend server or directly from the browser.
            </p>
          </zi-card>

          <zi-card hoverable class="flex flex-col items-center">
            <server-icon class="h-16 w-16 mb-2" />
            <h4 class="text-lg font-bold mb-1">Host your own instance</h4>
            <p class="text-accent6 text-center">
              Use Krates as a free service or host your own instance.
            </p>
          </zi-card>

          <zi-card hoverable class="flex flex-col items-center">
            <database-icon class="h-16 w-16 mb-2" />
            <h4 class="text-lg font-bold mb-1">Backed by MongoDB</h4>
            <p class="text-accent6 text-center">
              Supports all data formats that MongoDB supports.
            </p>
          </zi-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
