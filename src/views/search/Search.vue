<template>
  <div>
    这里是Search
    <p>params---{{$route.params.keyword}}</p>
    <p>query---{{$route.query.k}}</p>
  </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style scoped>

</style>