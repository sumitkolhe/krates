<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col cols="12" sm="10" md="8" lg="6" xl="5">
        <v-row>
          <v-col align="center" cols="12">
            <svg
              @click="changeTheme()"
              width="84"
              height="84"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20.49,7.52a.19.19,0,0,1,0-.08.17.17,0,0,1,0-.07l0-.09-.06-.15,0,0h0l0,0,0,0a.48.48,0,0,0-.09-.11l-.09-.08h0l-.05,0,0,0L16.26,4.45h0l-3.72-2.3A.85.85,0,0,0,12.25,2h-.08a.82.82,0,0,0-.27,0h-.1a1.13,1.13,0,0,0-.33.13L4,6.78l-.09.07-.09.08L3.72,7l-.05.06,0,0-.06.15,0,.09v.06a.69.69,0,0,0,0,.2v8.73a1,1,0,0,0,.47.85l7.5,4.64h0l0,0,.15.06.08,0a.86.86,0,0,0,.52,0l.08,0,.15-.06,0,0h0L20,17.21a1,1,0,0,0,.47-.85V7.63S20.49,7.56,20.49,7.52ZM12,4.17l1.78,1.1L8.19,8.73,6.4,7.63Zm-1,15L5.5,15.81V9.42l5.5,3.4Zm1-8.11L10.09,9.91l5.59-3.47L17.6,7.63Zm6.5,4.72L13,19.2V12.82l5.5-3.4Z"
              ></path>
            </svg>

            <header class="mt-0">
              <h1>Box</h1>
              <h3 class="version-text">v1</h3>
            </header>

            <h3 class="mt-2 tagline-text" color="#f55555">
              <i> A free HTTP based JSON storage</i>
            </h3>
          </v-col>
        </v-row>

        <v-row class="mt-2">
          <v-col align="left" class="px-10">
            <div>
              <h3 class="body-text">
                <b>Box</b> is a free to use service that offers a secured JSON
                based cloud datastore for small projects. Box allows easy data
                storage just by sending HTTP requests to your Box endpoints. You
                can store, read , modify & delete your JSON data with just an
                HTTP API request.
              </h3>
            </div>
          </v-col>
        </v-row>

        <div v-clipboard:copy="generatedBoxId">
          <v-row>
            <v-col align="center" cols="12">
              <div class="boxField">
                {{ generatedBoxId }}
              </div>
            </v-col>
          </v-row>
        </div>

        <v-row class="mt-6">
          <v-col align="center" class="px-10">
            <v-btn
              elevation="0"
              class="pa-5"
              color="btnColor"
              href="https://docs.box.wtf"
              target="_blank"
            >
              <v-icon left> mdi-book </v-icon>
              <h4 class="font-weight-medium"><b>Read the docs</b></h4>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>

    <v-footer padless app color="transparent">
      <v-col class="text-center" cols="12">
        <h4 class="font-weight-medium">
          Made with ❤️ by

          <a class="text-decoration" href="https://sumit.codes" target="_blank">Sumit</a>
        </h4>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    generatedBoxId: "",
  }),

  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
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
  },
};
</script>

<style>
h4 {
  letter-spacing: 1px;
  font-weight: 400;
}
h1,
h3 {
  display: inline-block;
}
.version-text {
  font-weight: 500;
  font-size: 20px;
  padding-left: 10px;
  color: #7e7e7e;
}

.tagline-text {
  font-weight: 500;
  font-size: 20px;
}

.body-text {
  font-weight: 500;
}

a {
  text-decoration: none;
}

.boxField {
  cursor: pointer;
  margin: 2rem 20px;
  font-weight: 500;
  font-size: 16px;
  background-color: #f55555;
  padding: 1.5rem 10px;
  color: #fff;
  border-radius: 10px;
  letter-spacing: 1px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
