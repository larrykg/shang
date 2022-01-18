<template>
  <div>
    <Header/>
    <!--    路由组件出口-->
    <router-view></router-view>
    <!--    in home/search show footer-->
    <Footer v-show="$route.path=='/home'||$route.path=='/search'"/>
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
    }
  }
</script>

<style>

</style>
