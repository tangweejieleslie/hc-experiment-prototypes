<template>
  <v-container>
    <v-row>
      <h1>Welcome! Please click "Start" to begin the task.</h1>
    </v-row>
    <v-row>
      <v-btn
        class="ma-4"
        :to="`/${conditions[condition]}`"
        @click="setConditions(), log()"
        data-custom="true"
        >Start</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
const conditions = [
  "accordion/increment", // 0
  "accordion/input",
  "accordion/slider",
  "full/increment",
  "full/input",
  "full/slider", // 5
];
const betweenSubjectsCondition = [
  "Obvious Error", // 1
  "Subtle Error", // 2
  "Default Menu", // 0
  "Custom Menu", // 1
];

import { default as logging } from "@/logging/customLogging.js";

export default {
  name: "Home",
  props: {
    condition: String,
    error: String,
    menu: String,
    user: String,
    trial: String,
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
        trial: this.trial,
      });
    },
    log() {
      // Invoke Custom Logging Function
      logging(undefined, "StartTask", {
        Info: "Start of Task",
        Target: this.user,
        View: "LandingView",
        Component: `${conditions[this.condition]},${betweenSubjectsCondition[this.error - 1]},${betweenSubjectsCondition[Number(this.menu) + 2]},${this.trial}`,
        DV: "1",
      });
    },
  },
  mounted() {
    this.$store.commit("setId", {
      error: this.error,
      menu: this.menu,
      cond: this.condition,
      trial: this.trial,
    });
  },
};
</script>
