<template>
  <v-app>
    <TopBar></TopBar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "./components/TopBar";


export default {
  name: "App",

  components: {
    TopBar,
  },

  data: () => ({
    //
  }),
};
</script>


<style scoped>
.left-margin {
  margin-left: 100px;
  padding-left: 100px;
}

</style>