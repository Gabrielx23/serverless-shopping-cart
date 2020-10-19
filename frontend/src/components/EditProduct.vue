<template>
    <div class="card card-body text-left">
      <h3>Editing:</h3>
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
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "EditProduct",

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
    ...mapActions(['updateProduct']),

    processForm() {
      this.updateProduct({
        id: this.product.id,
        data: this.productData
      });

      this.$emit('productUpdated');
    },

    setForm() {
      this.productData = {
        productName: this.product.productName,
        taxPercent: this.product.taxPercent,
        price: this.product.price
      };
    }
  },

  props: ['product'],

  created() {
    this.setForm();
  }
}
</script>

<style scoped>

</style>