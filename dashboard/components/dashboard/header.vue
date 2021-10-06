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
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <div class="flex-shrink-0">
          <NuxtLink
            to="/"
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
            "
          >
            <box-icon class="w-10 h-10" />

            <p class="pl-4 font-bold text-2xl text-accent8">Detabase</p>
          </NuxtLink>
        </div>

        <zi-popover align="right">
          <zi-button size="medium" auto>Menu</zi-button>
          <template v-slot:dropdown>
            <zi-popover-item title>Dashboard</zi-popover-item>
            <zi-popover-item line></zi-popover-item>
            <zi-popover-item primary>New Base</zi-popover-item>
            <zi-popover-item primary>Docs</zi-popover-item>
            <zi-popover-item line></zi-popover-item>
            <zi-popover-item> <CommonTheme /></zi-popover-item>
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
