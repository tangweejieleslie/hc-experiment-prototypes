<template>
  <v-card-text>
    <v-container class="no-padding">
      <v-row>
        <v-col cols="4" justify="left"> Quantity </v-col>
        <v-col cols="2" align="center">
          <v-btn
            fab
            depressed
            class="button-size"
            color="accent"
            width="30px"
            height="30px"
            @click="
              quantity -= 1;
              $emit('update:quantity', quantity);
              log($event);
            "
            data-custom=true 
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="2" align-self="center" class="centered-input">
          {{ quantity }}
        </v-col>
        <v-col cols="2" align="center">
          <v-btn
            fab
            color="accent"
            width="30px"
            height="30px"
            depressed
            @click="
              quantity += 1;
              $emit('update:quantity', quantity);
              log($event);
            "
            data-custom=true 
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
</template>

<script>
import { default as logging } from "@/logging/customLogging.js";

export default {
  props: {
    quantity: Number,
  },
  data: function () {
    return {
      ex3: { label: "Quantity", val: 50, color: "accent" },
    };
  },
  methods: {
    sliderChange() {
      // $emit('update:quantity', quantity);
    },
    log(event) {
      // Invoke Custom Logging Function
      logging(event, "null", {Info: "Click on Quantity Increment", Target: "Increment", View: "ItemView", Component: "Increment", DV: "2"})
    },
  },
};
</script>

<style scoped>
.input-box {
  max-width: 50px;
}

.no-padding {
  padding: 0px;
}

.centered-input {
  text-align: center;
}
</style>