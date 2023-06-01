import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'


axios.defaults.baseURL = "https://tlcbackend-production-22a0.up.railway.app/"

createApp(App).mount('#app')
