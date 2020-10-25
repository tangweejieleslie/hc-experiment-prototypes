import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quantity: 50
  },
  mutations: {

    increment: state => state.quantity++,
    decrement: state => state.quantity--
  },
  actions: {},
  modules: {}
});
