import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quantity: 50,
    cartItems: [{
      id: 1,
      name: "Curry'O",
      quantity: 10,
      cost: 10,
    },
    {
      id: 2,
      name: "Sardine",
      quantity: 10,
      cost: 10,
    }
    ]
  },
  mutations: {
    increment: state => {
      state.quantity++;
      console.log("increasing")
    },
    addItemToCart: (state, payload) => {
      state.cartItems.push({
        id: payload.id,
        name: payload.name,
        quantity: payload.quantity,
        cost: payload.cost
      })
      console.log("Adding Items")
    },
    removeItemFromCart: (state,payload) => {
      state.cartItems.splice(payload.elementPosition, 1)
    },
    // increment: state => state.quantity++,
    decrement: state => state.quantity--
  },
  getters: {
    getCartItems: state => {
      return state.cartItems
    }
  },
  actions: {},
  modules: {}
});
