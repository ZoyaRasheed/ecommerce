<template>
  <div>
    <nav>
      <h1>E-<span>Commerce</span></h1>
      <ul>
        <li v-if="token"><button @click="logout">Logout</button></li>
        <li v-else>
          <router-link to="/login"
            ><button type="button">Login</button></router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
  
  <script>
import axios from "axios";
import { getTokenFromCookie } from "../../Helpers/HelperFunction";
export default {
  name: "NavBar",
  data() {
    return {
      token: null,
    };
  },
  created() {
    this.token = getTokenFromCookie();
  },
  methods: {
    logout(e) {
      e.preventDefault();
      axios
        .get("api/v1/auth/logout", {
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
  margin-top: 1rem;
  border-radius: 4px;
  background: #41403c;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
}
</style>
  
