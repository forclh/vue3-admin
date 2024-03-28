<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prifix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
// 接收父组件的props
defineProps({
  // xlink:href属性前缀
  prifix: {
    type: String,
    default: '#icon-',
  },
  // 接收父组件传递的图标名称
  name: {
    type: String,
  },
  // 接收父组件传递的颜色
  color: {
    type: String,
    default: '',
  },
  // 接收父组件传递的图标宽度
  width: {
    type: String,
    default: '16px',
  },
  // 接收父组件传递的图标高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
