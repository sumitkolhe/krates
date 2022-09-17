<template>
  <div class="container mx-auto max-w-5xl w-full h-full">
    <div class="relative wrap overflow-hidden px-6 py-10 h-full">
      <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 class="text-4xl mb-4 font-bold">How does Krates work?</h2>
        <p class="text-lg sm:text-xl text-accent4">
          Krates provides a REST API that you can use to make requests and store
          your JSON-based data easily.
        </p>
      </div>

      <!-- Vertical line -->
      <div
        class="absolute z-0 h-full border border-accent2"
        style="left: 50%"
      ></div>

      <div class="grid md:grid-cols-2 gap-2 md:gap-10 z-20 relative">
        <!-- left timeline 1 -->
        <zi-card hoverable>
          <h3 class="mb-3 font-bold text-xl">Create a new Krate</h3>
          <p class="text-sm leading-snug tracking-wide">
            Visit the dashboard and create a new krate. Each krate gets a
            unique ID.
          </p>
        </zi-card>
        <div class="md:block"></div>

        <!-- right timeline -->
        <div class="md:block"></div>
        <zi-card hoverable>
          <h3 class="mb-3 font-bold text-xl">Store your data</h3>
          <p class="text-sm leading-snug tracking-wide">
            Make HTTP network requests (such as POST) to store data in a krate
            or a separate collection.
          </p>
        </zi-card>
        <div class="md:hidden"></div>
        <!-- left timeline -->
        <div class="md:hidden"></div>
        <zi-card hoverable>
          <h3 class="mb-3 font-bold text-xl">Modify your data</h3>
          <p class="text-sm leading-snug tracking-wide">
            Modify or delete data using PUT or DELETE requests on a krate, a
            collection, or even an individual record.
          </p>
        </zi-card>
        <div class="md:block"></div>

        <!-- right timeline -->

        <div class="md:block"></div>
        <zi-card hoverable>
          <h3 class="mb-3 font-bold text-xl">Retreive your Data</h3>
          <p class="text-sm font-medium leading-snug tracking-wide">
            Query your data with GET request on a krate or a collection. Add
            sort, filter, and limit to enhance your query.
          </p>
        </zi-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
