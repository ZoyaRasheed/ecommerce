import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import Toast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


const app = createApp(App);
app.use(router);
app.use(Toast, { position : 'top-right'});
app.mount('#app');


axios.defaults.baseURL = "https://tlcbackend-production-22a0.up.railway.app/"
