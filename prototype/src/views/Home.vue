<template>
  <v-container>
    <v-row>
      <h1>This is Group 7 UI Prototype</h1>
    </v-row>
    <v-row>
      <v-btn class="ma-4" :to="`/${conditions[condition]}`">Start</v-btn>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
const conditions = [
  "accordion/increment",
  "accordion/input",
  "accordion/slider",
  "full/increment",
  "full/input",
  "full/slider",
];
const betweenSubjectsCondition = [
  "Obvious Error",
  "No Error",
  "Default Menu",
  "Custom Menu",
];

import { default as logging } from "@/logging/customLogging.js";

export default {
  name: "Home",
  props: {
    condition: String,
    between: String,
    id: String,
  },
  components: {},
  data: () => ({
    bconditions: betweenSubjectsCondition,
    conditions: conditions,
  }),
  methods: {
    setConditions() {
      this.$store.commit();
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
  },
};
</script>
