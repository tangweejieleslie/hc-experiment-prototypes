<template>
  <v-card class="item">
    <v-img
      width="480px"
      height="360px"
      :src=imageSource
    ></v-img>
    <div class="item-content">
      <v-card-title> Dish Name </v-card-title>
      <v-card-text> $ {{ itemPrice }} </v-card-text>
      <v-card-text>
        <p>Special Request?</p>

        <hr />
      </v-card-text>
      <v-card-text>
        <v-icon color="accent">mdi-plus</v-icon> Add them here. We'll do our best to
        make it happen</v-card-text
      >

      <!-- <v-card-text> Quantity: {{ quantity }} </v-card-text> -->

      <Slider  v-if="type=== 'slider'" :quantity.sync="quantity"></Slider>
      <InputBox  v-else-if="type === 'input'" :quantity.sync="quantity"></InputBox>
      <Increment v-else-if="type === 'increment'" :quantity.sync="quantity"></Increment>
      <v-btn color="accent" class="item-button" block tile>
        <v-icon class="icon-space">mdi-plus</v-icon> Add to My Order
      </v-btn>
      <br />
    </div>
  </v-card>
</template>

<script>
import "@mdi/js";
import Slider from "./Quantity/Slider";
import InputBox from "./Quantity/Input";
import Increment from "./Quantity/Increment";

export default {
  props: {
    name: String,
    quantity: Number,
    itemPrice: Number,
    type: String,
    imageSource: String
  },
  components: { Slider, InputBox, Increment },
  data: function () {
    return {
    //   itemPrice: 99.0,
    //   quantity: 30,
    };
  },
};
</script>

<style scoped>
.item {
  max-width: 480px;
}

.item-content {
  padding: 5px;
}



.icon-space {
  padding-left: 5px;
  padding-right: 5px;
}
</style>