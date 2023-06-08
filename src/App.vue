<template>
  <nav>
    <!-- <router-link to="/signup">Go for Creating Account</router-link><br><br> -->
    <!-- <router-link to = "/login">Login</router-link><br><br>
    <router-link to ="/collection/create">Click To Create Collection</router-link> -->
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
