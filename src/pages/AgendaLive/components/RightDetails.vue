<script setup>
import { ref } from 'vue'
import RotateBgButton from './RotateBgButton.vue'
import RotateBgButtonD from './RotateBgButtonD.vue'
import { getAgendaByIdAPI, likeForAgendaAPI } from '@/apis/agenda'

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

// 会议议程时间线
const agendaTimeLineList = ref([
  {
    time: '08:30 - 08:35',
    content: '致辞',
    person: '郝志强   工业和信息化部教育与考试中心主任、书记',
  },
  {
    time: '08:35 - 08:40',
    content: '致辞',
    person: '封化民   教育部高等学校网络空间安全专业教学指导委员会秘书长',
  },
  {
    time: '08:40 - 08:45',
    content: '致辞',
    person: '刘 克   中国网络安全审查技术与认证中心副主任',
  },
  {
    time: '08:45 - 08:50',
    content: '致辞',
    person: '',
  },
  {
    time: '08:50 - 08:55',
    content: '揭牌仪式1：致辞',
    person: '李大兴   台州科技职业学院校长',
  },
  {
    time: '08:55 - 09:00',
    content: '揭牌仪式1：台州科技职业学院-安恒信息产业学院揭牌仪式',
    person: '任 娜    台州科技职业学院副校长苗春雨 安恒信息高级副总裁、首席人才官',
  },
  {
    time: '09:00 - 09:05',
    content: '揭牌仪式2：南邮-安恒学院实训基地（乌镇）揭牌仪式',
    person: '肖 甫   南京邮电大学副校长 苗春雨   安恒信息高级副总裁、首席人才官',
  },
  {
    time: '09:05 - 09:25',
    content: '教育系统网络安全人员能力建设',
    person: '杨伟平   教育部教育管理信息中心网络安全处副处长',
  },
  {
    time: '09:25 - 09:45',
    content: '构建标准化的人员认证体系，助力网络安全人才队伍建设',
    person: '尤 其   中国网络安全审查技术与认证中心副处长',
  },
  {
    time: '09:45 - 10:05',
    content: '一流网安学院教学体系建设',
    person: '邱卫东   上海交通大学网络空间安全学院副院长',
  },
  {
    time: '10:05 - 10:25',
    content: '产教科融合，商贸流通职业教育特色发展',
    person: '王 鑫   山东商业职业技术学院校长',
  },
  {
    time: '10:25 - 10:45',
    content: '网安人才实践创新能力培养的方班课程模式',
    person: '王 乐    广州大学网络空间安全学院副院长',
  },
  {
    time: '10:45 - 11:05',
    content: '《数据安全工程技术人员国家职业标准》解读',
    person: '杜廷龙   安恒信息数字人才创研院西安分院院长',
  },
  {
    time: '11:05 - 11:25',
    content: '信息安全技术应用专业群建设探索与实践',
    person: '纪兆华   北京信息职业技术学院产业互联网学院院长',
  },
  {
    time: '11:25 - 11:40',
    content: '网安人才成长之在校教育“扶上马”，在企锻炼“送一程”',
    person: '吴鸣旦   安恒信息副总裁、人才创研院副院长',
  },
  {
    time: '11:40 - 12:10',
    content: '圆桌对话：网络安全人才培养产教融合的分享与探讨',
    person: '苗春雨（主持人）   安恒信息高级副总裁、首席人才官 韩 霞',
  },
])

// TODO1: 获取路由参数 发请求获取当前页的大会详情
const route = useRoute()
// 在组件挂载完成后通过 route.query.属性名 接收参数
// console.log(route.query.id)

const agendaDetails = ref()
const title = ref()
// TODO2: 发请求获取路由参数
async function getAgendaById(id) {
  const res = await getAgendaByIdAPI(id)
  // console.log(res)
  agendaDetails.value = res.data[0]
  // TODO: 获取数据库中的点赞数和观看数
  iconList.value[0].name = agendaDetails.value.like
  iconList.value[4].name = agendaDetails.value.watch
  title.value = res.data[0].title
}
getAgendaById(route.query.id)

/*
    定义函数和变量来实现点赞和取消点赞功能
*/
const iconActiveIndex = ref()
const iconLikeActiveFlag = ref(false)

// async function likeForAgenda(data){
//   await likeForAgendaAPI({
//     id:data
//   })
// }
// likeForAgenda(4)
function selectIconOperate(index) {
  // if (index === 0 && !iconActiveFlag.value) {
  //   iconActiveIndex.value = index
  //   iconList.value[0].name++
  //   iconActiveFlag.value = true
  // }
  // else {
  //   iconList.value[0].name--
  //   iconActiveFlag.value = false
  //   iconActiveIndex.value = 9
  // }
  if (index === 0) {
    // 进入点赞分支
    if (!iconLikeActiveFlag.value) {
      // TODO：调点赞接口为会议点赞
      // likeForAgenda(4)
    }
  }
}
</script>

<template>
  <div class="h516px w30% flex flex-col">
    <div
      class="h50px w-full flex items-center justify-center from-[#1d7acf] to-[#59afb8] bg-gradient-to-r font-size-20px color-[#fff]"
    >
      会议议程
    </div>
    <div class="title w-full flex-1">
      <!-- 标题 -->
      <p class="p15px font-size-22px color-#fff font-bold">
        {{ title }}
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
        <RotateBgButton class="w45%" />
        <RotateBgButtonD class="w45%" />
      </div>
      <!-- 议程详情 -->
      <div
        class="mb15px ml15px ml5% mr15px mt20px h-265px w-90% flex flex-col items-center overflow-y-scroll bg-#fff pt10px"
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
