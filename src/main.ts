import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import 'swiper/css';
import "swiper/css/pagination";
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
