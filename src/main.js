import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from "@/components/typeNav/TypeNav";
import Carousel from "@/components/carousel/Carousel";
import Pagination from '@/components/pagination/Pagination'
import {Button, MessageBox} from 'element-ui';

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
//ele UI注册
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//引入mockServe.js
import '@/mock/mockServe';
import 'swiper/css/swiper.css';
//统一引入API
import * as API from '@/api';

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
  },
  render: h => h(App)
}).$mount('#app')
