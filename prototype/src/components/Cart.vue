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
            GST (7%) <br />
            Delivery</v-card-text
          ></v-col
        >
        <v-spacer></v-spacer>
        <v-col cols="6" align="right">
          <v-card-text>
            ( $ {{ subtotal }} ) <br />
            ( $ {{ (subtotal * 0.07).toFixed(2) }} ) <br />
            ( $ 5.00 )
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <hr />

    <v-container class="item-content">
      <v-row>
        <v-column
          ><v-card-text
            >Deliver during: {{ this.$store.state.date }}
            {{ this.$store.state.time }}
            <v-btn
              icon
              color="accent"
              :to="`/time`"
              data-custom="true"
              @click.native="log"
            >
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
      <v-row justify="center" v-if="subtleError">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on"> Left </v-btn> -->
            <v-icon large color="primary" v-bind="attrs" v-on="on">
              mdi-exclamation
            </v-icon>
          </template>
          <span>There's an error somewhere...</span>
        </v-tooltip>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { default as logging } from "@/logging/customLogging.js";
import { default as validate } from "@/plugins/orderValidation.js";
import "@mdi/js";

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
      subtleError: false,
    };
  },
  methods: {
    deleteItem(itemId) {
      // console.log(e.target)
      // console.log(this.items[itemId]);
      logging(undefined, "Mistake", {
        Info: "Deleted Item From Cart",
        Target: "DeleteItem",
        View: "MenuView",
        Component: `DeleteItem${itemId}Button`,
        DV: "4",
      });
      this.$store.commit("removeItemFromCart", { element: itemId });
    },
    selectTime() {
      // alert("Selecting time...")
      // redirect view to select time
    },
    orderNow() {
      let formattedOrder = {};
      // Reformat Cart Items
      for (let id in this.cartItems) {
        let name = this.cartItems[id].name;
        let quantity = this.cartItems[id].quantity;
        formattedOrder[name] = quantity;
      }

      let message = validate(
        formattedOrder,
        this.subtotal,
        this.$store.state.date,
        this.$store.state.time,
        this.$store.state.trialId
      );

      console.log(this.$store.state.betweenSubjectId);

      if (Number(this.$store.state.errorid) == 1) {
        alert(message);
      } else if (Number(this.$store.state.errorid) == 2) {
        this.subtleError = true;
      }

      // Perform checking according to tasks
      if (!message.includes("Order completed")) {
        logging(undefined, "Mistake", {
          Info: message,
          Target: "OrderNow",
          View: "MenuView",
          Component: "OrderButton",
          DV: "4",
        });
      }
      else {
        // Turn off exclaimation marks
        this.subtleError = false;
        alert(message);

        // log end time
        logging(undefined, "EndTask", {
          Info: "End of Task",
          Target: "OrderNow",
          View: "MenuView",
          Component: "OrderButton",
          DV: "1",
        });
      }
    },
    log(event) {
      // Invoke Custom Logging Function
      logging(event, "null", {
        Info: "Click on Delivery Time",
        Target: "DeliveryTime",
        View: "MenuView",
        Component: "DeliveryTimeButtom",
        DV: "2",
      });
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