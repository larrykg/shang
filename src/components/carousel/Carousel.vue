<template>
  <div class="swiper-container" id="floor1Swiper" ref="floorswiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img,index) in list" :key="img.id">
        <img :src="img.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: "Carousel",
    props:{
      list:{}
    },
    watch:{
      list:{
        //立即监听 无论数据是否有变化
        //watch监听不到list：因为数据时父组件传递过来 从未发生过变化
        immediate:true,
        handler(){
          this.$nextTick(()=>{
            const mySwiper = new Swiper(this.$refs.floorswiper, {
              loop: true, // 循环模式选项
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
                pagination: true,
                clickable: true
              },

              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

            })
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>