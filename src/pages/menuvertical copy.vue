<template>
  <div class="app">
    
    <!-- 
              :default-active 一进页面默认显示的页面
              unique-opened 保持一个子菜单的打开
              router 采用路由模式 菜单上的index就是点击跳转的页面
              text-color 菜单文字的颜色
              active-text-color 菜单激活后文字的颜色
             -->
             <!-- :default-active="$route.path" -->
    <el-menu
    mode="horizontal"
      :default-active="defaultactive"
      class="el-menu-vertical-demo"
      unique-opened 
      router
      background-color="#2a3f54"
      text-color="#fff"
      active-text-color="orangered"
      @select="handleSelect"
    >
      <template v-for="item in menuData">
        <el-menu-item :index="item.path" :key="item.path" v-if="item.children == undefined">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item> 
        <el-submenu :index="item.path" :key="item.path" v-if="item.children != undefined">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <template v-for="item2 in item.children">
            <el-menu-item :index="item2.path" :key="item2.path" v-if="item2.children == undefined" >
              {{ item2.title }}
            </el-menu-item>
            <el-submenu :index="item2.path" :key="item2.path" v-if="item2.children != undefined">
              <template slot="title">
                <span slot="title">{{ item2.title }}</span>
              </template>
              <template v-for="item3 in item2.children">
                <el-menu-item :index="item3.path" :key="item3.path">
                {{ item3.title }}
              </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-submenu>
        <router-view></router-view>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      defaultactive:"",
      menuData: [
        {
          path: "/",
          icon: "el-icon-menu",
          title: "导航",
          id: 1
          // children:[
          //   {
          //     path: '/',
          //     title: '选项1',
          //   }
          // ]
        },
        {
          path: "/one",
          icon: "el-icon-menu",
          title: "导航二",
          id: 2,
          children: [
            {
              path: "/login",
              title: "导航二选项1",
              id: 2 - 1
            },
            {
              path: "/two",
              title: "导航二选项2",
              id: 2 - 2
            }
          ]
        },
        {
          path: "/two1",
          icon: "el-icon-menu",
          title: "导航三",
          id: 3,
          children: [
            {
              path: "/two1",
              title: "导航三选项1",
              id: 3 - 1
            },
            {
              path: "/two2",
              title: "导航三选项2",
              id: 3 - 2
            },
            {
              path: "/two31",
              title: "导航三选项3",
              id: 3 - 3,
              children: [
                {
                  path: "/two31",
                  title: "导航三选项111",
                  id: 3 - 3 - 1
                },
                {
                  path: "/two32",
                  title: "导航三选项222",
                  id: 3 - 3 - 2
                }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {},
  mounted(){
    this.defaultactive = '/login'
  },

  methods: {
    handleSelect(row){
      console.log(row)
      console.log(this.defaultactive)
    }
  }
};
</script>
