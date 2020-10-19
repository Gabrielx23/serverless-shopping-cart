<template>
    <div class="card card-body text-left">
      <h3>Editing:</h3>
      <form @submit.prevent>
        <div class="form-group">
          <label for="cartName">Cart name:</label>
          <input type="text" v-model="cartData.cartName" class="form-control" id="cartName" placeholder="Cart name...">
        </div>
        <div class="row px-3">
          <div class="col-12 px-0 pb-2">Products:</div>
          <div class="col-3 border py-2" v-for="product in cartData.products" :key="product.id">
            <strong>Name: </strong> {{product.productName}} <br>
            <strong>Price: </strong> {{product.price}}$ <br>
            <strong>Price with tax: </strong> {{product.price * (product.taxPercent / 100).toFixed(2)}}$
            <button class="btn btn-danger mt-2" @click="removeProductFromCart(product.id)">Delete from cart</button>
          </div>
        </div>
        <div class="row pt-3 px-2">
          <div class="col-8">
            <label for="newProduct">Select product:</label>
            <select v-model="productIdToAdd" id="newProduct" class="form-control">
              <option v-for="product in allProducts" :key="product.id" v-bind:value="product.id">
                {{product.productName}}
              </option>
            </select>
          </div>
          <div class="col-4 pt-4 mt-2">
            <button class="btn btn-success btn-block" @click="addProductToCart">Add</button>
          </div>
        </div>
        <hr>
        <div class="form-group text-right">
          <button type="submit" class="btn btn-success" @click="processForm">
            Submit
          </button>
        </div>
      </form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "EditProduct",

  data() {
    return {
      cartData: {
        cartName: '',
        products: []
      },
      products: [],
      productIdToAdd: ''
    };
  },

  methods: {
    ...mapActions(['updateCart', 'fetchProducts']),

    removeProductFromCart(id) {
      this.cartData.products = this.cartData.products.filter(product => product.id !== id);
    },

    addProductToCart() {
      const product = this.allProducts.filter(product => product.id === this.productIdToAdd).shift();

      if (product) {
        this.cartData.products.push(product);
      }
    },

    processForm() {
      this.updateCart({
        id: this.cart.id,
        data: {
          cartName: this.cartData.cartName,
          products: this.cartData.products.map(product => product.id)
        }
      });

      this.$emit('cartUpdated');
    },

    setForm() {
      const products = this.cart.products ? this.cart.products.flatMap(element =>
          this.allProducts.filter(product => product.id === element.id)
      ) : [];

      this.cartData = {
        cartName: this.cart.cartName,
        products,
      };
    }
  },

  computed: mapGetters(['allProducts']),

  props: ['cart'],

  created() {
    this.setForm();
  }
}
</script>

<style scoped>

</style>