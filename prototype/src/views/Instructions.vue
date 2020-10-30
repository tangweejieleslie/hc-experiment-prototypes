<template>
  <v-container>
    <v-row>
      <h1>This is Group 7 UI Prototype</h1>
    </v-row>
    <v-row>
      Go to: "accordion/increment", "Obvious Error", "Default Menu", "User ID
      set as '1' "
      <v-btn :to="`/home/1/1/0/1`"> 1,1,0,1 </v-btn>
    </v-row>
    <v-row>
      Go to: "full/input", "Subtle Error", "Custom Menu", "User ID set as '100'
      "
      <v-btn :to="`/home/4/2/1/100`"> 1,1,1,100 </v-btn>
    </v-row>
        <v-row>
      Go to: "full/input", "Subtle Error", "Default Menu", "User ID set as '100'
      "
      <v-btn :to="`/home/4/2/1/100`"> 1,1,0,100 </v-btn>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
const conditions = [
  "accordion/increment", // 1
  "accordion/input",
  "accordion/slider",
  "full/increment",
  "full/input",
  "full/slider", // 6
];
const betweenSubjectsCondition = [
  "Obvious Error", // 1
  "Subtle Error",
  "Default Menu",
  "Custom Menu", // 4
];

import { default as logging } from "@/logging/customLogging.js";

export default {
  name: "Home",
  props: {
    condition: String,
    error: String,
    menu: String,
    id: String,
  },
  components: {},
  data: () => ({
    bconditions: betweenSubjectsCondition,
    conditions: conditions,
  }),
  methods: {
    setConditions() {
      console.log("test");
      this.$store.commit("setId", {
        error: this.error,
        menu: this.menu,
        cond: this.condition,
        user: this.id,
      });
    },
  },
  mounted() {
    logging(undefined, "StartTask", {
      Info: "Start of Task",
      Target: "null",
      View: "LandingView",
      Component: "null",
      DV: "1",
    });
    this.$store.commit("setId", {
      error: this.error,
      menu: this.menu,
      cond: this.condition,
      user: this.id,
    });
  },
};
</script>
