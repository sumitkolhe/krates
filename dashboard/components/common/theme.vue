<template>
  <zi-button size="medium" auto @click="changeTheme" action>
    {{ themeType }}</zi-button
  >
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
