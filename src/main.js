import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue from 'vue'
import vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import './plugins/vuesax.js'
vue.use(vuesax, {});


createApp(App).use(router).mount('#app')
