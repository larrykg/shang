<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex">
        <h2 class="all" @mouseenter="showList">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="typeNavShow">
            <div class="all-sort-list2" @click="goSearch">
              <div class="item" :class="{cur:currentIndex==index}" v-for="(item1,index) in categoryList"
                   :key="item1.categoryId">
                <h3 @mouseenter="changeIndex(index)">
                  <a :data-categoryName="item1.categoryName"
                     :data-category1id="item1.categoryId">{{item1.categoryName}}</a>

                </h3>
                <!--              2 3级联-->
                <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                  <div class="subitem" v-for="(item2,index) in item1.categoryChild" :key="item2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a :data-categoryName="item2.categoryName" :data-category2id="item2.categoryId">{{item2.categoryName}}</a>

                      </dt>
                      <dd>
                        <em v-for="(item3 ,index) in item2.categoryChild" :key="item3.categoryId">
                          <a :data-categoryName="item3.categoryName" :data-category3id="item3.categoryId">{{item3.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  //引入防抖节流函数
  import throttle from 'lodash/throttle'


  export default {
    name: "typeNav",
    data() {
      return {
        //存储处于哪一个以及分类
        currentIndex: -1,
        typeNavShow: true
      };
    },
    methods: {
      //修改currentIndex属性
      changeIndex: throttle(function (index) {
        this.currentIndex = index;
      }, 50),
      // changeIndex(index) {
      //   this.currentIndex = index;
      // },
      leaveIndex() {
        this.currentIndex = -1;

        if (this.$route.path != "/home") {
          this.typeNavShow = false;
        }

      },
      showList() {
        //鼠标移入时  商品移入show
        this.typeNavShow = true
      },
      goSearch(event) {
        let element = event.target;
        //节点的dataset 可以获取自定义属性
        let {categoryname, category1id, category2id, category3id} = element.dataset;
        if (categoryname) {
          //整理路由跳转的参数
          let location = {name: 'search'};
          let query = {categoryName: categoryname}
          if (category1id) {
            query.category1Id = category1id
          } else if (category2id) {
            query.category2Id = category2id
          } else {
            query.category3Id = category3id
          }
          location.query = query;
          if (this.$route.params) {
            location.params = this.$route.params
          }
          this.$router.push(location)
        }
      }
    },
    mounted() {
      if (this.$route.path != '/home') {
        this.typeNavShow = false
      }
    },
    computed: {
      ...mapState({
        categoryList: state => state.home.categoryList
      })
    }

  };
</script>

<style scoped lang="less">
  .type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;

      .all {
        width: 210px;
        height: 45px;
        background-color: #e1251b;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }

      .nav {
        a {
          height: 45px;
          margin: 0 22px;
          line-height: 45px;
          font-size: 16px;
          color: #333;
        }
      }

      .sort {
        position: absolute;
        left: 0;
        top: 45px;
        width: 210px;
        height: 461px;
        position: absolute;
        background: #fafafa;
        z-index: 999;

        .all-sort-list2 {
          .item {
            h3 {
              line-height: 30px;
              font-size: 14px;
              font-weight: 400;
              overflow: hidden;
              padding: 0 20px;
              margin: 0;

              a {
                color: #333;
              }

            }


            .item-list {
              display: none;
              position: absolute;
              width: 734px;
              min-height: 460px;
              background: #f7f7f7;
              left: 210px;
              border: 1px solid #ddd;
              top: 0;
              z-index: 9999 !important;

              .subitem {
                float: left;
                width: 650px;
                padding: 0 4px 0 8px;

                dl {
                  border-top: 1px solid #eee;
                  padding: 6px 0;
                  overflow: hidden;
                  zoom: 1;

                  &.fore {
                    border-top: 0;
                  }

                  dt {
                    float: left;
                    width: 54px;
                    line-height: 22px;
                    text-align: right;
                    padding: 3px 6px 0 0;
                    font-weight: 700;
                  }

                  dd {
                    float: left;
                    width: 415px;
                    padding: 3px 0 0;
                    overflow: hidden;

                    em {
                      float: left;
                      height: 14px;
                      line-height: 14px;
                      padding: 0 8px;
                      margin-top: 5px;
                      border-left: 1px solid #ccc;
                    }
                  }
                }
              }
            }

            /*&:hover {*/
            /*  .item-list {*/
            /*    display: block;*/
            /*  }*/
            /*}*/
          }

          .cur {
            background: #e4393c;
          }

          a {
            text-decoration: none;
          }
        }
      }

      //过度动画开始阶段
      //过度动画开始状态(进入)
      .sort-enter {
        height: 0;
      }

      //过度动画结束状态(进入)
      .sort-enter-to {
        height: 461px;
      }

      .sort-enter-active {
        transition: all .2s linear;
      }


    }
  }


</style>
