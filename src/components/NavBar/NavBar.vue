<template>
  <div>
    <nav>
      <h1>E-<span>Commerce</span></h1>
      <input type="text"  class="search-bar" placeholder="Search products ..." v-model="input" v-on:input="search">
 
      <ul>
        <li v-if="token"><button @click="logout">Logout</button></li>
        <li v-else>
          <router-link to="/login"
            ><button type="button">Login</button></router-link
          >
        </li>
      </ul>
    </nav>
    <div class="dropdown" v-if="searchList.length > 0">
      <div class="dropdown-content">
        <ul>
          <li v-for="(product,index) in searchList" :key="product._id">
            <span>{{index+1}}</span>
            <span>{{ product.name }}</span>
            <img :src="product.photos[0].sucure_url" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import { getTokenFromCookie } from "../../utils/getBrowserCookies";
export default {
  name: "NavBar",
  props : ['product'],
  data() {
    return {
      token: null,
      input :"",
      products : [],
      searchList : [],
    };
  },
  created() {
    this.token = getTokenFromCookie();
  },
  methods: {
    logout(e) {
      e.preventDefault();
      axios
        .get("/auth/logout", {
          email: "",
          password: "",
        })
        .then((response) => {
          this.$toast.success(`${response.data.message}`);
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

          this.token = null;
          this.$router.push("/login");
        })
        .catch((err) => {
          this.$toast.error(err);
        });
    },
  async search() {
    if (this.input === '') {
      this.searchList = [];
      return;
    }
    const current= this.input;

    setTimeout(async () => {
      try {
        if (this.input !== current) {
          return;
        }
        const response = await axios.post('/product/search', {
          name: this.input
        });
        if (this.input !== current) {
          return;
        }
        this.searchList = response.data.products;
      } catch (error) {
        this.$toast.error(error.response.data.message);
      }
    }, 300);
},

  },
};
</script>
  <style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9e9e9e1f;
  padding: 14px;
  margin-top: -4rem;
}
nav span {
  color: rgb(84, 94, 90);
}
nav h1 {
  font-size: 28px;
  letter-spacing: 1px;
  cursor: pointer;
}
nav ul li {
  list-style-type: none;
  display: inline-block;
  padding: 10px 25px;
}
nav button {
  padding: 8px;
  margin-top: 0.6rem;
  border-radius: 4px;
  background: #41403c;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
}
.search-bar{
  background-color: white;
  padding: 12px;
  width: 30%;
  border: none;
  outline: none;
  border-radius: 8px;
}
.dropdown {
  position: relative;
  display: inline-block;
  top: -2rem;
  left: -2rem;
}

.dropdown-content {
  position: absolute;
  background-color: rgb(231, 229, 229);
  color: black;
  border-radius: 20px;
  min-width: 400px; 
  height: auto;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  left: -8rem;
}
.dropdown-content ul {
  list-style-type: none;
}
.dropdown-content li {
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 5px;
}
.dropdown-content li:last-child{
  border-bottom: 0;
}
.dropdown-content span {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.dropdown-content img {
  padding-top: 4px;
  width: 40px;
  height: 40px;
  border-radius: 30%;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
  
