<script setup lang="ts">
import LineCombination from './LineCombination.vue'
import useScrollToTop from '@/hooks/useScrollToTop'

const boxList = [
  { element: LineCombination },
]

useScrollToTop()
</script>

<template>
  <div class="container">
    <div v-for="(item, index) in boxList" :key="index" class="box">
      <component :is="item.element" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  box-sizing: border-box;
  width: 100%;
  height: auto !important;
  min-height: 100%;
  background-image: linear-gradient(135deg, #224141, #162a2a);
  padding: 6px 4px;
  overflow-y: auto;

  .box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #35a2fd44;
    border-radius: 10px;
    background-image: linear-gradient(to right, #04182c, #000c17, #04182c);
    color: #ffffff;
  }
}
</style>
