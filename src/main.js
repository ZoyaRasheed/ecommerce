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


axios.defaults.baseURL = "https://e-commerce-production-76e7.up.railway.app/"
