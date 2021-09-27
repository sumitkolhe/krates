<template>
  <!-- component -->
  <div class="container mx-auto max-w-6xl w-full h-full">
    <div class="relative wrap overflow-hidden p-10 h-full">
      <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 class="text-4xl font-black mb-4 dark:text-white">
          How Detabase works
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          Detabase provides a REST API that you can use to make requests and
          store your JSON based data easily.
        </p>
      </div>
      <div
        class="
          border-2-2
          absolute
          border-opacity-20 border-gray-700
          dark:border-gray-500
          h-full
          border
        "
        style="left: 50%"
      ></div>
      <!-- right timeline -->
      <div class="mb-8 flex justify-between items-center w-full right-timeline">
        <div class="order-1 w-5/12"></div>
        <div
          class="
            z-20
            flex
            items-center
            order-1
            bg-black
            shadow-xl
            w-8
            h-8
            rounded-full
            dark:bg-white
          "
        >
          <h1 class="mx-auto font-semibold text-lg text-white dark:text-black">
            1
          </h1>
        </div>
        <div
          class="
            order-1
            bg-black
            rounded-lg
            shadow-xl
            w-5/12
            px-6
            py-4
            dark:bg-white
          "
        >
          <h3 class="mb-3 font-bold text-white text-xl dark:text-black">
            Get your unique bucket ID
          </h3>
          <p
            class="
              text-sm
              leading-snug
              tracking-wide
              text-white text-opacity-100
              dark:text-black
            "
          >
            Visit Detabase Dashboard and get your unique bucket ID. This bucket
            ID will acts as your personal namespace for storing data.
          </p>
        </div>
      </div>

      <!-- left timeline -->
      <div
        class="
          mb-8
          flex
          justify-between
          flex-row-reverse
          items-center
          w-full
          left-timeline
        "
      >
        <div class="order-1 w-5/12"></div>
        <div
          class="
            z-20
            flex
            items-center
            order-1
            bg-black
            shadow-xl
            w-8
            h-8
            rounded-full
            dark:bg-white
          "
        >
          <h1 class="mx-auto text-white font-semibold text-lg dark:text-black">
            2
          </h1>
        </div>
        <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 class="mb-3 font-bold text-black text-xl">Make Requests</h3>
          <p
            class="
              text-sm
              font-medium
              leading-snug
              tracking-wide
              text-black text-opacity-100
            "
          >
            Make standard HTTP requests suchs as POST, PUT and PATCH to store
            your data in the root of your namespace or a seperate collection if
            you wish.
          </p>
        </div>
      </div>

      <!-- right timeline -->
      <div class="mb-8 flex justify-between items-center w-full right-timeline">
        <div class="order-1 w-5/12"></div>
        <div
          class="
            z-20
            flex
            items-center
            order-1
            bg-black
            shadow-xl
            w-8
            h-8
            rounded-full
            dark:bg-white
          "
        >
          <h1 class="mx-auto font-semibold text-lg text-white dark:text-black">
            3
          </h1>
        </div>
        <div
          class="
            order-1
            bg-black
            rounded-lg
            shadow-xl
            w-5/12
            px-6
            py-4
            dark:bg-white
          "
        >
          <h3 class="mb-3 font-bold text-white dark:text-black text-xl">
            Query your data
          </h3>
          <p
            class="
              text-sm
              leading-snug
              tracking-wide
              text-white text-opacity-100
              dark:text-black
            "
          >
            Query your data using GET request from the root of your namespace or
            a seperate collection. Add sort, filter, limit to your queries to
            get sanitized data back.
          </p>
        </div>
      </div>

      <!-- left timeline -->
      <div
        class="
          mb-14
          flex
          justify-between
          flex-row-reverse
          items-center
          w-full
          left-timeline
        "
      >
        <div class="order-1 w-5/12"></div>
        <div
          class="
            z-20
            flex
            items-center
            order-1
            bg-black
            shadow-xl
            w-8
            h-8
            rounded-full
            dark:bg-white
          "
        >
          <h1 class="mx-auto text-white font-semibold text-lg dark:text-black">
            4
          </h1>
        </div>
        <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 class="mb-3 font-bold text-black text-xl">Modify your Data</h3>
          <p
            class="
              text-sm
              font-medium
              leading-snug
              tracking-wide
              text-black text-opacity-100
            "
          >
            Modify or delete your records using PUT, PATCH or DELETE requests on
            a namespace, a collection or even an individual record.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
