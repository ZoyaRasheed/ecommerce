import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/Home/HomePage.vue'
import SignUp from "../components/SignUp/SignUp.vue";
import LogIn from "../components/Login/LogIn.vue";
import CreateCollection from "@/components/CollectionSys/CreateCollection.vue";



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
    path: "/collection/create",
    name: CreateCollection,
    component: CreateCollection,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
