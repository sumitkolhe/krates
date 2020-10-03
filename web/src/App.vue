<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
    <v-footer app padless color="footerColor">
      <v-col align="center" cols="12">
        <h4 class="font-weight-medium">
          Made with ❤️ by
          <a class="text-decoration" href="https://sumit.codes" target="_blank"
            >Sumit</a
          >
        </h4>
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

  data: () => ({
    //
  }),
};
</script>

<style >
* {
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden;
}

a,
a:active,
a:hover,
a:focus {
  text-decoration: none;
  color: #000;
}
</style>
