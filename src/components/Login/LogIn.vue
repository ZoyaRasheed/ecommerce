<template>
  <div>
    <h1 style="text-align: center">Login</h1>
    <div class="container">
      <form @submit="login" name="myForm" method="post">
        <div class="formDesign" id="email">
          <label for="">Email:</label>
          <input placeholder="EMAIL" v-model="email" type="email" />
        </div>
        <div class="formDesign" id="password">
          <label for="">Password:</label>
          <input placeholder="PASSWORD" v-model="password" type="password" />
        </div>
        <div class="formdesign submit">
          <button class="button" type="submit" style="margin-top: 2rem; margin-bottom: 10px">
            Login
          </button>
        </div>
        <span style="margin-right: 16px">Don't have an accout ?</span><button style="background-color: #5f776e"
          class="button">
          <router-link to="/signup" style="text-decoration: none; color: aliceblue">Sign Up</router-link>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      axios
        .post("api/v1/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          const token = response.data.token; 
          const expirationDate = new Date();
           expirationDate.setDate(expirationDate.getDate() + 7);
           document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/;`;
          this.token = token;
          let result = response.data;
          if (result.success) {
            this.$toast.success(
              `${response.data.user["name"]} , You're successfully Logged In`
            );
            this.$router.push('/')
          }
        })
        .catch((error) => {
          this.$toast.error(error);
        });
    },
  },
};
</script>
