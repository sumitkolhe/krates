<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
    <span></span>
    <v-footer class="justify-center" padless color="footerColor">
      <v-col align="center" cols="12">
        <h4 class="font-weight-medium">Made with ❤️</h4>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({}),
};
</script>

<style >
* {
  font-family: "Montserrat", sans-serif;
}

a,
a:active,
a:hover,
a:focus,
a.primary--text {
  text-decoration: none;
  color: #000;
}
</style>
