<template>
  <zi-select v-model="theme" size="small">
    <zi-option value="Light Theme"></zi-option
    ><zi-option value="Dark Theme"></zi-option>
  </zi-select>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    theme: '',
  }),
  watch: {
    theme() {
      this.$store.commit('theme/setTheme', this.theme)
    },
  },

  mounted() {
    this.$store.commit('theme/initTheme')
    // this.theme = this.$store.getters['theme/getTheme']
    // console.log(this.theme)
  },
})
</script>
<style>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
