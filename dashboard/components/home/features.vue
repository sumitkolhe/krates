<template>
  <section class="relative">
    <div
      class="
        absolute
        inset-0
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
            mx-auto
          "
        >
          <zi-card
            hoverable
            class="flex flex-col items-center"
            v-for="(feature, index) in features"
            :key="feature.title"
          >
            <template v-if="index === 0">
              <circle-icon class="h-16 w-16" />
            </template>
            <template v-if="index === 1">
              <credit-card-icon class="h-16 w-16" />
            </template>
            <template v-if="index === 2">
              <zap-icon class="h-16 w-16" />
            </template>
            <template v-if="index === 3">
              <cloud-snow-icon class="h-16 w-16" />
            </template>
            <template v-if="index === 4">
              <server-icon class="h-16 w-16" />
            </template>
            <template v-if="index === 5">
              <database-icon class="h-16 w-16" />
            </template>

            <h4 class="text-lg font-semibold mb-1 mt-4">{{ feature.title }}</h4>
            <p class="text-accent6 text-center">
              {{ feature.description }}
            </p>
          </zi-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      features: [
        {
          title: 'Simple',
          description: 'Zero configuration required and super easy to use.',
        },
        {
          title: 'Free',
          description: 'Krates is completely free to use and always will be',
        },
        {
          title: 'Lightning Fast',
          description: 'Saving your data is just a HTTP request away.',
        },
        {
          title: 'Backend Agnostic',
          description:
            'Use krates with a backend server or directly from the browser.',
        },
        {
          title: 'Host your own instance',
          description:
            'Use Krates as a free service or host your own instance.',
        },
        {
          title: 'Backed by MongoDB',
          description: ' Supports all data formats that MongoDB supports.',
        },
      ],
    }
  },
})
</script>
