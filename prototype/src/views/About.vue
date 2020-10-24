<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn
    @click="endTime"
    > 
      endTime
    </v-btn>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
// import Home from "./views/Home.vue";

export default Vue.extend({
  name: "App",

  components: {
    // Home
  },

  data: () => ({
    //
  }),

  methods: {
    endTime: function() {
      console.log("End: ", Date.now())
    }
  }
});
</script>
