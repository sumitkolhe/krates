<template>
  <nav class="relative mx-auto max-w-5xl">
    <button
      type="button"
      v-for="tab in tabs"
      :ref="tab.value"
      :key="tab.title"
      :class="[
        tab.value === currentTab ? '' : '',
        'hover:bg-accent2 hover:rounded-md mx-2 my-2 p-2 text-sm',
      ]"
      :disabled="tab.disabled || false"
      @click="handleClick(tab.value)"
      v-html="tab.title"
    />

    <div
      class="border-b-2 border-geist-foreground"
      :style="{
        width: `${activeLineWidth}px`,
        transform: `translateX(${activeLineOffset}px)`,
        'transition-duration': '200ms',
      }"
    />
  </nav>
</template>

<script>
export default {
  props: {
    currentTab: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
    updated: {
      type: [Boolean, String, Array],
      default: undefined,
    },
  },

  watch: {
    currentTab(newCurrentTab) {
      if (this.newTab === newCurrentTab) return
      this.moveActiveLine(newCurrentTab)
      this.newTab = newCurrentTab
    },
    updated() {
      this.moveActiveLine(this.currentTab)
    },
  },

  data: () => ({
    activeLineWidth: 0,
    activeLineOffset: 0,
    newTab: '',
  }),

  methods: {
    handleClick(value) {
      this.$emit('onClick', value)
      this.moveActiveLine(value)

      this.newTab = value
    },
    moveActiveLine(newValue) {
      if (!this.currentTab) return

      if (!this.$refs || !this.$refs[newValue] || !this.$refs[newValue][0])
        return
      const element = this.$refs[newValue][0]

      this.activeLineWidth = element.clientWidth
      this.activeLineOffset = element.offsetLeft
    },
  },

  mounted() {
    this.moveActiveLine(this.currentTab)
    this.newTab = this.currentTab
  },
}
</script>
