<template>
  <v-container class="container">
    <v-toolbar>
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
      </ul>
    </v-toolbar>

    <v-row>
      <!-- <v-col cols="3">
        <Accordion></Accordion>
      </v-col> -->
      <v-col cols="9">
        <div align="left">
          <h2>Traditional Favourites</h2>
        </div>

        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="item in items"
            v-bind:key="item"
            align="center"
          >
            <MiniItemFull
              :name="item.name"
              :itemPrice="item.price"
              :imageSource="item.img"
              :id="item.id"
              :quantityInput="type"
              :quantity="1"
            ></MiniItemFull
          ></v-col>
        </v-row>

        <br />
        <hr />
        <div align="left">
          <h2>Category 2</h2>
        </div>

        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="item in items"
            v-bind:key="item"
            align="center"
          >
            <MiniItemFull
              :name="item.name"
              :itemPrice="item.price"
              :imageSource="item.img"
              :id="item.id"
              :quantityInput="type"
              :quantity="1"
            ></MiniItemFull
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
// import MiniItemAccordion from "@/components/MiniItemAccordion";
import MiniItemFull from "@/components/MiniItemFullLayout";
// import Accordion from "@/components/Accordion";
import { default as logging } from "@/logging/customLogging.js";
import ItemListJson from "@/store/Items.json";

export default {
  name: "Home",
  components: {
    // ItemCard,
    Cart,
    // MiniItemAccordion,
    MiniItemFull,
    // Accordion,
  },
  props: {
    type: String,
  },
  data: function () {
    return {
      items: ItemListJson[this.$store.state.filter],
    };
  },
  mounted() {
    logging(undefined, "StartTask", {Info: "Start of Task", Target: "null", View: "LandingView", Component: "FullLayout", DV: "1"})
  },
};
</script>


<style>
.container {
  margin: auto;
  padding: 0px;
}

li {
  list-style: none;
  float: left;
  margin-right: 10px;
  margin-left: 10px;
}
</style>