<style scoped>
.tac{
  width: 180px;
  position: absolute;
  left: 0;
  
}
.el-submenu .el-menu-item{
  min-width: inherit
}
.navleft{
  width: 150px;
  position: absolute;
  left: 0;
  top: 61px;
}
.el-submenu .el-menu-item{
  min-width: 150px
}
#isbody{
  padding-left: 200px;
  padding-top: 60px;
}
.navtop{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
.navleft{
  position: fixed;
  top: 61px;
  left: 0;
  z-index: 99;
}
</style>

<template>
  <div id="isbody">
    <navtop class="navtop"></navtop>
    <navleft class="navleft"></navleft>
    <router-view></router-view>
  </div>
</template>

<script>
import navtop from '@/components/navtop'
import navleft from '@/components/navleft'
export default {
  components:{navleft,navtop}
}
</script>

<style>

</style>
