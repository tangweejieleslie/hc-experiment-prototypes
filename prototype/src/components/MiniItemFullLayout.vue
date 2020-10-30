<template>
  <v-card class="item">
    <v-row>
      <v-col cols="4" justify="center" align="center">
        <v-img class="image-space" :src="imageSource"></v-img>
      </v-col>
      <v-col>
        <v-card-title class="no-padding" align="left">
          <p class="text-wrap">
            {{ name }}
          </p>
        </v-card-title>
        <v-card-text class="no-padding" align="left">
          $ {{ itemPrice }}
        </v-card-text>
        <!-- {{ category }} -->
        <!-- <v-card-text class="no-padding" align="left">
          Description goes here...
        </v-card-text> -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            icon
            color="accent"
            class="button-padding"
            id="test"
            data-custom="true"
            @click.native="
              log($event, id);
              updateFilter();
            "
            :to="`/item/${quantityInput}/${id}/${category}`"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import "@mdi/js";
import { default as logging } from "@/logging/customLogging.js";

export default {
  props: {
    name: String,
    quantity: Number,
    quantityInput: String,
    itemPrice: Number,
    type: String,
    imageSource: String,
    id: Number,
    category: String,
  },
  components: {},
  data: function () {
    return {
      //   itemPrice: 99.0,
      //   quantity: 30,
    };
  },
  methods: {
    updateFilter() {
      // this.items = ItemListJson[selectedFilter];
      // console.log("HEYYY", this.category);
      this.$store.commit("setFilter", { filter: this.category });
    },
    addItem() {},
    log(event, id) {
      // Invoke Custom Logging Function
      logging(event, "null", {
        Info: "Click on Item",
        Target: "LoadItem",
        View: "MenuView",
        Component: `LoadItem${id}Button`,
        DV: "2",
      });
    },
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
  width: 100%;
}
</style>