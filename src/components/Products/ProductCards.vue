<template>
  <div class="product-container">
    <div class="product-detail">
      <p class="product-name">{{product.name}}</p>
      <img :src="product.image" :alt="product.name" />
      <p class="product-price">{{ `Price: ${product.price}` }}</p>
      <p class="product-description">{{ `Description: ${product.description}` }}</p>
      <div class="shop-button">
        <button class="btn" @click="open">Buy</button>
      </div>
    </div>
    <div class="pop-Up" v-if="showPopup">
      <div class="modal">
        <div class="details">
          <img :src="product.image" :alt="product.name" style="width: 80px; height: 80px;" />
          <p>{{product.name}}</p>
          <p>{{`Price: ${product.price}` }}</p>
          <p>{{`Description: ${product.description}`}}</p>
          <div >
            <button class="btn" @click="buyClick(token)">Add to Cart</button>
            <button class="btn" @click="close">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTokenFromCookie } from '@/utils/getBrowserCookies.vue';
export default {
  props: ["product"],
  data() {
    return {
      token : null,
      showPopup: false,
    };
  },
  computed(){
    this.token = getTokenFromCookie();
  },
  methods: {
    open() {
      this.showPopup = true;
    },
    close() {
      this.showPopup = false;
    },
    buyClick(token) {
      if (!token) {
        this.$router.push("/login?redirect=/details");
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
  width: 275px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border: 1px solid #487279bd;
  border-radius: 6px;
}
.product-detail img {
  height: 250px;
  width: 250px;
  border: 1px solid transparent;
  border-radius: 6px;
}
.btn {
  padding: 10px 24px;
  margin: 0.9rem 0.2rem 0.3rem 0rem;
  border-radius: 4px;
  background: #487279bd;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}
.btn:hover {
  background: black;
  color: white;
}
.product-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.product-price {
  font-size: 16px;
  margin: 10px;
  font-weight: bold;
}
.product-description {
  font-size: 16px;
  margin-bottom: 5px;
}
.pop-Up {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: #fff;
  border-radius: 6px;
  padding: 16px;
}
.content {
  margin-bottom: 16px;
}
</style>