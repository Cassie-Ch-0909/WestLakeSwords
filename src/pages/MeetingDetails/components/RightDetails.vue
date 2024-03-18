<script setup>
import { ref } from 'vue'
import RotateBgButton from './RotateBgButton.vue'
import RotateBgButtonD from './RotateBgButtonD.vue'

const iconList = ref(
  [
    {
      icon: 'icon-dianzan_kuai',
      name: 8995,
    },
    {
      icon: 'icon-toubi-copy',
      name: '投币',
    },
    {
      icon: 'icon-shoucang',
      name: '收藏',
    },
    {
      icon: 'icon-zhuanfa',
      name: '转发',
    },
    {
      icon: 'icon-icon204',
      name: 5677,
    },
    {
      icon: 'icon-baocundaobendi',
      name: '保存',
    },
  ],
)

/*
    定义函数和变量来实现点赞和取消点赞功能
*/
const iconActiveIndex = ref()
const iconActiveFlag = ref(false)
function selectIconOperate(index) {
  if (index === 0 && !iconActiveFlag.value) {
    iconActiveIndex.value = index
    iconList.value[0].name++
    iconActiveFlag.value = true
  }
  else {
    iconList.value[0].name--
    iconActiveFlag.value = false
    iconActiveIndex.value = 9
  }
}

// 会议议程时间线
const agendaTimeLineList = ref([
  {
    time: '08:30 - 08:35',
    content: '致辞',
    person: '郝志强   工业和信息化部教育与考试中心主任、书记',
  },
  {
    time: '11:40 - 12:10',
    content: '圆桌对话：网络安全人才培养产教融合的分享与探讨',
    person: '苗春雨（主持人）   安恒信息高级副总裁、首席人才官',
  },
])
</script>

<template>
  <div class="h536px w330px flex flex-col">
    <div
      class="h50px w-full flex items-center justify-center from-[#1d7acf] to-[#59afb8] bg-gradient-to-r font-size-20px color-[#fff]"
    >
      会议议程
    </div>
    <div class="title w-full flex-1">
      <!-- 标题 -->
      <p class="p15px font-size-22px color-#fff font-bold">
        教育技术产业融合创新发展论坛
      </p>
      <!-- 点赞投币。。。 -->
      <div class="w-full flex justify-between pl30px pr30px">
        <div
          v-for="(item, index) in iconList" :key="index" class="flex flex-col color-#fff hover:color-[#00F5FF]"
          :class="iconActiveIndex === index ? 'color-[#00F5FF]' : ''" @click="selectIconOperate(index)"
        >
          <i :class="item.icon" class="iconfont font-size-25px" />
          <span class="font-size-12px">{{ item.name }}</span>
        </div>
      </div>
      <!-- 两个按钮 -->
      <div class="mt15px h35px w-full flex justify-between pl30px pr30px">
        <RotateBgButton />
        <RotateBgButtonD />
      </div>
      <!-- 议程详情 -->
      <div
        class="mb15px ml15px mr15px mt20px h-265px w-full w297px flex flex-col items-center overflow-y-scroll bg-#fff pt10px"
      >
        <div v-for="(item, index) in agendaTimeLineList" :key="index" class="w-90% flex">
          <div class="h100% w15px flex flex-col items-center">
            <span class="inline-block h15px w15px border-2px border-#2DB1BA rounded-50% border-solid" />
            <span class="inline-block h120px w2px bg-#2DB1BA" />
          </div>
          <div class="h100% flex-1 pl15px">
            <p class="time">
              {{ item.time }}
            </p>
            <p>{{ item.content }}</p>
            <p class="color-#999">
              {{ item.person }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
