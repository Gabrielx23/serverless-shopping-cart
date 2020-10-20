import axios from 'axios';

const productsUri = process.env.VUE_APP_PRODUCTS_SERVICE_URI;

const state = {
    products: []
};

const getters = {
    allProducts: (state) => state.products
};

const actions = {
    async fetchProducts({ commit }) {
        const response = await axios.get(productsUri);

        commit('setProducts', response.data);
    },

    async addProduct({ commit }, productData) {
        const response = await axios.post(productsUri, productData);

        commit('newProduct', response.data);
    },

    async deleteProduct({ commit }, productId) {
        const response = await axios.delete(`${productsUri}/${productId}`);

        commit('removeProduct', response.data);
    },

    async updateProduct({ commit }, { id, data }) {
        const response = await axios.put(`${productsUri}/${id}`, data);

        commit('changeProductData', response.data);
    }
};

const mutations = {
    setProducts: (state, products) => state.products = products,
    newProduct: (state, product) => state.products.unshift(product),
    removeProduct: (state, removed) => {
        const index = state.products.findIndex(product => product.id === removed.id);

        state.products.splice(index, 1);
    },
    changeProductData: (state, updated) => {
        const index = state.products.findIndex(product => product.id === updated.id);

        if (index) {
            state.products.splice(index, 1, updated);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};