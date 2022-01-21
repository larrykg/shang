import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from "@/components/typeNav/TypeNav";
import Carousel from "@/components/carousel/Carousel";
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
//引入mockServe.js
import '@/mock/mockServe';
import 'swiper/css/swiper.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
