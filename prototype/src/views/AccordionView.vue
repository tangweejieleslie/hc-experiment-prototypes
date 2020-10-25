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
          <v-col cols="12" sm="6" md="4" v-for="item in items" v-bind:key="item" align="center">
            <MiniItemAccordion
              :name="item.name"
              :itemPrice="item.price"
              :imageSource="item.img"
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

export default {
  name: "Home",
  components: {
    // ItemCard,
    Cart,
    MiniItemAccordion,
    // MiniItemFull,
    Accordion,
  },
  data: function () {
    return {
      items: [
        {
          name: "Curry 'O",
          price: "1.60",
          img:
            "https://static.wixstatic.com/media/e7fc58_675a1e6a0c8a4e59bea7b0c6fb87305c~mv2_d_3264_4896_s_4_2.jpg",
        },
        {
          name: "Carrot K8",
          price: "1.50",
          img:
            "https://static.wixstatic.com/media/e7fc58_f6929eeaeacf4768a4741fa92d3d0a13~mv2_d_3264_4896_s_4_2.jpg",
        },
        {
          name: "Spring 'O",
          price: "1.60",
          img:
            "https://static.wixstatic.com/media/e7fc58_a906145e41d344aa84b2ae5f7dc06bad~mv2_d_3264_4896_s_4_2.jpg",
        },
        {
          name: "Curry 'O",
          price: "1.60",
          img:
            "https://static.wixstatic.com/media/e7fc58_675a1e6a0c8a4e59bea7b0c6fb87305c~mv2_d_3264_4896_s_4_2.jpg",
        },
        {
          name: "Carrot K8",
          price: "1.50",
          img:
            "https://static.wixstatic.com/media/e7fc58_f6929eeaeacf4768a4741fa92d3d0a13~mv2_d_3264_4896_s_4_2.jpg",
        },
        {
          name: "Spring 'O",
          price: "1.60",
          img:
            "https://static.wixstatic.com/media/e7fc58_a906145e41d344aa84b2ae5f7dc06bad~mv2_d_3264_4896_s_4_2.jpg",
        },
      ],
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