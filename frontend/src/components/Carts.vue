<template>
  <div class="container-fluid pb-2">
    <div class="row">
      <div class="col-6 text-left">
        <h2 class="pt-3">Carts</h2>
        <p>Here you can manage carts</p>
      </div>

      <div class="col-6 text-right pt-3">
        <button v-if="!edit" class="btn btn-success" data-toggle="collapse" data-target="#addCartCollapse"
                aria-expanded="false"
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
        v-on:cartUpdated="cartUpdated"
    ></EditCart>

    <div v-else>
      <AddCart></AddCart>
      <hr>
      <div class="row font-weight-bold">
        <div class="col-4">Name:</div>
        <div class="col-4">Action:</div>
        <div class="col-4">Info <button class="btn btn-primary" @click="info = !info">toggle</button></div>
      </div>
      <div class="row">
        <div class="col-12 pb-3" v-for="cart in allCarts" :key="cart.id">
          <hr>
          <div class="row">
            <div class="col-4">{{ cart.cartName }}</div>
            <div class="col-4">
              <button class="btn btn-danger mr-1" @click="deleteCart(cart.id)">Del</button>
              <button class="btn btn-primary mr-1" @click="edit = true; editing = cart; info = false;">Edit</button>
            </div>
            <div class="col-4">
              <CartInfoComponent
                  v-if="info"
                  v-bind:cart="cart"
                  v-bind:allProducts="allProducts"
              ></CartInfoComponent>
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
import CartInfoComponent from "./CartInfoComponent";

export default {
  name: "Carts.vue",

  data() {
    return {
      edit: false,
      editing: {},
      info: false
    };
  },

  methods: {
    ...mapActions(['fetchCarts', 'deleteCart']),

    cartUpdated() {
      this.edit = false;
      this.fetchCarts();
    },
  },

  components: {CartInfoComponent, AddCart, EditCart},

  computed: mapGetters(['allCarts', 'allProducts']),

  created() {
    this.fetchCarts();
  }
};

</script>

<style scoped>

</style>