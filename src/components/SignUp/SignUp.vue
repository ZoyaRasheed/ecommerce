<template>
  <div>
    <!-- <img src="../../assets/logo.png" alt=""> -->
    <h1 style="text-align: center">Create Account</h1>
    <div class="container">
      <form @submit="signup" name="myForm" method="post">
        <div class="formDesign" id="name">
          <label for="">Name:</label>
          <input placeholder="NAME" v-model="name" type="text" />
        </div>
        <div class="formDesign" id="email">
          <label for="">Email:</label>
          <input placeholder="EMAIL" v-model="email" type="email" />
        </div>
        <div class="formDesign" id="password">
          <label for="">Password:</label>
          <input placeholder="PASSWORD" v-model="password" type="password" />
        </div>
        <div class="formDesign" id="password">
          <label for="">Confirm Password:</label>
          <input placeholder="CONFIRM PASSWORD" v-model="cpassword" type="password" />
        </div>
        <div class="formDesign" id="phNumber">
          <label for="">Phone-Number :</label>
          <input placeholder="PHONE NUMBER" v-model="phoneNumber" type="tel" />
        </div>
        <div class="formdesign submit">
          <button class="button" type="submit">Sign Up</button>
        </div>
        <p  class="admin" style="margin-top: 0.8em;">Do you want to become a seller ?</p>
        <p class="login">
          <span>Already have an Account ?</span>
          <router-link to="/login"><button type="button">Login</button></router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { getTokenFromCookie } from '../../utils/getBrowserCookies';
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      phoneNumber: "",
      // token : null ,
    };
  },
  // created() {
  //   this.token = getTokenFromCookie();
  // },
  methods: {
    async signup(e) {
      e.preventDefault();
      if (!this.name || !this.email || !this.password || !this.cpassword || !this.phoneNumber) {
        this.$toast.error("Please enter all fields.");
        return;
      }
      if (this.password !== this.cpassword) {
        this.$toast.error("Passwords do not match");
        return;
      }

      try {
        const response = await axios.post("/auth/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
          role : "admin",
        });
        this.$toast.success(
          `${response.data.user.name}, Thanks for Signing Up!`
        );
          this.$router.push('/login')  
      } catch (error) {
        this.$toast.error(error.response.data.message);
      }
    },
  },
};
</script>
<style>
h1 {
  color: rgb(155, 148, 139);
  margin-bottom: 5px;
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background-color: hsl(54, 26%, 93%);
  margin: 10px 10px;
  padding: 10px 10px;
  border-radius: 12px;
  width: 400px;
}

.formDesign {
  margin: 10px 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.formDesign input {
  width: 350px;
  padding: 10px 10px;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 10px;
}

.formDesign label {
  color: rgb(131, 116, 93);
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: large;
  display: flex;
  justify-self: flex-start;
  margin: 10px;
  letter-spacing: 1px;
  cursor: pointer;
}

.formDesign i {
  color: red;
  margin-top: 6px;
}

.submit {
  display: flex;
  justify-content: center;
}

.button {
  padding: 5px;
  margin-top: 1rem;
  width: 20%;
  border-radius: 4px;
  background: #41403c;
  color: white !important;
  border: none;
  font-weight: bold;
  font-size: 1rem;
}

.button:hover {
  opacity: 0.5;

}
.admin{
  cursor: pointer;
  text-decoration: underline;
}
.login{
  padding: 1em;
}
.login span {
  font-size: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
}
.login button {
  background-color: #5f776e;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
  width: 20%;
  border: 2px solid #5f776e;
  border-radius: 5px;
}

.login button {
  text-decoration: none;
  color: whitesmoke;
}</style>
