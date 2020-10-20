<template>
  <div id="app">
    <div class="container">
      <h2 class="text-center">Cloud Shopping Carts</h2><br>
      <ul class="nav nav-tabs" id="tab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="carts-tab" data-toggle="tab" href="#carts" role="tab" aria-controls="carts" aria-selected="true">Carts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="products-tab" data-toggle="tab" href="#products" role="tab" aria-controls="products" aria-selected="false">Products</a>
        </li>
      </ul>
      <div class="tab-content border border-solid border-top-0" id="tabContent">
        <div class="tab-pane fade show active" id="carts" role="tabpanel" aria-labelledby="home-tab">
          <Carts></Carts>
        </div>
        <div class="tab-pane fade" id="products" role="tabpanel" aria-labelledby="profile-tab">
          <Products></Products>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from './components/Products.vue'
import Carts from './components/Carts.vue'

export default {
  name: 'App',

  data() {
    return {
      showProducts: false
    };
  },

  components: {
    Products,
    Carts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
