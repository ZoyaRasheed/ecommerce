<template>
  <div>
    <h1 style="text-align: center">Create for Admin</h1>
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
        <p class="login">
          <span>Already have an Account ?</span>
          <router-link to="/login"><button type="button">Login</button></router-link>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: "AdminPage",
  data() {
    return {};
  },
  methods: {


  },
};
</script>