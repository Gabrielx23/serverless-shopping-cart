import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products';
import carts from './modules/carts';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        products,
        carts
    }
});