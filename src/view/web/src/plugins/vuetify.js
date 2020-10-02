import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        textColor: "#fff",
        btnColor: "#e3e3e3",
      },
      dark: {
        textColor: "#000",
        btnColor: "#121212",
      },
    },
  },
});
