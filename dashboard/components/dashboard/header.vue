<template>
  <header
    class="
      fixed
      w-full
      z-30
      transition
      duration-300
      ease-in-out
      bg-geist-background
      md:opacity-90
    "
  >
    <div class="max-w-5xl mx-auto md:px-2 px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <div class="flex-shrink-0">
          <NuxtLink
            to="/dashboard"
            class="
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
              py-3
              text-accent8
            "
          >
            <package-icon class="w-10 h-10" />

            <p class="pl-4 font-bold text-2xl">Detabase</p>
          </NuxtLink>
        </div>

        <zi-popover align="right">
          <zi-button size="medium" auto>Menu</zi-button>
          <template v-slot:dropdown>
            <zi-popover-item title>Dashboard</zi-popover-item>
            <zi-popover-item line></zi-popover-item>
            <zi-popover-item primary>New Base</zi-popover-item>
            <zi-popover-item line></zi-popover-item>
            <zi-popover-item primary
              ><zi-link href="https://docs.detabase.me" more
                >Docs</zi-link
              ></zi-popover-item
            >

            <zi-popover-item primary
              ><zi-link href="https:////github.com/sumitkolhe/detabase" more
                >Github</zi-link
              ></zi-popover-item
            >
            <!-- <zi-popover-item> <CommonTheme /></zi-popover-item> -->
          </template>
        </zi-popover>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
