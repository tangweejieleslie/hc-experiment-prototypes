<template>
  <v-container class="container">
    <v-row>
      <v-col cols="3">
        <Accordion></Accordion>
      </v-col>
      <v-col cols="6">
        <div align="center">
          <h1>Old Chang Kee</h1>
          <hr />
          <h2>Traditional Favourites</h2>
        </div>

        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="item in items"
            v-bind:key="item.id"
            align="center"
          >
            <MiniItemAccordion
              :name="item.name"
              :itemPrice="item.price"
              :imageSource="item.img"
              :id="item.id"
              :quantityInput="type"
              :quantity="1"
            ></MiniItemAccordion
          ></v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <Cart></Cart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

// import ItemCard from "@/components/Item";
import Cart from "@/components/Cart";
import MiniItemAccordion from "@/components/MiniItemAccordion";
// import MiniItemFull from "@/components/MiniItemFullLayout";
import Accordion from "@/components/Accordion";
// import {default as logging } from "@/logging/interface.js"

import ItemListJson from "@/store/Items.json";

let allItems = [];
for (let category in ItemListJson) {
  console.log(ItemListJson[category])
  for (let id in ItemListJson[category]) {
    allItems.push(ItemListJson[category][id]);
  }
}
console.log(allItems);

export default {
  name: "Home",
  mounted:{

  },
  components: {
    // ItemCard,
    Cart,
    MiniItemAccordion,
    // MiniItemFull,
    Accordion,
  },
  props: {
    type: String,
  },
  data: function () {
    return {
      items: allItems,
    };
  },
};
</script>


<style>
.container {
  margin: auto;
  padding: 0px;
}
</style>