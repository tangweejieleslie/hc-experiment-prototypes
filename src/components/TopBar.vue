<template>
  <v-app-bar app flat color="primary">
    <div class="d-flex align-center left-margin">
      <v-img contain height="50px" :src="logoSource"> </v-img>
    </div>
    <v-spacer></v-spacer>
    <ul>
      <li>
        <v-btn
          @click="log"
          data-custom="true"
          flat
          depressed
          class="primary"
          to="/"
        >
          Home</v-btn
        >
      </li>
      <li>
        <v-btn
          @click="log"
          data-custom="true"
          flat
          depressed
          class="primary"
          to="/accordion"
        >
          Accordion View</v-btn
        >
      </li>
      <li>
        <v-btn
          @click="log"
          data-custom="true"
          flat
          depressed
          class="primary"
          to="/full"
        >
          Full Menu View</v-btn
        >
      </li>
      <li>
        <v-btn flat depressed class="primary" to="/sandbox">
          Sandbox View</v-btn
        >
      </li>
    </ul>
  </v-app-bar>
</template>

<script>
import { default as logging } from "@/logging/customLogging.js";

export default {
  name: "App",

  components: {},

  data: () => ({
    logoSource: require("@/assets/images/ock-logo.png"),
    //
  }),
  methods: {
    log(event) {
      // Invoke Custom Logging Function
      logging(event, "null", {
        Info: "Click to Menu View",
        Target: "LoadMenu",
        Component: "LoadMenuButton",
        DV: "2",
      });
    },
  },
};
</script>


<style scoped>
.left-margin {
  margin-left: 100px;
  padding-left: 100px;
}

li {
  list-style: none;
  float: left;
  margin-right: 10px;
  margin-left: 10px;
}
</style>