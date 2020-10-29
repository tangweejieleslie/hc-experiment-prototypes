<template>
  <h1>
    <v-container>
      <v-row>
        <h1>DV2: Input Type (Accordion)</h1>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-btn @click="updateInputType('increment')" :to="`/accordion/increment`" >Increment</v-btn>
        </v-col>
        <v-col align="center">
          <v-btn :to="`/accordion/input`" @click="updateInputType('input')">Input</v-btn>
        </v-col>
        <v-col align="center">
          <v-btn :to="`/accordion/slider`" @click="updateInputType('slider')">Slider</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </h1>
</template>

<script>
export default {
  methods: {
    updateInputType(inputType) {
      console.log(inputType)
      this.$store.commit("updateInputType", { value: inputType });
    },
  },
};
</script>

<style>
</style>