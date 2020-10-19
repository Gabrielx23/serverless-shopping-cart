<template>
  <div class="collapse" id="addProductCollapse">
    <div class="card card-body text-left">
      <form @submit.prevent>
        <div class="form-group">
          <label for="productName">Product name</label>
          <input type="text" v-model="productData.productName" class="form-control" id="productName" placeholder="Product name...">
        </div>
        <div class="form-group">
          <label for="taxPercent">Tax percent</label>
          <input type="number" v-model="productData.taxPercent" class="form-control" id="taxPercent" placeholder="Tax percent...">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" v-model="productData.price" class="form-control" id="price" placeholder="Price...">
        </div>
        <div class="form-group text-right">
          <button type="submit" class="btn btn-success" @click="processForm">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AddProduct",

  data() {
    return {
      productData: {
        productName: '',
        taxPercent: '',
        price: ''
      }
    };
  },

  methods: {
      ...mapActions(['addProduct']),

    processForm() {
      this.addProduct(this.productData);

      this.clearForm();
    },

    clearForm() {
      this.productData = {
        productName: '',
        taxPercent: 23,
        price: 0
      };
    }
  },

  created() {
    this.clearForm();
  }
}
</script>

<style scoped>

</style>