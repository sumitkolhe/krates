import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        textColor: "#fff",
        btnColor: "#fff",
      },
      dark: {
        textColor: "#000",
        btnColor: "#121212",
      },
    },
  },
});
