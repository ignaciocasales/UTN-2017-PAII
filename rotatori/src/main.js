import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import storageService from './services/storageService'
import router from './utils/router'

Vue.use(VueRouter)
Vue.prototype.$storageService = storageService;

new Vue({
    el: '#app',
    render: h => h(App)
})
