<template>
  <div>
    <NavBar />
    <ProductCards
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
// import axios from 'axios'
import NavBar from "../NavBar/NavBar.vue";
import ProductCards from "../Products/ProductCards.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    ProductCards,
  },

  data() {
    return {
      products: [
        { id: 1, image: "../../assets/product.png" },
        { id: 2, image: "../../assets/product.png" },
        { id: 3, image: "../../assets/product.png" },
        { id: 4, image: "../../assets/product.png" },
        { id: 5, image: "../../assets/product.png" },
        { id: 6, image: "../../assets/product.png" },
        { id: 7, image: "../../assets/product.png" },
        { id: 8, image: "../../assets/product.png" },
      ],
    };
  },

  methods: {},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>