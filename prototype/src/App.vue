<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-col cols="4">
        <ItemCard
          quantity="1"
          itemPrice="99"
          type="increment"
          imageSource="https://static.wixstatic.com/media/81b281_4b770597a8c547d882e0f19f0f2754c1~mv2.jpg"
        ></ItemCard>
      </v-col>

      <ItemCard
        quantity="1"
        itemPrice="99"
        type="input"
        imageSource="https://static.wixstatic.com/media/81b281_4b770597a8c547d882e0f19f0f2754c1~mv2.jpg"
      ></ItemCard>
      <ItemCard
        quantity="1"
        itemPrice="99"
        type="slider"
        imageSource="https://static.wixstatic.com/media/81b281_4b770597a8c547d882e0f19f0f2754c1~mv2.jpg"
      ></ItemCard>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import ItemCard from "./components/Item";

export default {
  name: "App",

  components: {
    ItemCard,
  },

  data: () => ({
    //
  }),
};
</script>
