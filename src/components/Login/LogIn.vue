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
        <span style="margin-right: 16px">Don't have an accout ?</span><button type="button"
          style="background-color: #5f776e" class="button">
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
    async login(e) {
      e.preventDefault();
      if (!this.email || !this.password) {
        this.$toast.error("Please enter all fields.");
        return;
      }

      try {
        const response = await axios.post("api/v1/auth/login", {
          email: this.email,
          password: this.password,
        });

        const token = response.data.token;
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/;`;

        this.token = token;
        const user = response.data.user;
        if (response.data.success) {
          this.$toast.success(`${user.name}, You're successfully Logged In`);
          this.$router.push("/");
        }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
  },
};
</script>
