<script setup>
import { useScroll } from '@vueuse/core'

const { x, y, isScrolling, arrivedState, directions } = useScroll(window)
</script>

<template>
  <div class="div mt300px">
    <p>x:{{ x }}</p>
    <p>y:{{ y }}</p>
    <p>是否滚动：{{ isScrolling }}</p>
    <p>到达状态：{{ arrivedState }}</p>
    <p>滚动方向：{{ directions }}</p>
    <p :class="{ show: y > 78 }">
      我是Cassie
    </p>
  </div>
  <div class="w" />
</template>

<style scoped>
.show {
  font-size: 30px;
  color: aqua;
}

.div {
  height: 300px;
  width: 1200px;
  background-color: pink;
  position: fixed;
  left: 0;
  top: 0;
}

.w {
  width: 1200px;
  height: 3000px;
  background-color: palegoldenrod;
}
</style>
