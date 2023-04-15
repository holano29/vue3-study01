import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')

//bootstrap js
import 'bootstrap/dist/js/bootstrap.js'