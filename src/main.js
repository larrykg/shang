import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from "@/components/typeNav/TypeNav";
Vue.component(TypeNav.name,TypeNav);
//引入mockServe.js
import '@/mock/mockServe'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
