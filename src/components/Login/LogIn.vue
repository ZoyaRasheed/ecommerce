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
        <div class="forgotpwd">
          <p
            style="padding: 4px; color: rgb(0 115 150); cursor: pointer"
            @click="forgotPassword"
          >
            Forgot password ?
          </p>
        </div>
        <div class="formdesign submit">
          <button class="button" type="submit" style="margin-bottom: 10px">
            Login
          </button>
        </div>
        <span style="margin-right: 16px; font-size: 20px"
          >Don't have an account ?</span
        >
        <router-link
          to="/signup"
          style="text-decoration: none; color: aliceblue"
          ><button
            type="button"
            style="background-color: #5f776e"
            class="button"
          >
            Sign Up
          </button></router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getRoleFromCookies } from "../../utils/getRole";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      role: "admin",
    };
  },
  created() {
    this.role = getRoleFromCookies();
  },
  methods: {
    async login(e) {
      e.preventDefault();
      if (!this.email || !this.password) {
        this.$toast.error("Please enter all fields.");
        return;
      }

      try {
        const response = await axios.post("/auth/login", {
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
          const redirect = this.$route.query.redirect || "/";
          this.$router.push(redirect);

        }
      } catch (error) {
        this.$toast.error(error.response.data.message);
        return;
      }
      // if (this.role == "admin") {
      //   this.$router.push("/adminPage");
      // } else {
      //   this.$router.push("/");
      // }
    },
  },

  // async forgotPassword() {
  //   if (!this.email) {
  //     this.$toast.error("Please enter your email");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("api/v1/auth/password/forgot", {
  //       email: this.email,
  //     });
  //     this.$toast.success(response.data.message);
  //   } catch (error) {
  //     this.$toast.error(error.message);
  //   }
  // },
};
</script>
<style>
.forgotpwd p:hover {
  text-decoration: underline;
}
</style>
