<template>
  <div class="container mx-auto max-w-6xl w-full h-full">
    <div class="relative wrap overflow-hidden px-8 py-10 h-full">
      <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 class="text-4xl mb-4">How Detabase works?</h2>
        <p class="text-xl text-accent4">
          Detabase provides a REST API that you can use to make requests and
          store your JSON based data easily.
        </p>
      </div>

      <!-- Vertical line -->
      <div
        class="border-2-2 absolute border-opacity-80 h-full border"
        style="left: 50%"
      ></div>
      <!-- right timeline 1 -->
      <div class="mb-8 flex justify-between items-center w-full">
        <div class="order-1 md:w-5/12 hidden md:inline-flex"></div>
        <div
          class="
            z-20
            items-center
            order-1
            shadow-xl
            w-8
            h-8
            rounded-full
            hidden
            md:inline-flex
          "
        >
          <h1 class="mx-auto font-semibold text-lg">1</h1>
        </div>
        <div
          class="
            order-1
            rounded-lg
            md:w-5/12
            px-6
            py-4
            z-20
            bg-geist-background
            text-accent9
            border border-accent2
          "
        >
          <h3 class="mb-3 font-bold text-xl">Get your unique base ID</h3>
          <p class="text-sm leading-snug tracking-wide text-opacity-100">
            Visit Detabase Dashboard and get your unique base ID. This base ID
            will acts as your personal namespace for storing data.
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
        <div class="order-1 md:w-5/12 hidden md:inline-flex"></div>
        <div
          class="
            z-20
            items-center
            order-1
            shadow-xl
            w-8
            h-8
            rounded-full
            hidden
            md:inline-flex
          "
        >
          <h1 class="mx-auto font-semibold text-lg">2</h1>
        </div>
        <div
          class="
            order-1
            bg-geist-foreground
            text-accent9
            border border-accent2
            text-accent1
            rounded-lg
            md:w-5/12
            px-6
            py-4
            z-20
          "
        >
          <h3 class="mb-3 font-bold text-xl">Make Requests</h3>
          <p
            class="
              text-sm
              font-medium
              leading-snug
              tracking-wide
              text-opacity-100
            "
          >
            Make standard HTTP requests suchs as POST, PUT and PATCH to store
            your data in the root of your namespace or a seperate collection if
            you wish.
          </p>
        </div>
      </div>

      <!-- right timeline -->
      <div class="mb-8 flex justify-between items-center w-full">
        <div class="order-1 md:w-5/12 hidden md:inline-flex"></div>
        <div
          class="
            z-20
            items-center
            order-1
            shadow-xl
            w-8
            h-8
            rounded-full
            hidden
            md:inline-flex
          "
        >
          <h1 class="mx-auto font-semibold text-lg">3</h1>
        </div>
        <div
          class="
            order-1
            bg-geist-background
            border border-accent2
            text-accent9
            rounded-lg
            md:w-5/12
            px-6
            py-4
            z-20
          "
        >
          <h3 class="mb-3 font-bold text-xl">Query your data</h3>
          <p class="text-sm leading-snug tracking-wide">
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
        <div class="order-1 w-5/12 hidden md:inline-flex"></div>
        <div
          class="
            z-20
            items-center
            order-1
            shadow-xl
            w-8
            h-8
            rounded-full
            hidden
            md:inline-flex
          "
        >
          <h1 class="mx-auto font-semibold text-lg">4</h1>
        </div>
        <div
          class="
            order-1
            bg-geist-foreground
            border border-accent2
            text-accent1
            rounded-lg
            md:w-5/12
            px-6
            py-4
            z-20
          "
        >
          <h3 class="mb-3 font-bold text-xl">Modify your Data</h3>
          <p class="text-sm font-medium leading-snug tracking-wide">
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
