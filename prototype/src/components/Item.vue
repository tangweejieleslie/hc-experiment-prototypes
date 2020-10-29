<template>
  <div align="center" class="spacing">
    <v-card class="item">
      <v-img
        width="480px"
        height="360px"
        :src="ItemList[id].imageSource"
      ></v-img>
      <div class="item-content">
        <v-card-title> {{ ItemList[id].name }} </v-card-title>
        <v-card-text> $ {{ ItemList[id].price }} </v-card-text>
        <v-card-text>
          <p>Special Request?</p>

          <hr />
        </v-card-text>
        <v-card-text>
          <v-icon color="accent">mdi-plus</v-icon> Add them here. We'll do our
          best to make it happen</v-card-text
        >

        <!-- <v-card-text> Quantity: {{ quantity }} </v-card-text> -->

        <Slider v-if="type === 'slider'" :quantity.sync="quantity"></Slider>
        <InputBox
          v-else-if="type === 'input'"
          :quantity.sync="quantity"
        ></InputBox>
        <Increment
          v-else-if="type === 'increment'"
          :quantity.sync="quantity"
        ></Increment>
        <v-btn color="accent" class="item-button" block tile @click="addToCart">
          <v-icon class="icon-space">mdi-plus</v-icon> Add to My Order
        </v-btn>
        <br />
      </div>
    </v-card>
  </div>
</template>

<script>
import "@mdi/js";
import Slider from "./Quantity/Slider";
import InputBox from "./Quantity/Input";
import Increment from "./Quantity/Increment";
// import VueRouter from 'vue-router'
// import { routes } from "@/router/index.js";

import ItemListJson from "@/store/Items.json";

export default {
  props: {
    id: Number,
    // name: String,
    // quantity: Number,
    itemPrice: Number,
    type: String,
    imageSource: String,
  },
  components: { Slider, InputBox, Increment },
  data: function () {
    return {
      //   itemPrice: 99.0,
        quantity: 1,
      // id: 1,
      ItemList: ItemListJson,
    };
  },
  methods: {
    addToCart() {
      if (this.quantity > 0) {
        console.log("Added to cart");
        let TotalCost = ItemListJson[this.id].price * this.quantity;
        let itemId = this.id;
        this.$store.commit("addItemToCart", {
          id: itemId,
          name: ItemListJson[itemId].name,
          quantity: this.quantity,
          cost: TotalCost.toFixed(2),
        });
        // TODO: add logic to update State, which in turn update cart

        // this.$router.push("/");
        this.$router.go(-1);
      } else {
        console.log("Error!")
        alert("Quantity Cannot be Zero!")
        // TODO: log instrumentation
      }
    },
  },
  computed: {
    // name: () => {
    //   if (this.id == 1) {
    //     return "one";
    //   }
    //   return "";
    // },
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

.spacing {
  padding: 20px;
}
</style>