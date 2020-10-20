<template>
  <div class="container-fluid pb-2">
    <div class="row">
      <div class="col-6 text-left">
        <h2 class="pt-3">Products</h2>
        <p>Here you can manage products</p>
      </div>

      <div class="col-6 text-right pt-3">
        <button v-if="!edit" class="btn btn-success" data-toggle="collapse" data-target="#addProductCollapse" aria-expanded="false"
                aria-controls="addProductCollapse">
          Add product
        </button>
        <button v-else class="btn btn-primary" @click="edit=false">
          Back
        </button>
      </div>
    </div>

    <EditProduct
        v-if="edit"
        v-bind:product="editing"
        v-on:productUpdated="edit = false"
    ></EditProduct>

    <div v-else>
      <AddProduct></AddProduct>
      <hr>
      <div class="row font-weight-bold">
        <div class="col-3">Name:</div>
        <div class="col-3">Price:</div>
        <div class="col-3">Tax percent:</div>
        <div class="col-3">Action:</div>
      </div>
      <div class="row">
        <div class="col-12 pb-3" v-for="(product, key) in allProducts" :key="key">
          <hr>
          <div class="row">
            <div class="col-3">{{ product.productName }}</div>
            <div class="col-3">{{ product.price }}</div>
            <div class="col-3">{{ product.taxPercent }}</div>
            <div class="col-3">
              <button class="btn btn-danger mr-1" @click="deleteProduct(product.id)">Del</button>
              <button class="btn btn-primary" @click="edit = true; editing = product">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

export default {
  name: "Products.vue",

  data() {
    return {
      edit: false,
      editing: {}
    };
  },

  methods: {
    ...mapActions(['fetchProducts', 'deleteProduct']),
  },

  components: {AddProduct, EditProduct},

  computed: mapGetters(['allProducts']),

  created() {
    this.fetchProducts();
  }
};

</script>

<style scoped>

</style>