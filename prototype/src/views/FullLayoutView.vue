<template>
  <v-container class="container">
    <v-toolbar>


      <!-- programmatic scrolling NOT WORKING -->
      <div v-for= "(subcats, cat) in items" v-bind:key ="cat">
        <v-btn  @click="$vuetify.goTo(cat)">{{cat}}</v-btn>
      </div>

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
        <v-row v-for="(subcats, cat) in items" v-bind:key="cat">
<!-- display category           -->
          <v-col  cols="12">

            <!-- for programmatic scrolling. NOT WORKING. -->
            <h1 :id="cat">{{ cat }}</h1>
          </v-col>

          <v-row v-for="(foodItems, subcat) in subcats" v-bind:key="subcat"> 
<!-- display subcategory -->
            <v-col cols="12">
              <h2>{{ subcat }}</h2>
            </v-col>

            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                v-for="foodItem in foodItems"
                v-bind:key="foodItem.name"
                align="center"
              >
                <MiniItemFull
                  :name="foodItem.name"
                  :itemPrice="foodItem.price"
                  :imageSource="foodItem.img"
                  :id="foodItem.id"
                  :quantityInput="type"
                  :quantity="1"
                  :category="cat"
                ></MiniItemFull
              ></v-col>
            </v-row>


          </v-row>
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
// import ItemListJson from "@/store/Items.json";
import ItemListJson from "@/assets/items.json";

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
      items: ItemListJson,
      // items: ItemListJson[this.$store.state.filter],
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