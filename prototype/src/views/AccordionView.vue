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
          <h2>{{ catmap[this.$store.state.filter] }}</h2>
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

import ItemListJson from "@/assets/items.json";
import CategoryMappings from "@/assets/CategoryMappings.json";
import MainCategoryMappings from "@/assets/MainCategoryMappings.json";

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
    category: String,
  },
  data: function () {
    return {
      catmap: CategoryMappings,
      items: ItemListJson[this.$store.state.filter],
      accordionItems: [
        {
          title: MainCategoryMappings[this.$store.state.menuid][0],
          active: false,
          items: [
            {
              title:
                CategoryMappings[this.$store.state.menuid]["6-valued-bento"],
              category: "6-valued-bento",
            },
          ],
        },
        {
          title: MainCategoryMappings[this.$store.state.menuid][1],
          active: false,
          items: [
            {
              title:
                CategoryMappings[this.$store.state.menuid][
                  "healthier-deluxe-bento"
                ],
              category: "healthier-deluxe-bento",
            },
            {
              title:
                CategoryMappings[this.$store.state.menuid][
                  "hainanese-chicken-rice-bento"
                ],
              category: "hainanese-chicken-rice-bento",
            },
            {
              title:
                CategoryMappings[this.$store.state.menuid]["vegetarian-bento"],
              category: "vegetarian-bento",
            },
          ],
        },
        {
          title: MainCategoryMappings[this.$store.state.menuid][2],
          active: false,
          items: [
            {
              title: CategoryMappings[this.$store.state.menuid]["ock-platter"],
              category: "ock-platter",
            },
          ],
        },
        {
          title:MainCategoryMappings[this.$store.state.menuid][3],
          active: false,
          items: [
            {
              title: CategoryMappings[this.$store.state.menuid]["trad-fav"],
              category: "trad-fav",
            },
            {
              title: CategoryMappings[this.$store.state.menuid]["seafood-fav"],
              category: "seafood-fav",
            },
            {
              title: CategoryMappings[this.$store.state.menuid]["chicken-fav"],
              category: "chicken-fav",
            },
            {
              title: CategoryMappings[this.$store.state.menuid]["desserts"],
              category: "desserts",
            },
          ],
        },
      ],
    };
  },

  methods: {
    updateFilter(selectedFilter) {
      this.items = ItemListJson[selectedFilter];
      this.$store.commit("setFilter", { filter: selectedFilter });
    },
  },
};
</script>


<style>
.container {
  margin: auto;
  padding: 0px;
}

.accordion-items {
  padding-left: 30px;
}

/* .v-list-group--active > .v-list-group__header + .v-list-item--active{
    background: purple;
    border-left: 0px solid #e87655;
} */

/* .v-list-group__header .v-list-item .v-list-item--active {
  color: #000;
  background-color: purple;
} */

.v-list-item--active {
  color: #e87655 !important;
  background-color: #fdf1ee;
  border-left: 3px solid #e87655;
}

.child-item {
  padding-left: 35px;
}
</style>