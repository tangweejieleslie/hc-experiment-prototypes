<template>
  <v-app>
    {{ this.$store.state.quantity }}
    <v-btn @click="handleState">increase</v-btn>

    <!-- Invoke Custom Logging Function - Entry Point -->
    <v-btn @click="log" data-custom=true>Log Test</v-btn>
    <TopBar></TopBar>

    <v-main>
      <router-view></router-view>
      <v-container class="fill-height">
        <v-row>
          <Accordion></Accordion>
        </v-row>
        <v-row>
          <v-col cols="3"> <Cart></Cart></v-col>
          <v-col
            ><MiniItemAccordion
              imageSource="https://static.wixstatic.com/media/81b281_4b770597a8c547d882e0f19f0f2754c1~mv2.jpg"
            ></MiniItemAccordion
          ></v-col>
          <v-col
            ><MiniItemFull
              imageSource="https://static.wixstatic.com/media/81b281_4b770597a8c547d882e0f19f0f2754c1~mv2.jpg"
            ></MiniItemFull
          ></v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <ItemCard
              quantity="1"
              itemPrice="99"
              type="increment"
              imageSource="https://static.wixstatic.com/media/81b281_4b770597a8c547d882e0f19f0f2754c1~mv2.jpg"
            ></ItemCard>
          </v-col>

          <v-col cols="4">
            <ItemCard
              quantity="1"
              itemPrice="99"
              type="input"
              imageSource="https://static.wixstatic.com/media/81b281_4b770597a8c547d882e0f19f0f2754c1~mv2.jpg"
            ></ItemCard>
          </v-col>
          <v-col cols="4">
            <ItemCard
              quantity="1"
              itemPrice="99"
              type="slider"
              imageSource="https://static.wixstatic.com/media/81b281_4b770597a8c547d882e0f19f0f2754c1~mv2.jpg"
            ></ItemCard>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import ItemCard from "@/components/Item";
import Cart from "@/components/Cart";
import MiniItemAccordion from "@/components/MiniItemAccordion";
import MiniItemFull from "@/components/MiniItemFullLayout";
import Accordion from "@/components/Accordion";

// Custom Logging Test
import { default as logging } from "@/logging/customLogging.js";

export default {
  name: "App",

  components: {
    ItemCard,
    Cart,
    MiniItemAccordion,
    MiniItemFull,
    Accordion,
  },

  data: () => ({
    //
  }),
  methods: {
    handleState() {
      this.$store.commit("increment");
    },
    log(event) {
      // Invoke Custom Logging Function
      logging(event, {Info: "....", Target: "LogTestButton", View: "Sandbox", Component: "Sandbox", DV: "2"})
    },
  },
};
</script>


<style scoped>
.left-margin {
  margin-left: 100px;
  padding-left: 100px;
}
</style>