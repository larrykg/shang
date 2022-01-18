<template>
  <div class="home">
    <!--   三级联动已经全局引用-->
    <typeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
  import ListContainer from "@/views/home/listContainer/ListContainer";
  import Recommend from "@/views/home/recommend/Recommend";
  import Rank from "@/views/home/rank/Rank";
  import Like from "@/views/home/like/Like";
  import Floor from "@/views/home/floor/Floor";
  import Brand from "@/views/home/brand/Brand";

  export default {
    name: "Home",
    components: {
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    }
  }
</script>

<style scoped>

</style>