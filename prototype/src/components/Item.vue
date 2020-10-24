<template>
  <v-card class="item">
    <v-img
      width="480px"
      height="360px"
      src="https://static.wixstatic.com/media/81b281_4b770597a8c547d882e0f19f0f2754c1~mv2.jpg"
    ></v-img>
    <div class="item-content">
      <v-card-title> Dish Name </v-card-title>
      <v-card-text> $ {{ itemPrice }} </v-card-text>
      <v-card-text>
        <p>Special Request?</p>

        <hr />
      </v-card-text>
      <v-card-text>
        <v-icon color="accent">mdi-plus</v-icon> them here. We'll do our best to
        make it happen</v-card-text
      >

      <v-card-text> Quantity: {{ quantity }} </v-card-text>
      <Slider :quantity.sync="quantity"></Slider>
      <InputBox :quantity.sync="quantity"></InputBox>
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

export default {
  components: { Slider, InputBox },
  data: function () {
    return {
      itemPrice: 99.0,
      quantity: 30,
    };
  },
};
</script>

<style scoped>
.item {
  max-width: 480px;
}

.item-content {
  padding: 10px;
}

.item-button {
}

.icon-space {
  padding-left: 10px;
  padding-right: 10px;
}
</style>