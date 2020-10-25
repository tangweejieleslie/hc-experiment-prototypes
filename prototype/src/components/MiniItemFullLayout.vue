<template>
  <v-card class="item">
    <v-row>
      <v-col cols="4">
        <div class="image-space">
          <v-img :src="imageSource"></v-img>
        </div>
      </v-col>
      <v-col>
        <v-card-title class="no-padding"> Dish Name </v-card-title>
        <v-card-text class="no-padding"> $ {{ itemPrice }} </v-card-text>
        <v-card-text class="no-padding"> Description goes here... </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon color="accent" class="button-padding">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import "@mdi/js";

export default {
  props: {
    name: String,
    quantity: Number,
    itemPrice: Number,
    type: String,
    imageSource: String,
  },
  components: {},
  data: function () {
    return {
      //   itemPrice: 99.0,
      //   quantity: 30,
    };
  },
};
</script>

<style scoped>
.item {
  width: 460px;
}

.item-content {
  padding: 5px;
}

.image-space {
  padding-left: 5px;
  padding-right: 5px;
}

.icon-space {
  padding-left: 5px;
  padding-right: 5px;
}

.button-padding {
  /* padding: 10px;
  margin: 10px; */
}

.no-padding {
  padding: 0px;
}
</style>