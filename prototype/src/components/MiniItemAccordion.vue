<template>
  <v-card class="item">
    <v-img width="300px" height="225px" :src="imageSource"></v-img>
    <div class="item-content" align="left">
      <v-card-title> {{ name }} </v-card-title>
      <v-card-text> $ {{ itemPrice }} </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :to="`/item/${id}/slider`" icon color="accent" class="button-padding">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
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
    id: String,
  },
  components: {},
  // computed:{
  //   name: () => {
  //     if(this.props.id==1){
  //       return "one"
  //     }
  //     return ""
  //   }
  // },
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
  max-width: 300px;
}

.item-content {
  padding: 5px;
}

.icon-space {
  padding-left: 5px;
  padding-right: 5px;
}

.button-padding {
  /* padding: 10px;
  margin: 10px; */
}
</style>