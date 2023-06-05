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
          <button
            class="button"
            type="submit"
            style="margin-top: 2rem; margin-bottom: 10px"
          >
            Login
          </button>
        </div>
        <span style="margin-right: 16px">Do you want to logout ?</span
        ><button
          style="background-color: #5f776e"
          class="button"
          v-on:click="logout"
        >
          Logout
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
          // console.log(response.data);
          this.$toast.success(`${response.data.user['name']} , You're successfully Logged In`)
        })
        .catch((error) => {
          this.$toast.error(error);
        });
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
        })
        .catch((err) => {
          this.$toast.error(err);
        });
    },
  },
};
</script>

