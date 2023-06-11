<template>
 
      <div class="navbar-container">
        <h1 class="navbar-title">Ecommerce</h1>
        <ul class="navbar-links">
          <li v-if="token">
            <button @click="logout">Logout</button>
          </li>
          <li v-else>
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "NavBar",
    data() {
      return {
        token: null,
      };
    },
     created() {
      this.token =  this.getTokenFromCookie();
    },
    methods: {
      getTokenFromCookie() {
        const cookies = document.cookie.split(';');
        const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
  
        if (tokenCookie) {
          const [, token] = tokenCookie.split('=');
          return token;
        }
  
        return null;
      },
      logout(e) {
        e.preventDefault();
        axios
          .get("api/v1/auth/logout", {
            email: "",
            password: "",
          })
          .then((response) => {
            this.$toast.success(`${response.data.message}`);
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      
            this.token = null;
            this.$router.push("/login");
          })
          .catch((err) => {
            this.$toast.error(err);
          });
      },
    },
  };
  </script>
  <style>
  li{
    list-style-type: none;
  }
</style>
  
