<template>
  <v-card-text>
    <v-container class="no-padding">
      <v-row>
        <v-col cols="3" justify="left">
          <v-subheader class="no-padding">Quantity</v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field
            class="centered-input"
            max-width="50px"
            height="50px"
            outlined
            v-model="quantity"
            @change="$emit('update:quantity', quantity)"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
</template>

<script>
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

/* Deep Selector 
https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
*/
.centered-input >>> input {
  text-align: center;
}
</style>