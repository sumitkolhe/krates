<template>
  <div class="container mx-auto max-w-5xl w-full h-full">
    <div class="relative wrap overflow-hidden px-6 py-10 h-full">
      <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 class="text-4xl mb-4 font-bold">How Krates works?</h2>
        <p class="text-lg sm:text-xl text-accent4">
          Krates provides a REST API that you can use to make requests and store
          your JSON based data easily.
        </p>
      </div>

      <!-- Vertical line -->
      <div class="absolute z-0 h-full border" style="left: 50%"></div>

      <div class="grid md:grid-cols-2 gap-4 md:gap-12 z-20 relative">
        <!-- left timeline 1 -->
        <zi-card>
          <h3 class="mb-3 font-bold text-xl">Get your unique krate ID</h3>
          <p class="text-sm leading-snug tracking-wide">
            Visit Krates Dashboard and get your unique krate ID. This krate ID
            will acts as your personal namespace for storing data.
          </p>
        </zi-card>
        <div class="md:visible invisible"></div>

        <!-- right timeline -->
        <div class="md:visible invisible"></div>
        <zi-card>
          <h3 class="mb-3 font-bold text-xl">Make Requests</h3>
          <p class="text-sm leading-snug tracking-wide">
            Make standard HTTP requests suchs as POST, PUT and PATCH to store
            your data in the root of your namespace or a seperate collection if
            you wish.
          </p>
        </zi-card>

        <!-- left timeline -->
        <zi-card>
          <h3 class="mb-3 font-bold text-xl">Query your data</h3>
          <p class="text-sm leading-snug tracking-wide">
            Query your data using GET request from the root of your namespace or
            a seperate collection. Add sort, filter, limit to your queries to
            get sanitized data back.
          </p>
        </zi-card>
        <div class="md:visible invisible"></div>

        <!-- right timeline -->

        <div class="md:hidden"></div>
        <zi-card>
          <h3 class="mb-3 font-bold text-xl">Modify your Data</h3>
          <p class="text-sm font-medium leading-snug tracking-wide">
            Modify or delete your records using PUT, PATCH or DELETE requests on
            a namespace, a collection or even an individual record.
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
