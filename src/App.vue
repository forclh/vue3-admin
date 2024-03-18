<template>
  <div class="box">
    <h1>我是App</h1>
  </div>
</template>

<script setup lang="ts">
const str = 'Aiden'

const fun = () => {
  console.log('试试')
}
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background: black;
  h1 {
    color: white;
  }
}
</style>
