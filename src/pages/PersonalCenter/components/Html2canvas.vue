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

/*
    定义一个变量用来激活选中的海报样式
*/
import { useUserStore } from '@/stores/user.js'

const activeSelectModuleIndex = ref(0)
function changeActiveSelectModuleIndex(index: number) {
  activeSelectModuleIndex.value = index
}

const userStore = useUserStore()
userStore.getUserInfo()
const avatar = ref('')
avatar.value = userStore.userInfo.avatar
// console.log(avatar.value)

// 获取当前日期
const date = new Date()

// 获取当前月份
let nowMonth = date.getMonth() + 1

// 获取当前是几号
let strDate = date.getDate()

// 添加分隔符“-”
// const seperator = '-'

// 对月份进行处理，1-9月在前面添加一个“0”
if (nowMonth >= 1 && nowMonth <= 9)
  nowMonth = `0${nowMonth}`

// 对月份进行处理，1-9号在前面添加一个“0”
if (strDate >= 0 && strDate <= 9)
  strDate = `0${strDate}`

// 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
const nowDate = `${date.getFullYear()}年${nowMonth}月${strDate}日`
</script>

<template>
  <div class="w-full flex bg-#fff pb10px pt10px font-size-20px">
    <p class="ml18%">
      模式选择
    </p>
    <p class="ml39%">
      海报预览
    </p>
  </div>
  <div class="w-full flex bg-#fff pb20px pl2%">
    <div class="h520px w-50%">
      <div class="flex">
        <div
          class="relative mr5% h230px w40% cursor-pointer rounded-10px font-size-7px"
          :class="
            activeSelectModuleIndex === 0
              ? 'border-5px border-#00F5F6 bg-#00F5F6 border-solid'
              : ''
          "
          @click="changeActiveSelectModuleIndex(0)"
        >
          <img
            class="h-full w-full rounded-10px"
            src="/public/personalized/2.jpg"
            alt=""
          >
          <p class="absolute left-10px top-3% color-#31A6F7">
            {{ nowDate }}
          </p>
          <p class="absolute left-20% top-13% color-#31A6F7 font-bold">
            亲爱的{{ userStore.userInfo.username }}：
          </p>
          <p class="absolute left-25% top-21% ml25px h-full pr3% font-bold">
            “清风徐来，水波不兴”，
            <br>愿您的生活一帆风顺，宁静而美好
          </p>
          <img
            :src="avatar"
            class="absolute left-1% top-10% mr3% w16% rounded-50%"
            alt=""
          >
          <img
            class="absolute bottom-3% right-23% w-18%"
            src="/public/xcx.png"
          >
          <img
            class="absolute bottom-3% right-3% w-18%"
            src="/public/about/1.webp"
          >
        </div>
        <div
          class="relative h230px w40% cursor-pointer rounded-10px font-size-8px"
          :class="
            activeSelectModuleIndex === 1
              ? 'border-5px border-#00F5F6 bg-#00F5F6 border-solid'
              : ''
          "
          @click="changeActiveSelectModuleIndex(1)"
        >
          <img
            src="/public/personalized/3.jpg"
            class="h-full w-full rounded-10px"
            alt=""
          >
          <img class="absolute left-19% top-2% w-15%" src="/public/xcx.png">
          <img
            class="absolute left-2% top-2% w-15%"
            src="/public/about/1.webp"
          >
          <div
            class="absolute left-2% top-28% w-full flex items-center font-size-10px font-size-20px"
          >
            <img
              :src="avatar"
              class="mr3% w16% rounded-50%"
              alt=""
            >
            <p class="font-size-9px">
              Hi~ {{ userStore.userInfo.username }}
            </p>
          </div>
          <p class="absolute left-2% top-45% pr3% font-size-9px color-#fff">
            愿您在真诚和努力中，扶摇直上九万里，不辜负所爱之人，亦不辜负少年时的自己。
          </p>
        </div>
      </div>
      <div class="flex">
        <div
          class="relative mr5% mt5% h230px w40% cursor-pointer rounded-10px font-size-8px"
          :class="
            activeSelectModuleIndex === 2
              ? 'border-5px border-#00F5F6 bg-#00F5F6 border-solid'
              : ''
          "
          @click="changeActiveSelectModuleIndex(2)"
        >
          <img
            class="h45% w-full rounded-t-10px"
            src="/public/personalized/3.png"
            alt=""
          >
          <img
            class="absolute bottom-42% left-19% w-15%"
            src="/public/xcx.png"
          >
          <img
            class="absolute bottom-42% left-2% w-15%"
            src="/public/about/1.webp"
          >
          <p class="absolute left-40% top-45% pr3% color-#fff">
            “ 道之所存，师之所存也 ” ，
            愿您一直保持一颗学习的心，朝着更好的自己前进。
          </p>
          <div
            class="absolute left-40% top-26% h18% font-size-6px color-#00F5FF"
          >
            <div class="w-full flex items-center">
              <img
                :src="avatar"
                class="mr3% w18% rounded-50%"
                alt=""
              >
              <p>Hi~ {{ userStore.userInfo.username }}</p>
            </div>
            <p class="mt2%">
              今天是{{ nowDate }} 西湖论剑祝您万事顺意！
            </p>
          </div>
          <div
            class="h15% w-full from-[#0A2158] to-[#040819] bg-gradient-to-b"
          />
          <img
            class="h40% w-full rounded-b-10px"
            src="https://img2023.gcsis.cn/2023/4/62eaf1128543498d87fefbe31913a5a3.jpeg"
            alt=""
          >
        </div>
        <div
          class="relative mt5% h230px w40% cursor-pointer rounded-10px"
          :class="
            activeSelectModuleIndex === 3
              ? 'border-5px border-#00F5F6 bg-#00F5F6 border-solid'
              : ''
          "
          @click="changeActiveSelectModuleIndex(3)"
        >
          <img
            src="/public/personalized/7.jpg"
            class="h32% w-full rounded-t-10px"
            alt=""
          >
          <img src="/public/personalized/5.png" class="h29% w-full" alt="">
          <img
            src="/public/personalized/6.jpg"
            class="h40% w-full rounded-b-10px"
            alt=""
          >
          <img class="absolute left-19% top-2% w-15%" src="/public/xcx.png">
          <img
            class="absolute left-2% top-2% w-15%"
            src="/public/about/1.webp"
          >
          <p class="absolute left-2% top-16% font-size-9px color-#00F5FF">
            “东隅已逝，桑榆非晚”，不要轻易放弃自己，你所浪费的今天，是未来的你回不去的曾经。
          </p>
          <div
            class="absolute left-2% top-2% flex items-center justify-end pr3% font-size-20px font-size-9px color-#00F5FF"
          >
            <p>Hi~ {{ userStore.userInfo.username }}</p>
            <img
              :src="avatar"
              class="ml3% w16% rounded-50%"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
    <div class="w-50%">
      <div
        v-if="activeSelectModuleIndex === 0"
        id="CodeImgBase64"
        class="relative h520px w80%"
      >
        <img class="h-full w-full" src="/public/personalized/2.jpg" alt="">
        <p class="absolute left-10px top-3% color-#31A6F7">
          {{ nowDate }}
        </p>
        <p class="absolute left-20% top-13% color-#31A6F7 font-bold">
          亲爱的{{ userStore.userInfo.username }}：
        </p>
        <p class="absolute left-25% top-21% ml25px h-full pr3% font-bold">
          “清风徐来，水波不兴”，
          <br>愿您的生活一帆风顺，宁静而美好
        </p>
        <img
          :src="avatar"
          class="absolute left-1% top-10% mr3% w16% rounded-50%"
          alt=""
        >
        <img class="absolute bottom-3% right-23% w-18%" src="/public/xcx.png">
        <img
          class="absolute bottom-3% right-3% w-18%"
          src="/public/about/1.webp"
        >
      </div>
      <div
        v-else-if="activeSelectModuleIndex === 2"
        id="CodeImgBase64"
        class="relative h-full h520px w80%"
      >
        <img class="h45% w-full" src="/public/personalized/3.png" alt="">
        <img class="absolute bottom-42% left-19% w-15%" src="/public/xcx.png">
        <img
          class="absolute bottom-42% left-2% w-15%"
          src="/public/about/1.webp"
        >
        <p class="absolute left-40% top-45% pr3% color-#fff">
          “ 道之所存，师之所存也 ” ，
          愿您一直保持一颗学习的心，朝着更好的自己前进。
        </p>
        <img
          :src="avatar"
          class="absolute left-40% top-25% w12% rounded-50%"
          alt=""
        >
        <p class="absolute left-54% top-27% color-#00F5FF">
          Hi~ {{ userStore.userInfo.username }}
        </p>
        <p class="absolute left-45% top-36% mr5% font-size-12px color-#00F5FF">
          今天是{{ nowDate }}，西湖论剑祝您万事顺意！
        </p>
        <div class="h15% w-full from-[#0A2158] to-[#040819] bg-gradient-to-b" />
        <img
          class="h40% w-full"
          src="https://img2023.gcsis.cn/2023/4/62eaf1128543498d87fefbe31913a5a3.jpeg"
          alt=""
        >
      </div>
      <div
        v-else-if="activeSelectModuleIndex === 1"
        id="CodeImgBase64"
        class="relative h-full h520px w80%"
      >
        <img src="/public/personalized/3.jpg" class="h-full w-full" alt="">
        <img class="absolute left-19% top-2% w-15%" src="/public/xcx.png">
        <img class="absolute left-2% top-2% w-15%" src="/public/about/1.webp">
        <div
          class="absolute left-2% top-28% w-full flex items-center font-size-20px"
        >
          <img :src="avatar" class="mr3% w16% rounded-50%" alt="">
          <p>Hi~ {{ userStore.userInfo.username }}</p>
        </div>
        <p class="absolute left-2% top-45% pr3% color-#fff">
          愿您在真诚和努力中，扶摇直上九万里，不辜负所爱之人，亦不辜负少年时的自己。
        </p>
      </div>
      <div
        v-else-if="activeSelectModuleIndex === 3"
        id="CodeImgBase64"
        class="relative h-full h520px w80% flex flex-col"
      >
        <img src="/public/personalized/7.jpg" class="h30% w-full" alt="">
        <img src="/public/personalized/5.png" class="h30%" alt="">
        <img src="/public/personalized/6.jpg" class="w-full" alt="">
        <img class="absolute left-19% top-2% w-15%" src="/public/xcx.png">
        <img class="absolute left-2% top-2% w-15%" src="/public/about/1.webp">
        <p class="absolute left-2% top-16% color-#00F5FF">
          “东隅已逝，桑榆非晚”，不要轻易放弃自己，你所浪费的今天，是未来的你回不去的曾经。
        </p>
        <div
          class="absolute left-2% top-2% flex items-center justify-end pr3% font-size-20px color-#00F5FF"
        >
          <p>Hi~ {{ userStore.userInfo.username }}</p>
          <img :src="avatar" class="ml3% w16% rounded-50%" alt="">
        </div>
      </div>
    </div>
  </div>
  <!-- <button @click="createPoster">
    下载海报
  </button> -->
  <div class="w-full flex justify-center bg-#fff pb20px pt10px font-size-20px">
    <button class="h50px w30% rounded-10px bg-#00B4BC color-#fff">
      点击下载海报
    </button>
  </div>
</template>

<style scoped></style>
