<template>
  <v-card-text>
    <v-slider
      v-model="quantity"
      label="Quantity"
      :thumb-color="ex3.color"
      thumb-label="always"
      track-color="black"
      color="black"
      @change="$emit('update:quantity', quantity);"
      data-custom=true 
      @click.native="log"
    ></v-slider>
  </v-card-text>
</template>

<script>
import { default as logging } from "@/logging/customLogging.js";

export default {
  props:{
    quantity: Number
  },
  data: function () {
    return {
      ex3: { label: "Quantity", val: 50, color: "accent"},
    };
  },
  methods: {
    sliderChange(){
      // $emit('update:quantity', quantity);
    },
    log(event) {
      // Invoke Custom Logging Function
      logging(event, "null", {Info: "Click on Quantity Slider", Target: "Slider", View: "ItemView", Component: "Slider", DV: "2"})
    },
  }
};
</script>

<style>
</style>