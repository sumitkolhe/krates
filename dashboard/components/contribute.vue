<template>
  <section class="relative">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:pt-20">
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-10">
          <h2 class="text-4xl font-black mb-8">Love Detabase?</h2>

          <p
            class="text-xl text-gray-600 mb-2 text-accent4"
            data-aos="zoom-y-out"
          >
            Detabase is fully

            <span
              class="
                text-xl
                md:text-xl
                font-bold
                leading-tighter
                tracking-tighter
                mb-4
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-purple-800
                to-red-400
              "
            >
              open-source
            </span>

            , if you like it please leave a star on github.
          </p>

          <p
            class="text-xl text-gray-600 mb-8 text-accent4"
            data-aos="zoom-y-out"
          >
            If you'd like to contribute to Detabase feel free to raise a PR.
          </p>

          <div>
            <a href="https://github.com/sumitkolhe/detabase" target="_blank">
              <zi-button
                size="huge"
                type="primary"
                href="https://github.com/sumitkolhe/detabase"
                >Contribute</zi-button
              ></a
            >
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

<style scoped>
.zi-btn {
  height: 60px;
  font-size: 16px;
}
</style>
