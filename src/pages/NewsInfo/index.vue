<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getNewsByNewsIdAPI } from '@/apis/media'

const newObj = ref({})

// TODO1: 调接口根据新闻id获取新闻详情
async function getNewsByNewsId(newsId) {
  const res = await getNewsByNewsIdAPI(newsId)
  newObj.value = res.data[0]
}

// TODO2: 获取路由参数 发请求获取当前页的新闻详情
const route = useRoute()
// 在组件挂载完成后通过 route.query.属性名 接收参数
onMounted(() => {
  getNewsByNewsId(route.query.id)
})
</script>

<template>
  <div class="ml23.5% mr23.5%" v-html="newObj.content" />
</template>

<style scoped>
p {
  text-align: center;
}
</style>
