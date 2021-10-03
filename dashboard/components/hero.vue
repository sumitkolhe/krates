<template>
  <section class="relative">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="text-center md:mt-6">
          <h1
            class="
              text-5xl
              md:text-8xl
              font-extrabold
              leading-tighter
              tracking-tighter
              mb-4
              dark:text-white
            "
            data-aos="zoom-y-out"
          >
            The JSON
          </h1>
          <h1
            class="
              text-5xl
              md:text-8xl
              font-extrabold
              leading-tighter
              tracking-tighter
              mb-2
              md:mb-4
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-green-400
              to-blue-500
            "
          >
            “ Database ”
          </h1>
          <h1
            class="
              text-5xl
              md:text-8xl
              font-extrabold
              leading-tighter
              tracking-tighter
              mb-4
              dark:text-white
              leading-tight
            "
          >
            for your projects
          </h1>
          <div class="max-w-3xl mx-auto my-14">
            <p class="text-xl text-gray-500 mb-8">
              Detabase provides a HTTP based JSON database service for free to
              help you get started with your projects easily!
            </p>

            <div class="mt-20 flex flex-wrap justify-center">
              <NuxtLink to="/dashboard" class="p-2 xs:w-full">
                <zi-button type="primary" size="huge"
                  >Get Started</zi-button
                ></NuxtLink
              >
              <NuxtLink to="/dashboard" class="p-2">
                <zi-button type="normal" size="huge"
                  >Read the docs</zi-button
                ></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.zi-btn {
  height: 60px;
  font-size: 16px;
}
</style>
