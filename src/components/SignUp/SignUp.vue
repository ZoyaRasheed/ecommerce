<template>
  <div>
    <!-- <img src="../../assets/logo.png" alt=""> -->
    <h1 style="text-align: center">Create Account</h1>
    <div class="container">
      <form @submit="signup" name="myForm" method="post">
        <div class="formDesign" id="name">
          <label for="">Name : </label
          ><input placeholder="NAME" v-model="name" type="text" />
        </div>
        <div class="formDesign" id="email">
          <label for="">Email : </label
          ><input placeholder="EMAIl" v-model="email" type="email" />
        </div>
        <div class="formDesign" id="password">
          <label for="">Password :</label>
          <input placeholder="PASSWORD" v-model="password"  type="password" />
        </div>
        <div class="formdesign submit">
          <button class="button" value="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: "SignUp",
    data(){
        return{
         name : ' ',
         email : ' ',
         password : ' ',
        }
    },
  methods :{
      signup(e){
     e.preventDefault();
//      let result = axios.post('http://localhost:5000/api/v1/auth/signup',{
//         name : this.name,
//         email : this.email,
//         password : this.password
//      });
//  console.log(result);
    }
  }
};
</script>
<style>
body {
  margin: 20px 30px;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
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
  padding: 10px 10px;
  margin-top: 1rem;
  width: 30%;
  border-radius: 4px;
  background: #41403c;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
}

.button:hover {
  opacity: 0.5;
}
</style>
