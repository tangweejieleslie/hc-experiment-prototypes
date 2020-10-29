<template>
  <v-container>
    <v-row>
      <h1>This is Group 7 UI Prototype</h1>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

import { default as logging } from "@/logging/customLogging.js";

export default {
  name: 'Home',
  components: {

  },
  mounted() {
    logging(undefined, "StartTask", {Info: "Start of Task", Target: "null", View: "LandingView", Component: "null", DV: "1"})
  }
}

</script>
