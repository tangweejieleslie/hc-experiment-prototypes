<template>
  <div align="center" class="spacing">
    <v-card class="item">
      <v-img
        width="480px"
        height="360px"
        :src="ItemList[id].img"
      ></v-img>
      <div class="item-content">
        <v-card-title> {{ ItemList[id].name }} </v-card-title>
        <v-card-text> $ {{ ItemList[id].price.toFixed(2) }} </v-card-text>
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
        <v-btn color="accent" class="item-button" block tile @click="addToCart(); log($event);" data-custom=true>
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

import ItemListJson from "@/assets/items.json";
import { default as logging } from "@/logging/customLogging.js";

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
      ItemList: ItemListJson[this.$store.state.filter],
    };
  },
  methods: {
    addToCart() {
      if (this.quantity > 0) {
        console.log("Added to cart");
        let TotalCost = this.ItemList[this.id].price * this.quantity;
        let itemId = this.id;
        this.$store.commit("addItemToCart", {
          id: itemId,
          name: this.ItemList[itemId].name,
          quantity: this.quantity,
          cost: TotalCost.toFixed(2),
        });
        this.$router.go(-1);
      } else {
        console.log("Error!")
        alert("Quantity Cannot be Zero!")
        logging(undefined, "Mistake", {Info: "Quantity Cannot be Zero!", Target: "AddtoCart", View: "ItemView", Component: "AddToCartButton", DV: "4"})
      }
    },
    log(event) {
      // Invoke Custom Logging Function
      logging(event, "null", {Info: "Click on Add to Cart", Target: "AddtoCart", View: "ItemView", Component: "AddToCartButton", DV: "2"})
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