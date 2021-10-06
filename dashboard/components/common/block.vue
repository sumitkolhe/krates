<template>
  <div class="max-w-5xl mx-auto">
    <div
      class="flex flex-col md:flex-row justify-between items-center gap-4 py-8"
    >
      <nav
        class="
          flex flex-wrap
          justify-center
          md:justify-start
          gap-x-4 gap-y-2
          md:gap-6
        "
      >
        <h1 class="text-3xl font-medium">{{ title }}</h1>
      </nav>

      <div class="flex gap-4">
        <zi-button type="primary" @click="createNewBase">Create Base</zi-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '@nuxtjs/axios'
export default Vue.extend({
  props: {
    title: String,
  },
  data() {
    return {
      newBaseId: '',
    }
  },
  methods: {
    createNewBase() {
      this.$store.dispatch('bases/createNewBase')
    },
  },
})
</script>

<style scoped>
.zi-input {
  width: 100vw !important;
}
</style>
