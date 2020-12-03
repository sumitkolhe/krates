<template>
  <v-container>
    <v-row align="center" justify="center">
      <svg @click="changeTheme()" width="84" height="84" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20.49,7.52a.19.19,0,0,1,0-.08.17.17,0,0,1,0-.07l0-.09-.06-.15,0,0h0l0,0,0,0a.48.48,0,0,0-.09-.11l-.09-.08h0l-.05,0,0,0L16.26,4.45h0l-3.72-2.3A.85.85,0,0,0,12.25,2h-.08a.82.82,0,0,0-.27,0h-.1a1.13,1.13,0,0,0-.33.13L4,6.78l-.09.07-.09.08L3.72,7l-.05.06,0,0-.06.15,0,.09v.06a.69.69,0,0,0,0,.2v8.73a1,1,0,0,0,.47.85l7.5,4.64h0l0,0,.15.06.08,0a.86.86,0,0,0,.52,0l.08,0,.15-.06,0,0h0L20,17.21a1,1,0,0,0,.47-.85V7.63S20.49,7.56,20.49,7.52ZM12,4.17l1.78,1.1L8.19,8.73,6.4,7.63Zm-1,15L5.5,15.81V9.42l5.5,3.4Zm1-8.11L10.09,9.91l5.59-3.47L17.6,7.63Zm6.5,4.72L13,19.2V12.82l5.5-3.4Z"
        ></path>
      </svg>
    </v-row>
    <v-row align="center" justify="center">
      <h1>Box</h1>
    </v-row>
    <v-row justify="center" class="tagline-text mt-2" color="#f55555">
      <i> A free HTTP based JSON storage</i>
    </v-row>
    <v-row justify="center" class="mt-6">
      <v-col
        align="center"
        class="px-10"
        cols="12"
        sm="10"
        md="8"
        lg="6"
        xl="5"
      >
        <div>
          <h3 class="body-text">
            <b>Box</b> is a free to use service that offers a secured JSON based
            cloud datastore for small projects. Box allows easy data storage
            just by sending HTTP requests to your Box endpoints. You can store,
            read , modify & delete your JSON data with just an HTTP API request.
          </h3>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" v-clipboard:copy="generatedBoxId">
      <v-col align="center" cols="12" sm="10" md="8" lg="6" xl="5">
        <v-sheet
          height="65"
          class="mt-6 mx-8 animate"
          justify="middle"
          rounded="lg"
          color="#f55555"
        >
          <div class="py-5">
            <span class="font-weight-medium col-2 text-truncate">
              {{ generatedBoxId }}
            </span>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-12">
      <v-btn
        depressed
        height="50"
        color="btnColor"
        class="font-weight-medium"
        href="https://docs.box.wtf"
        target="_blank"
      >
        <v-icon>mdi-book</v-icon>
        <h4 class="px-2">Read the docs</h4>
      </v-btn>
    </v-row>
    <v-row justify="center" class="mt-6">
      <v-btn
        depressed
        height="50"
        color="btnColor"
        class="font-weight-medium"
        href="https://github.com/sumitkolhe/box"
        target="_blank"
      >
        <v-icon>mdi-github</v-icon>
        <h4 class="px-2">Contribute</h4>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    generatedBoxId: "",
    isthemedark: false,
  }),

  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.isthemedark = !this.isthemedark;
      localStorage.setItem(
        "isThemeDark",
        JSON.stringify(this.$vuetify.theme.dark)
      );
    },
  },

  mounted() {
    var d = new Date().getTime();
    var boxId = "xxyxxxxxxyxxxxxyxxxx".replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });

    this.generatedBoxId = "https://box.wtf/box_" + boxId;

    this.$vuetify.theme.dark =
      JSON.parse(localStorage.getItem("isThemeDark")) || false;
    this.isthemedark = this.$vuetify.theme.dark;
  },
};
</script>

<style>
.tagline-text {
  font-weight: 500;
  font-size: 20px;
}

.body-text {
  font-weight: 500;
}

.box-padding {
  margin-top: 1rem;
}

.copy {
  font-size: 30px;
  font-weight: 400;
  font-family: "Kalam", cursive;
}

.animate {
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-shadow: 0 0 0 0 rgba(39, 39, 39, 0.8);
}

.animate:hover {
  animation: pulse 0.8s infinite cubic-bezier(0.66, 0, 0, 1);
}

@keyframes pulse {
  to {
    box-shadow: 0 0 0 12px rgba(230, 237, 255, 0.2);
  }
}

@media only screen and (max-width: 600px) {
  .box-padding {
    margin-top: -2.5rem;
  }
}
</style>

