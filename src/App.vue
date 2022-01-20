<template>
  <div>
    <Header/>
    <!--    路由组件出口-->
    <router-view></router-view>
    <!--    in home/search show footer-->
    <Footer v-show="$route.meta.show"/>
  </div>

</template>

<script>
  import Header from './components/header/Header'
  import Footer from "./components/footer/Footer";

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    mounted() {
      //通知vuex发请求，获取数据 并存储于仓库中
      this.$store.dispatch('categoryList');
    }
  }
</script>

<style>

</style>
