<template>
  <div>
    <strong>products: </strong> {{products.length}} <br>
    <strong>price: </strong> {{price}}$ <br>
    <strong>price with tax: </strong> {{priceWithTax}}$
  </div>
</template>

<script>
export default {
  name: "CartInfoComponent",

  data() {
    return {
      products: 0,
      price: 0,
      priceWithTax: 0,
    };
  },

  methods: {
    prepareInfo() {
      const allProductsIds = this.allProducts.map(product => product.id);

      const cartProducts = this.cart.products
          .filter(productId => allProductsIds.includes(productId))
          .map(productId => this.allProducts.find(product => product.id === productId));

      this.products = cartProducts;
      this.price = cartProducts.reduce((price, product) => parseFloat(price) + parseFloat(product.price), 0.0);
      this.priceWithTax = cartProducts.reduce((price, product) =>
          (parseFloat(price) + (product.price * (1 + (product.taxPercent / 100)))).toFixed(2), 0.0);
    }
  },

  mounted() {
    this.prepareInfo();
  },

  props: ['cart', 'allProducts'],
}
</script>

<style scoped>

</style>