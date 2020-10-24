<template>
  <v-card-text class="no-vertical-padding">
    <v-container class="no-padding">
      <v-row class="no-padding">
        <v-col cols="4" justify="left" class="no-vertical-padding">
          <v-subheader class="no-padding">Quantity</v-subheader>
        </v-col>
        <v-col cols="4" class="no-vertical-padding">
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

.no-horizontal-padding {
  padding-left: 0px;
  padding-right: 0px;
}

.no-vertical-padding {
  padding-top: 0px;
  padding-bottom: 0px;
}

/* Deep Selector 
https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
*/
.centered-input >>> input {
  text-align: center;
}
</style>