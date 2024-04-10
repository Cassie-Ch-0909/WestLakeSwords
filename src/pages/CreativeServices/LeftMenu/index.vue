<script setup>
import { defineEmits, ref } from 'vue'

// 使用defineEmits创建名称，接受一个数组
const emit = defineEmits(['showBigPannelActiveIndex'])

const list = ref([
  {
    title: '首页',
    icon: 'icon-shouye',
  },
  {
    title: '笔记管理',
    icon: 'icon-bijiguanli',
  },
  {
    title: '数据看板',
    icon: 'icon-shujukanban',
  },
  {
    title: '笔记灵感',
    icon: 'icon-linggan',
  },
  {
    title: '创作学院',
    icon: 'icon-chuangzuo',
  },
  {
    title: '创作百科',
    icon: 'icon-dytnshaomabaike',
  },
])

const showBigPannelActiveIndex = ref(999)
function changeShowBigPannelActiveIndex(index) {
  showBigPannelActiveIndex.value = index
  emit('showBigPannelActiveIndex', showBigPannelActiveIndex.value)
}
</script>

<template>
  <div class="bg-#fff">
    <!-- 创作服务平台和发布笔记 -->
    <div class="w-full flex flex-col items-center border-b-1px border-#E0E0E0 border-solid pb15px pt15px">
      <p class="mb10px font-size-22px font-bold">
        创作服务平台
      </p>
      <button class="h40px w85% rounded-5px bg-#00B4BC color-#fff" @click="changeShowBigPannelActiveIndex(-1)">
        发布笔记
      </button>
    </div>
    <!-- 6个分模块 -->
    <div class="mt20px h600px w-full flex flex-col items-center">
      <div
        v-for="(item, index) in list" :key="index" class="mb8px h40px w85% flex items-center rounded-5px hover:bg-[#00B4BC] hover:color-#fff" :class="showBigPannelActiveIndex === index ? 'bg-[#00B4BC] color-#fff' : ''"
        @click="changeShowBigPannelActiveIndex(index)"
      >
        <i class="iconfont pl10px" :class="item.icon" />
        <span class="pl10px">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
