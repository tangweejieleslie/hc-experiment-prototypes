<template>
  <v-card class="item">
    <v-row>
      <v-col cols="4" justify="center" align="center">
        <v-img class="image-space" :src="imageSource"></v-img>
      </v-col>
      <v-col>
        <v-card-title class="no-padding" align="left"> Dish Name </v-card-title>
        <v-card-text class="no-padding" align="left">
          $ {{ itemPrice }}
        </v-card-text>
        <v-card-text class="no-padding" align="left">
          Description goes here...
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

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
  methods:{
      addItem(){

      }
  }
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
  margin-left: 5px;
  margin-right: 5px;
  max-height: 150px;
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