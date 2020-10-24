<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>test</h1>
    <v-btn @click="endTime">
      endTime
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  },
  mounted: function() {
    console.time("test1");
    console.log("hi");
    console.log("Start: ", Date.now())
  },
  methods: {
    endTime: function() {
      console.log("End: ", Date.now())
    }
  }

  // time("test1")
})
export default class Home extends Vue {}
</script>
