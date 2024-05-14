<script setup>
import { ref } from 'vue'

// const relatedRecommendationList = ref([
//   {
//     img: 'https://img2023.gcsis.cn/2023/5/f8fec48a39cb4d3ea6bdab7747885312.jpg', // 图片
//     name: '李大兴', // 姓名
//     content: '揭牌仪式1:致辞', // 内容
//     goto: 'https://www.gcsis.cn/mediaVideo/549.html', // 点击之后跳转过去的网址
//   },
//   {
//     img: 'https://img2023.gcsis.cn/2023/5/f8fec48a39cb4d3ea6bdab7747885312.jpg', // 图片
//     name: '李大兴', // 姓名
//     content: '揭牌仪式1:致辞', // 内容
//     goto: 'https://www.gcsis.cn/mediaVideo/549.html', // 点击之后跳转过去的网址
//   },
//   {
//     img: 'https://img2023.gcsis.cn/2023/5/f8fec48a39cb4d3ea6bdab7747885312.jpg', // 图片
//     name: '李大兴', // 姓名
//     content: '揭牌仪式1:致辞', // 内容
//     goto: 'https://www.gcsis.cn/mediaVideo/549.html', // 点击之后跳转过去的网址
//   },
// ])

const relatedRecommendationList = ref([
  {
    img: 'https://img2023.gcsis.cn/2023/5/f8fec48a39cb4d3ea6bdab7747885312.jpg', // 图片
    name: '李大兴', // 姓名
    content: '揭牌仪式1:致辞', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/549.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/3c1ce1305abb4593ad32ddbab902db77.jpg', // 图片
    name: '刘克', // 姓名
    content: '领导致辞', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/550.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/1ffefbfd48434592b8d46531367633ce.jpg', // 图片
    name: '郝志强', // 姓名
    content: '领导致辞', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/551.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/0a679e70bd544874a27775f7759522de.jpg', // 图片
    name: '教育论坛-揭牌仪式', // 姓名
    content: '教育论坛-揭牌仪式', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/552.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/4372862d97f8443b90f0d3c106ef0d0f.jpg', // 图片
    name: '杜廷龙', // 姓名
    content: '《数据安全工程技术人员国家职业标准》解读', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/553.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/f8fec48a39cb4d3ea6bdab7747885312.jpg', // 图片！！！！！！！！！！！！！！！
    name: '封化民', // 姓名
    content: '领导致辞', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/554.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/96d6c4a59d894cdd81aad4302f592cb7.jpg', // 图片
    name: '杨伟平', // 姓名
    content: '教育系统网络安全人员能力建设', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/555.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/f8fec48a39cb4d3ea6bdab7747885312.jpg', // 图片！！！！！！！！！！！！！！！！
    name: '邱卫东', // 姓名
    content: '——流网安学院教育体系建设', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/556.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/78844515c6b64f01b165b080451d3ffe.jpg', // 图片
    name: '尤其', // 姓名
    content: '构建标准化的人员认证体系，助力网络安全人才队伍建设', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/558.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/d45aaae48e68440988390fc0cc2055b4.jpg', // 图片
    name: '王乐', // 姓名
    content: '网安人才实践创新能力培养的方班课程模式', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/559.html', // 点击之后跳转过去的网址
  },
])
</script>

<template>
  <!-- 右下方相关推荐 -->
  <div class="h600px w30% overflow-y-scroll">
    <div
      class="h40px w-full flex items-center justify-center from-[#1d7acf] to-[#59afb8] bg-gradient-to-r font-size-20px color-[#fff]"
    >
      相关推荐
    </div>
    <ul>
      <li
        v-for="(item, index) in relatedRecommendationList"
        :key="index"
        class="mt3px h210px w-full flex flex-col cursor-pointer bg-green"
      >
        <img :src="item.img" alt="" class="w100%">
        <div
          class="flex flex-1 items-center justify-between from-[#6CB9F7] to-[#59afb8] bg-gradient-to-b color-[#fff]"
        >
          <span class="pl5px font-size-14px">{{ item.content }}</span>
          <span class="pr5px font-size-12px">{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
