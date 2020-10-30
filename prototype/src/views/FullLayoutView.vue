<template>
  <v-container class="container">
    <v-app-bar class="offset" color="white" flat height="120px">
      <!-- programmatic scrolling NOT WORKING -->
      <v-row id="top">
        <v-btn
          class="ma-1"
          color="primary"
          v-for="(subcats, cat) in items"
          v-bind:key="cat"
          @click="ScrollToView(cat)"
          >{{ catmap[menuType][cat] }}</v-btn
        >
      </v-row>
    </v-app-bar>

    <v-row>
      <!-- <v-col cols="3">
        <Accordion></Accordion>
      </v-col> -->
      <v-col cols="9">
        <v-row
          v-for="(foodItems, subcat) in items"
          v-bind:key="subcat"
          :id="subcat"
        >
          <!-- display subcategory -->
          <v-col cols="12">
            <h2 class="white--text">{{ catmap[subcat] }}</h2>
          </v-col>

          <v-col cols="12">
            <h2>{{ catmap[menuType][subcat] }}</h2>
            <v-btn @click="ScrollToTop">Back to Top</v-btn>
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
                :category="subcat"
              ></MiniItemFull
            ></v-col>
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
import CategoryMapping from "@/assets/CategoryMappings.json";

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
      catmap: CategoryMapping,
      menuType: this.$store.state.menuid,
      // items: ItemListJson[this.$store.state.filter],
    };
  },
  mounted() {
    logging(undefined, "StartTask", {
      Info: "Start of Task",
      Target: "null",
      View: "LandingView",
      Component: "FullLayout",
      DV: "1",
    });
  },
  methods: {
    ScrollToView(element) {
      document.getElementById(element).scrollIntoView();
    },
    ScrollToTop() {
      window.scrollTo(0, 0);
    },
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

.offset {
  /* margin-top: 100px; */
}
</style>