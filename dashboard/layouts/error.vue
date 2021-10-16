<template><p>Error</p></template>

<script>
export default {
  layout: 'empty',

  head() {
    const title = 404
    return {
      title,
    }
  },
}
</script>

<style scoped>
#app {
  font-family: 'Inter', sans-serif;
}

.stars {
  animation: hover 1.5s infinite ease-in-out alternate;
}

@keyframes hover {
  0% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(-4px);
  }
}
</style>
