<template>
  <v-container>
    <v-row>
      <h1>This is Group 7 UI Prototype</h1>
    </v-row>
    <v-row>
      <v-col cols="9">
        Go to: "accordion/input", "Obvious Error", "Default Menu", "User ID set
        as '1' ", "Trial Set: A"
      </v-col>
      <v-col cols="3">
        <v-btn :to="`/home/1/1/0/1/A`"> 1,1,0,1 </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        Go to: "accordion/input", "Obvious Error", "Custom Menu", "User ID set
        as '1' ", "Trial Set: C"
      </v-col>
      <v-col cols="3">
        <v-btn :to="`/home/1/1/0/1/C`"> 1,1,1,1 </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        Go to: "full/input", "Subtle Error", "Custom Menu", "User ID set as
        '100', "Trial Set: B" "
      </v-col>
      <v-col cols="3">
        <v-btn :to="`/home/4/2/1/100/B`"> 4,2,1,100 </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        Go to: "full/input", "Subtle Error", "Default Menu", "User ID set as
        '100', "Trial Set: Sample" "
      </v-col>
      <v-col cols="3">
        <v-btn :to="`/home/4/2/0/100/Sample`"> 4,2,0,100 </v-btn>
      </v-col>
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
    this.$store.commit("setId", {
      error: this.error,
      menu: this.menu,
      cond: this.condition,
      user: this.id,
    });
  },
};
</script>
