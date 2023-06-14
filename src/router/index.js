import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/Home/HomePage.vue'
import SignUp from "../components/SignUp/SignUp.vue";
import LogIn from "../components/Login/LogIn.vue";
import ProductDetails from '../components/Products/ProductDetails.vue'



const routes = [
  {
    path : "/",
    name : HomePage,
    component : HomePage,

  },
  {
    path: "/signup",
    name: SignUp,
    component: SignUp,
  },
  {
    path: "/login",
    name: LogIn,
    component: LogIn,
  },
  {
    path: "/details",
    name: ProductDetails,
    component: ProductDetails,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
