
<template>
  <div class="product-container">
    <div class="product-detail">
      <img src="../../assets/product.png" alt="" />
      <div class="shop-button">
        <button @click="buyClick(token)">Buy</button>
        <button @click="addClick">Add</button>
      </div>
    </div>
  </div>
</template>
<script>
import {getTokenFromCookie} from "../../Helpers/HelperFunction"
export default {
  name: "ProductCards",
  data() {
    return {
      token : null,
    };
  },
  created() {
    this.token = getTokenFromCookie();
  },
  methods: {
    buyClick(token) {
      if (!token) {
        this.$router.push("/login");
      } else {
        this.$router.push("/details");
      }
    },
  },
};
</script>
<style scoped>
.product-container {
  margin: 2rem 0.5rem 0 0.5rem;
  display: inline-block;
}
.product-detail {
  width: 220px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border: 1px solid #487279bd;
  border-radius: 6px;
}
.products-detail img {
  height: 30px;
  width: 150px;
  border: 1px solid transparent;
  border-radius: 6px;
}
button {
  padding: 10px 16px 10px 16px;
  margin: 0.5rem 0.2rem 0.3rem 0.2rem;
  border-radius: 4px;
  background: #487279bd;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
}
</style>