<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">左侧菜单</div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">顶部导航</div>
    <!-- 内容展示区域 -->
    <class class="layout_main">
      内容展示区域
      <p style="height: 10000px; background: red">段落</p>
    </class>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
  }

  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabber-height;
    background: cyan;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabber-height);
    background: yellowgreen;
    left: $base-menu-width;
    top: $base-tabber-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>
