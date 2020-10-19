<template>
  <div class="container-fluid pb-2">
    <div class="row">
      <div class="col-6 text-left">
        <h2 class="pt-3">Carts</h2>
        <p>Here you can manage carts</p>
      </div>

      <div class="col-6 text-right pt-3">
        <button v-if="!edit" class="btn btn-success" data-toggle="collapse" data-target="#addCartCollapse" aria-expanded="false"
                aria-controls="addCartCollapse">
          Add cart
        </button>
        <button v-else class="btn btn-primary" @click="edit=false">
          Back
        </button>
      </div>
    </div>

    <EditCart
        v-if="edit"
        v-bind:cart="editing"
        v-on:cartUpdated="edit = false"
    ></EditCart>

    <div v-else>
      <AddCart></AddCart>
      <hr>
      <div class="row font-weight-bold">
        <div class="col-4">Name:</div>
        <div class="col-4">Products:</div>
        <div class="col-4">Action:</div>
      </div>
      <div class="row">
        <div class="col-12 pb-3" v-for="cart in allCarts" :key="cart.id">
          <hr>
          <div class="row">
            <div class="col-4">{{ cart.cartName }}</div>
            <div class="col-4">{{ cart.products ? cart.products.length : 0 }}</div>
            <div class="col-4">
              <button class="btn btn-danger mr-1" @click="deleteCart(cart.id)">Delete</button>
              <button class="btn btn-primary mr-1" @click="edit = true; editing = cart">Edit</button>
              <button class="btn btn-primary" data-toggle="collapse" data-target="#cartInfoCollapse" aria-expanded="false"
                      aria-controls="cartInfoCollapse">
                Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import AddCart from "./AddCart";
import EditCart from "./EditCart";

export default {
  name: "Carts.vue",

  data() {
    return {
      edit: false,
      editing: {}
    };
  },

  methods: {
    ...mapActions(['fetchCarts', 'deleteCart']),
  },

  components: {AddCart, EditCart},

  computed: mapGetters(['allCarts']),

  created() {
    this.fetchCarts();
  }
};

</script>

<style scoped>

</style>