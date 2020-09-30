<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col cols="12" sm="9" md="8" lg="6" xl="5">
        <v-row>
          <v-col align="center" class="mt-6">
            <svg
              viewBox="0 0 24 24"
              width="64"
              height="64"
              stroke="#000"
              stroke-width="1.5"
              fill="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="css-i6dzq1"
            >
              <path
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              ></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>

            <h1 class="mt-2">Box</h1>
            <h3 class="mt-2 font-weight-medium">
              A free HTTP based JSON storage
            </h3>
          </v-col>
        </v-row>

        <v-row class="mt-2">
          <v-col align="center" class="px-10">
            <div class="font-weight-regular">
              <b>Box</b> lets you store, read & modify JSON data over HTTP
              APIs for free. Copy the URL below and start sending HTTP requests
              to play around with your data store.
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-2">
          <v-col>
            <v-row>
              <v-col cols="12" align="center">
                <v-sheet color="#f55555" rounded="lg" class="pa-4">
                  <h4 class="font-weight-medium button">
                    {{ generateBoxId() }}
                  </h4>
                </v-sheet>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" align="center">
                <v-btn @click="copyBoxId()" icon>
                  <v-icon> mdi-content-copy </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="mt-12">
          <v-col align="center" class="px-10">
            <v-btn elevation="0" class="pa-5" color="#121212">
              <v-icon left> mdi-book </v-icon>
              <h4 class="font-weight-medium"><b>Read the docs</b></h4>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-12">
          <v-col align="center" class="px-10">
            Powered By
            <v-img contain height="120px" width="200px" src="../assets/kinto.png"> </v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>

    <v-footer padless app color="transparent">
      <v-col class="text-center" cols="12">
        <h4 class="font-weight-medium">
          Made with ❤️ by
          <b class="text-decoration-underline">
            <a href="https://sumit.codes" target="_blank">Sumit</a>
          </b>
        </h4>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
  methods: {
    generateBoxId() {
      var d = new Date().getTime();
      var boxId = "xxyxxxxxxyxxxxxyxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      });
      return "https://box.wtf/box_" + boxId;
    },
  },
};
</script>

<style>
h4 {
  letter-spacing: 1px;
}
</style>
