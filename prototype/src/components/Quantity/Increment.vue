<template>
  <v-card-text>
    <v-container class="no-padding">
      <v-row>
        <v-col cols="3" justify="left"> Quantity </v-col>
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
            "
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
            "
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
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

.centered-input {
  text-align: center;
}
</style>