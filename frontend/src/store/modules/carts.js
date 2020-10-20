import axios from 'axios';

const cartsUri = process.env.VUE_APP_CARTS_SERVICE_URI;

const state = {
    carts: []
};

const getters = {
    allCarts: (state) => state.carts,
};

const actions = {
    async fetchCarts({ commit }) {
        const response = await axios.get(cartsUri);

        commit('setCarts', response.data);
    },

    async addCart({ commit }, cartData) {
        const response = await axios.post(cartsUri, cartData);

        commit('newCart', response.data);
    },

    async deleteCart({ commit }, cartId) {
        const response = await axios.delete(`${cartsUri}/${cartId}`);

        commit('removeCart', response.data);
    },

    async updateCart({ commit }, cart) {
        const { id, data } = cart;

        const response = await axios.put(`${cartsUri}/${id}`, data);

        commit('changeCartData', response.data);
    }
};

const mutations = {
    setCarts: (state, carts) => state.carts = carts,
    newCart: (state, cart) => state.carts.unshift(cart),
    removeCart: (state, removed) => {
        const index = state.carts.findIndex(cart => cart.id === removed.id);

        state.carts.splice(index, 1);
    },
    changeCartData: (state, updated) => {
        const index = state.carts.findIndex(cart => cart.id === updated.id);

        state.carts.splice(index, 1, updated);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};