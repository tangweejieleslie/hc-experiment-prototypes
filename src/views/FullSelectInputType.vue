<template>
  <h1>
    <v-container>
        <v-row>
            <h1>DV2: Input Type (Full Layout)</h1>
        </v-row>
      <v-row>
        <v-col align="center">
          <v-btn :to="`/full/increment`">Increment</v-btn>
        </v-col>
        <v-col align="center">
          <v-btn :to="`/full/input`">Input</v-btn>
        </v-col>
        <v-col align="center">
          <v-btn :to="`/full/slider`">Slider</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </h1>
</template>

<script>
export default {

};
</script>

<style>
</style>