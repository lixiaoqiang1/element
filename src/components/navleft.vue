<style scoped>
.tac{
  width: 200px;
}
</style>
<template>
    <div>
      <!-- 左侧导航开始 -->
      <el-row class="tac">
        <el-col>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  @select="handleSelect">
            <el-menu-item index="menuvertical"><span slot="title">导航</span></el-menu-item>
            <el-menu-item index="login"><span slot="title">login_cookie</span></el-menu-item>
            <el-menu-item index="index"><span slot="title">首页</span></el-menu-item>
            
            <el-menu-item index="ismork"><span slot="title">mork</span></el-menu-item>
            <el-menu-item index="isprops"><span slot="title">props父向子传值1</span></el-menu-item>
            
            <el-submenu index="0">
              <template slot="title"><span>柱状图</span></template>
              <el-menu-item-group>
                <el-menu-item index="daohang">导航</el-menu-item>
                <el-menu-item index="daohanga">echarts柱状图</el-menu-item>
                <el-menu-item index="debouce">debouce防抖</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title"><span>统计模块</span></template>
              <el-menu-item-group>
                <el-menu-item index="table1">table1</el-menu-item>
                <el-menu-item index="table2">table2</el-menu-item>
                <el-menu-item index="table3">table3</el-menu-item>
                <el-menu-item index="table4">table转pdf4</el-menu-item>
                <el-menu-item index="table41">table转pdf41</el-menu-item>
                <el-menu-item index="Pagination">分页1</el-menu-item>
                <el-menu-item index="Pagination2">分页2</el-menu-item>
                <el-menu-item index="Pagination3">分页3</el-menu-item>
                <el-menu-item index="addexcel">addexcel</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><span>文件上传</span></template>
              <el-menu-item-group>
                <el-menu-item index="upload1">文件上传</el-menu-item>
                <el-menu-item index="upload2">文件上传2</el-menu-item>
                <el-menu-item index="upload3">文件上传3</el-menu-item>
                <el-menu-item index="upload4">文件上传4</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><span>视频</span></template>
              <el-menu-item-group>
                <el-menu-item index="diancan">点餐_axios</el-menu-item>
                <el-menu-item index="anli1">anli</el-menu-item>
                <el-menu-item index="yingpin">音频</el-menu-item>
                <el-menu-item index="yingpin1">音频1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><span>vuex数据仓库</span></template>
              <el-menu-item-group>
                <el-menu-item index="vuex1">vuex1数字加减</el-menu-item>
                <el-menu-item index="vuex3">vuex3</el-menu-item>
                <el-menu-item index="vuex4">vuex4输出状态</el-menu-item>
                <el-menu-item index="countpage2">锚点跳转</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="chargeCard"><span slot="title">记账卡</span></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
      <!-- 左侧导航结束 -->
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push(key);
      },

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.el-submenu .el-menu-item{
  min-width: auto
}
</style>
