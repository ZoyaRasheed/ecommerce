<template>
  <div>
    <NavBar @select-product="productSelection" @clear-selection="clearProducts" :input="input"/>
    <ProductCards
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import axios from "axios";
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
      products: [],
      input :"",  
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    productSelection(product){
      this.products = [product];
    },
    clearProducts(){
        this.products = [];
        this.getProducts();
    },
    getProducts(){
      if (this.input === '') {
      axios.get('/product/').then((response) =>{
        this.products = response.data.product.map((p) =>({
          id : p._id,
          name :p.name ,
          description : p.description,
          price : p.price,
          image : p.photos[0].sucure_url,
        }))
      }).catch((error)=>{
        this.$toast.error(error.response.data.message)
      })
    }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>