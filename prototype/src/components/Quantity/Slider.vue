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
    ></v-slider>
  </v-card-text>
</template>

<script>
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
    }
  }
};
</script>

<style>
</style>