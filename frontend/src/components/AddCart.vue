<template>
  <div class="collapse" id="addCartCollapse">
    <div class="card card-body text-left">
      <form @submit.prevent>
        <div class="form-group">
          <label for="cartName">Cart name</label>
          <input type="text" v-model="cartData.cartName" class="form-control" id="cartName" placeholder="Cart name...">
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
  name: "AddCart",

  data() {
    return {
      cartData: {
        cartName: '',
      }
    };
  },

  methods: {
      ...mapActions(['addCart']),

    processForm() {
      this.addCart(this.cartData);

      this.clearForm();
    },

    clearForm() {
      this.cartData = {
        cartName: ''
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