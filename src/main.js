import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from "@/views/home/typeNav/TypeNav";
Vue.component(TypeNav.name,TypeNav)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
