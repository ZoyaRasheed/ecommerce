import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp/SignUp.vue'
import LogIn from '../components/Login/LogIn.vue'

const routes = [
  {
    path : '/signup',
    name : SignUp,
    component : SignUp

  },
  {
    path: '/login',
    name : LogIn ,
    component : LogIn
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
