<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>minMall欢迎您！</p>
          <p v-if="!userName">
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
          <p v-else>
            <a>{{userName}}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="">
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword"/>
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        keyword: '',

      }
    },
    methods: {
      goSearch() {
        //1.字符串方式传递参数
        //this.$router.push('/search/'+this.keyword+'?k='+this.keyword.toUpperCase());
        //  2.模板字符串方式传参
        //this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`);
        // 3对象方式传参  需要配置路由name属性
        let location = {name: 'search', params: {keyword: this.keyword || undefined}};
        if (this.$route.query) {
          location.query = this.$route.query
        }
        console.log(location);
        this.$router.push(location)
//编程式导航进行路由跳转的时候 反复点击会有警告：通过给push方法传递相应成功,失败的函数可以捕获到当前的错误可以解决 因为push会返回一个promise
        //question 1对象传参的时候对象的写法 path是否可以结核params参数一起使用：对象的写法可以是name,path的形式,path这种写法不能与params参数一起使用
        // this.$router.push({
        //   path: 'search', params: {
        //     keyword: this.keyword
        //   },
        //   query: {k: this.keyword.toUpperCase()}
        // })
        //question 2如何指定params参数可传可不传:
        //路由指定要求传递params参数 但是没有传递params url会有问题
        //可以再配置路由时 在占位的后面加上一个问号
        // this.$router.push({name:'search',query:{k:this.keyword.toUpperCase()}})
        //question3 params参数可传可不传 如果传空 如何解决
        //使用 undefined 解决
        //this.$router.push({name: 'search', params: {keyword: '' || undefined}, query: {k: this.keyword.toUpperCase()}})
        //question 4 可不可以传递props数据
        //有三种写法

      },
      async logout() {
        try {
          //发请求退出登录
          //清楚项目中的数据  userinfo  token
          await this.$store.dispatch('userLogout');
          this.$router.push('/home')
        } catch (e) {

        }

      }
    },
    mounted() {
      //通过$bus
      this.$bus.$on('clear', () => {
        this.keyword = ''
      })
    },
    computed: {
      userName() {
        return this.$store.state.user.userInfo.name
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    & > .top {
      background-color: #eaeaea;
      height: 30px;
      line-height: 30px;

      .container {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;

        .loginList {
          float: left;

          p {
            float: left;
            margin-right: 10px;

            .register {
              border-left: 1px solid #b3aeae;
              padding: 0 5px;
              margin-left: 5px;
            }
          }
        }

        .typeList {
          float: right;

          a {
            padding: 0 10px;

            & + a {
              border-left: 1px solid #b3aeae;
            }
          }
        }
      }
    }

    & > .bottom {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .logoArea {
        float: left;

        .logo {
          img {
            width: 175px;
            margin: 25px 45px;
          }
        }
      }

      .searchArea {
        float: right;
        margin-top: 35px;

        .searchForm {
          overflow: hidden;

          input {
            box-sizing: border-box;
            width: 490px;
            height: 32px;
            padding: 0px 4px;
            border: 2px solid #ea4a36;
            float: left;

            &:focus {
              outline: none;
            }
          }

          button {
            height: 32px;
            width: 68px;
            background-color: #ea4a36;
            border: none;
            color: #fff;
            float: left;
            cursor: pointer;

            &:focus {
              outline: none;
            }
          }
        }
      }
    }
  }
</style>