<script setup>
import { ref } from 'vue'
import Content from './Content/index.vue'
import LeftMenu from './LeftMenu/index.vue'
import Home from './Home/index.vue'

const activeIndex = ref(-1)
function showBigPannelActiveIndex(index) {
  activeIndex.value = index
  // console.log(index)
}
</script>

<template>
  <div class="h1400px w-full bg-#EEF1F8">
    <div class="ml5% mr5% w-90% flex">
      <div class="fixed bottom-0 left-5% top-90px w13.5%">
        <LeftMenu @show-big-pannel-active-index="showBigPannelActiveIndex" />
      </div>
      <div class="ml16% mt10px w-full">
        <Content v-show="activeIndex === -1" />
        <Home v-show="activeIndex === 0" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
