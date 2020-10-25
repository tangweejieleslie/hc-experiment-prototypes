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
              <v-row class="cart-item-row">
                {{ item.quantity }} x {{ item.name }}
                <v-spacer></v-spacer>
                ${{ item.cost }}
              </v-row>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <hr />

      <v-row>
        <v-column
          ><v-card-text>
            Subtotal<br />
            Tax <br />
            Delivery</v-card-text
          ></v-column
        >
        <v-spacer></v-spacer>
        <v-column>
          <v-card-text>
            ( $ {{ cartItems.length }} to be computed later ) <br />
            ( $ {{ cartItems.length }} to be computed later ) <br />
            ( $ {{ cartItems.length }} to be computed later )
          </v-card-text>
        </v-column>
      </v-row>
    </v-container>
    <hr />

    <v-container class="item-content">
      <v-row>
        <v-column
          ><v-card-text
            >For: Specific time
            <v-btn icon color="accent">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn></v-card-text
          ></v-column
        >
      </v-row>

      <v-row class="item-content">
        <v-btn color="accent" class="item-button" block tile depressed>
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
  data: function () {
    return {
      cartItems: this.$store.state.cartItems,
    };
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
</style>