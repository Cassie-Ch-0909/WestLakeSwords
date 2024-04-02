<script setup lang="ts">
// import html2canvas from 'html2canvas'
// import { reactive, ref } from 'vue'
// function createPoster() {
//   // 生成海报
//   const domObj = document.getElementById('CodeImgBase64')
//   // 显示海报
//   html2canvas(domObj, {
//     useCORS: true,
//     allowTaint: false,
//     logging: false,
//     letterRendering: true,
//     onclone(doc: any) {
//       const e = doc.querySelector('#CodeImgBase64')
//       e.style.display = 'block'
//       console.log(doc)
//     },
//   }).then((canvas: any) => {
//     // 在微信里,可长按保存或转发
//     const a = canvas.toDataURL('image/png')
//     console.log(a)
//   })
// }
</script>

<template>
  <div class="w-full flex">
    <div class="w-50% flex flex-wrap">
      <div class="relative mr5% h230px w40% rounded-10px bg-yellow font-size-10px">
        <img class="h-full w-full rounded-10px" src="/public/personalized/2.jpg" alt="">
        <p class="absolute left-10px top-3% color-#00B4BC">
          2024年3月27日 星期二
        </p>
        <p class="absolute left-10px top-11% font-bold">
          亲爱的Cassie燁：
        </p>
        <p class="absolute right-10px top-19% ml25px font-bold">
          “清风徐来，水波不兴”，愿您的生活一帆风顺，宁静而美好~
        </p>
        <img class="absolute bottom-3% right-23% w-18%" src="/public/xcx.png">
        <img class="absolute bottom-3% right-3% w-18%" src="/public/about/1.webp">
      </div>
      <div class="h230px w40% rounded-10px bg-yellow">
        <img class="w-full rounded-t-10px" src="/public/personalized/3.png" alt="">
        <img class="w-full" src="https://img2023.gcsis.cn/2023/4/62eaf1128543498d87fefbe31913a5a3.jpeg" alt="">
      </div>
      <div class="mr5% mt5% h230px w40% rounded-10px bg-yellow">
        1
      </div>
      <div class="mt5% h230px w40% rounded-10px bg-yellow">
        1
      </div>
    </div>
    <div class="w-50% bg-blue">
      <!-- <div id="CodeImgBase64" class="relative h-full w80% rounded-20px bg-red">
        <img class="h-full w-full rounded-10px" src="/public/personalized/2.jpg" alt="">
        <p class="absolute left-10px top-3% color-#00B4BC">
          2024年4月2日 星期二
        </p>
        <p class="absolute left-10px top-11% font-bold">
          亲爱的Cassie燁：
        </p>
        <p class="absolute right-10px top-19% ml25px font-bold">
          “清风徐来，水波不兴”，愿您的生活一帆风顺，宁静而美好~
        </p>
        <img class="absolute bottom-3% right-23% w-18%" src="/public/xcx.png">
        <img class="absolute bottom-3% right-3% w-18%" src="/public/about/1.webp">
      </div> -->
      <div id="CodeImgBase64" class="relative h-full w80% rounded-20px bg-red">
        <img class="h45% w-full rounded-t-10px" src="/public/personalized/3.png" alt="">
        <p class="absolute color-#fff">
          “道之所存，师之所存也”，愿您一直保持一颗学习的心，朝着更好的自己前进
        </p>
        <div class="h15% w-full from-[#0A2158] to-[#040819] bg-gradient-to-b" />
        <img class="h40% w-full rounded-b-10px" src="https://img2023.gcsis.cn/2023/4/62eaf1128543498d87fefbe31913a5a3.jpeg" alt="">
      </div>
    </div>
  </div>
  <button @click="createPoster">
    下载海报
  </button>
</template>

<style scoped></style>
