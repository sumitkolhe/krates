<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="text-center pb-12 md:pb-16 mt-6">
          <h1
            class="
              text-5xl
              md:text-8xl
              font-extrabold
              leading-tighter
              tracking-tighter
              mb-4
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
              mb-4
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
            "
          >
            for your projects
          </h1>
          <div class="max-w-3xl mx-auto my-14">
            <p
              class="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Detabase provides a HTTP based JSON database service for free to
              help you get started with your projects easily!
            </p>
            <div
              class="
                max-w-xs
                mx-auto
                sm:max-w-none sm:flex sm:justify-center
                pt-12
              "
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <NuxtLink
                  class="
                    btn
                    text-white
                    bg-black
                    hover:bg-white hover:text-black hover:border-black
                    w-full
                    mb-4
                    sm:w-auto sm:mb-0
                    font-medium
                    inline-flex
                    cursor-pointer
                    items-center
                    justify-center
                    border border-transparent
                    rounded
                    leading-snug
                    transition
                    duration-150
                    ease-in-out
                    p-4
                    px-12
                  "
                  to="/dashboard"
                  >Get started</NuxtLink
                >
              </div>
              <div>
                <a
                  class="
                    btn
                    text-black
                    bg-white
                    border-gray-200
                    hover:border-black
                    w-full
                    sm:w-auto sm:ml-4
                    font-medium
                    inline-flex
                    cursor-pointer
                    items-center
                    justify-center
                    border border-transparent
                    rounded
                    leading-snug
                    transition
                    duration-150
                    ease-in-out
                    p-4
                    px-12
                  "
                  href="#0"
                  >Read the docs</a
                >
              </div>
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
