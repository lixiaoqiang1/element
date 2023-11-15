<template>
  <div class="navMenu">
    <template v-for="navMenu in navMenus">
      <!-- 最后一级菜单 -->
      <el-menu-item
        v-if="!navMenu.children && navMenu.entity"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="navMenu.entity.title"
      >
        <i :class="navMenu.entity.icon"></i>
        <span slot="title">{{ navMenu.entity.alias }}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu
        v-if="navMenu.children && navMenu.entity"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="navMenu.entity.title"
      >
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span> {{ navMenu.entity.alias }}</span>
        </template>
        <!-- 递归 -->
        <NavMenu :navMenus="navMenu.children"></NavMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  title: "NavMenu",
  props: ["navMenus"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style></style>
