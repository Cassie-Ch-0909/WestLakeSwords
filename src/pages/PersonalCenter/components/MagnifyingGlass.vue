<script lang="ts" setup name="GoodsImage">
import { computed, defineProps, ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

/*
    封装一个组件用来存放大会议程的议程信息 到时候 订阅 点赞 收藏 都可以复用
*/
defineProps({
  img: String,
})
const target = ref(null)
// isOutside是否进入指定区域 进入为false 否则为true
// elementX 鼠标X位置
// elementY 鼠标Y位置
const { isOutside, elementX, elementY } = useMouseInElement(target) // useMouseInElement(指定的区域)鼠标进入的位置

const position = computed(() => {
  let x = elementX.value - 100
  let y = elementY.value - 100
  x = x < 0 ? 0 : x
  y = y < 0 ? 0 : y
  x = x > 200 ? 200 : x
  y = y > 27 ? 27 : y
  return {
    x,
    y,
  }
})
</script>

<template>
  <!-- {{isOutside}}
   X: {{elementX}}
   Y: {{elementY}} -->
  <div class="goods-image">
    <!-- 显示在右侧的放大之后的区域 -->
    <div
      v-show="!isOutside"
      class="large"
      :style="[{ backgroundImage: `url(${img})`, backgroundPosition: `-${position.x * 2}px -${position.y * 2}px` }]"
    />

    <div ref="target" class="middle">
      <img :src="img" alt="">
      <!-- 移动遮罩 -->
      <div v-show="!isOutside " ref="target" class="layer" :style="{ left: `${position.x}px`, top: `${position.y}px` }" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  // background-color: red;
  width: 400px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 放大一倍
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    // height: 400px;
    height: 200px;
    // background: #f5f5f5;
    position: relative;
    cursor: move;
    img {
      width: 400px;
      // height: 400px;
    }
    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      // 可以移动
      position: absolute;
    }
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid red;
      }
    }
  }
}
</style>
