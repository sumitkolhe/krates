<template>
  <zi-button auto @click="changeTheme" action> {{ themeType }}</zi-button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    changeTheme() {
      this.$store.commit('theme/setTheme')
    },
  },

  computed: {
    themeType() {
      let isDark = this.$store.getters['theme/getTheme']

      if (isDark) return 'Dark Theme'
      return 'Light Theme'
    },
  },

  mounted() {
    this.$store.commit('theme/initTheme')
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
