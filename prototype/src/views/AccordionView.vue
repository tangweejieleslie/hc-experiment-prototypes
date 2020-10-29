<template>
  <v-container class="container">
    <v-row>
      <v-col cols="3">
        <v-card class="mx-auto" tile>
          <v-navigation-drawer permanent width="100%">
            <v-list>
              <v-list-group
                v-for="item in accordionItems"
                :key="item.title"
                v-model="item.active"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="child in item.items"
                  :key="child.title"
                  class="child-item"
                  link
                  :to="`/accordion/${type}/${child.category}`"
                  @click="updateFilter(child.category)"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-navigation-drawer>
        </v-card>
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
// import Accordion from "@/components/Accordion";
// import {default as logging } from "@/logging/interface.js"

import ItemListJson from "@/store/Items.json";

let allItems = [];
for (let category in ItemListJson) {
  console.log(ItemListJson[category]);
  for (let id in ItemListJson[category]) {
    allItems.push(ItemListJson[category][id]);
  }
}
console.log(allItems);

export default {
  name: "Home",
  components: {
    // ItemCard,
    Cart,
    MiniItemAccordion,
    // MiniItemFull,
    // Accordion,
  },
  props: {
    type: String,
    category: String
  },
  data: function () {
    return {
      
      items: ItemListJson[this.$store.state.filter],
      accordionItems: [
        {
          title: "The Old Chang Kee Platter",
          active: false,
          items: [{ title: "List Item", link: "/a" }],
        },
        {
          title: "Old Chang Kee Favourites",
          active: true,
          items: [
            { title: "List Item", category: "traditional-favourites" },
            { title: "List Item", category: "b" },
            { title: "List Item", category: "/d" },
          ],
        },
        {
          title: "Traditional Favourites",
          active: false,
          items: [
            { title: "Seafood Favourites", link: "/3" },
            { title: "Chicken Favourites", link: "/f" },
            { title: "Desserts", link: "/g" },
          ],
        },
      ],
    };
  },

  methods: {
    updateFilter(selectedFilter){
      this.items = ItemListJson[selectedFilter];
    }
  }
};
</script>


<style>
.container {
  margin: auto;
  padding: 0px;
}
</style>