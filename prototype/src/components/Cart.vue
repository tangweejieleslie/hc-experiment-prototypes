<template>
  <v-card class="shopping-cart">
    <v-row>
      <v-column><v-card-title>My Order</v-card-title></v-column>
      <v-spacer></v-spacer>
      <v-column>
        <v-card-title> ( {{ cartItems.length }} items) </v-card-title>
      </v-column>
    </v-row>
    <hr />

    <v-container class="item-content">
      <v-list>
        <v-list-item v-for="item in cartItems" v-bind:key="item.id">
          <v-list-item-content>
            <v-list-item-title>
              <v-row class="cart-item-row" justify="end" align="end">
                {{ item.quantity }} x {{ item.name }}
                <v-spacer></v-spacer>
                ${{ item.cost }}
                <v-btn
                  color="red"
                  class="icon"
                  icon
                  @click="deleteItem(item.name)"
                >
                  X
                </v-btn>
              </v-row>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <hr />

      <v-row>
        <v-col cols="6"
          ><v-card-text>
            Subtotal<br />
            Tax <br />
            Delivery</v-card-text
          ></v-col
        >
        <v-spacer></v-spacer>
        <v-col cols="6" align="right">
          <v-card-text>
            ( $ {{ subtotal }} ) <br />
            ( $ {{ cartItems.length }} ) <br />
            ( $ {{ cartItems.length }} )
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <hr />

    <v-container class="item-content">
      <v-row>
        <v-column
          ><v-card-text
            >Deliever during: {{ this.$store.state.date }}
            {{ this.$store.state.time }}
            <v-btn icon color="accent" :to="`/time`">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn></v-card-text
          ></v-column
        >
      </v-row>

      <v-row class="item-content">
        <v-btn
          color="accent"
          class="item-button"
          block
          tile
          depressed
          @click="orderNow"
        >
          Order Now<v-icon class="icon-space">mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  components: {},
  computed: {
    subtotal() {
      let sum = 0;

      for (let id in this.cartItems) {
        sum += parseFloat(this.cartItems[id].cost);
        // console.log(item);
      }

      return sum.toFixed(2);
    },
  },
  data: function () {
    return {
      cartItems: this.$store.state.cartItems,
    };
  },
  methods: {
    deleteItem(itemId) {
      // console.log(e.target)
      // console.log(this.items[itemId]);
      this.$store.commit("removeItemFromCart", { element: itemId });
    },
    selectTime() {
      // alert("Selecting time...")
      // redirect view to select time
    },
    orderNow() {
      // Perform checking according to tasks
      // log end time
    },
  },
};
</script>

<style scoped>
.shopping-cart {
  /* max-width: 480px; */
  width: 100%;
}

.item-content {
  padding: 10px;
}

.icon-space {
  padding-left: 5px;
  padding-right: 5px;
}

.cart-item {
  margin: 0px;
  padding: 0px;
}

.cart-item-row {
  max-width: 100%;
  margin: auto;
}

.item-button {
  width: 90%;
}

.icon {
  width: 15px;
  height: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
}
</style>