<template>
  <section class="relative">
    <div class="max-w-5xl mx-auto px-6">
      <div class="py-12 md:pt-20">
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-10">
          <h2 class="text-4xl font-black mb-8">Love Krates?</h2>

          <p
            class="text-lg sm:text-xl text-gray-600 mb-2 text-accent4"
            data-aos="zoom-y-out"
          >
            Krates is fully

            <span
              class="
                text-xl
                font-bold
                leading-tighter
                tracking-tighter
                mb-4
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-[#7928CA]
                to-[#FF0080]
              "
            >
              open-source
            </span>
            . If you like it, please leave a star on Github.
          </p>

          <p
            class="text-lg sm:text-xl text-gray-600 mb-8 text-accent4"
            data-aos="zoom-y-out"
          >
            If you'd like to contribute to Krates, feel free to raise a PR.
          </p>

          <div>
            <a href="https://github.com/sumitkolhe/krates" target="_blank">
              <zi-button
                type="primary"
                href="https://github.com/sumitkolhe/krates"
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
  height: 56px !important;
  font-size: 16px !important;
}
</style>
