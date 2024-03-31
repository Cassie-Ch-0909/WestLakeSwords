<script setup>
// TODO: 下拉展示更多和收起内容会触发全部的,应该是单个控制(调接口时再说)

import { useRouter } from 'vue-router'
import { getAgendaByDateAPI, getAgendaByTypeAPI, getAgendaByTypeAndDateAPI, getAllAgendasAPI } from '@/apis/agenda'

// 需要v-for的数组
const agendaList = ref([])

/*
    调接口：根据日期查询大会议程  5 6 7 8
*/
async function getAgendaByDate(date) {
  const res = await getAgendaByDateAPI(date)
  // console.log(res)
  agendaList.value = res.data
}

/*
    调接口：根据大会类型查询大会议程 主论坛 平行论坛...
*/
async function getAgendaByType(params) {
  const res = await getAgendaByTypeAPI(params)
  agendaList.value = res.data
}

/*
    调接口：根据分类和日期查询大会议程
*/
async function getAgendaByTypeAndDate(obj) {
  const res = await getAgendaByTypeAndDateAPI(obj)
  // console.log(res)
  agendaList.value = res.data
}

/*
    调接口：获取所有的大会议程信息
*/
async function getAllAgendas() {
  const res = await getAllAgendasAPI()
  agendaList.value = res.data
  // console.log(res)
}
getAllAgendas()
// 日期数组
const dateList = ref([
  '全部',
  5,
  6,
  7,
  8,
])

const options = ref(
  [
    {
      value: '全部',
      label: '全部',
      icon: 'icon-quanbu1',
    },
    {
      value: '主论坛',
      label: '主论坛',
      icon: 'icon-zhuluntanyicheng',
    },
    {
      value: '平行论坛',
      label: '平行论坛',
      icon: 'icon-a-taolunluntan',
    },
    {
      value: '科普论坛',
      label: '科普论坛',
      icon: 'icon-kepu',
    },
    {
      value: '掌上论剑',
      label: '掌上论剑',
      icon: 'icon-shoujiliaotian',
    },
    {
      value: '生态合作论坛',
      label: '生态合作论坛',
      icon: 'icon-shengtaihezuo',
    },
  ],
)

// 下拉箭头展示更多内容的flag值
const showMoreContentFlag = ref(false)

/*
    定义一个方法
    用来折叠和展开更多内容
*/
function showMoreContent() {
  showMoreContentFlag.value = !showMoreContentFlag.value
}

// *********************调接口*******************************

// 选中的日期的标记
const activeIndex = ref(0)

// 选择器选择的值
const selectedOptionValue = ref(null)
selectedOptionValue.value = '全部'

/*
    定义一个方法 选中日期
    如果选中的日期的index=0，并且type===全部，则调接口获取所有的议程信息
    如果选中的日期的index=0,并且type!==全部，那么就调用根据type获取大会议程
    如果选中的日期!==0，并且type===全部，那么调用根据日期获取大会议程
    如果选中的日期!==0，并且type!==全部，那么调用根据日期和type获取大会议程
*/
function selectDate(index) {
  // date的值
  activeIndex.value = index
  // type的值 selectedOptionValue.value

  if (index === 0 && selectedOptionValue.value === '全部') {
    getAllAgendas()
  }
  else if (index === 0 && selectedOptionValue.value !== '全部') {
    getAgendaByType(selectedOptionValue.value)
  }
  else if (index !== 0 && selectedOptionValue.value === '全部') {
    getAgendaByDate(dateList.value[index])
  }
  else if (index !== 0 && selectedOptionValue.value !== '全部') {
    getAgendaByTypeAndDate({
      type: selectedOptionValue.value,
      date: dateList.value[index],
    })
  }
}

/*
    定义一个方法
    选择器的值发生改变时触发
*/
function selectedOptionChange(e) {
  // date的值 activeIndex.value
  // type的值 console.log(e)
  selectedOptionValue.value = e
  if (activeIndex.value === 0 && e === '全部') {
    getAllAgendas()
  }
  else if (activeIndex.value === 0 && e !== '全部') {
    getAgendaByType(e)
  }
  else if (activeIndex.value !== 0 && e === '全部') {
    getAgendaByDate(dateList.value[activeIndex.value])
  }
  else if (activeIndex.value !== 0 && e !== '全部') {
    getAgendaByTypeAndDate({
      type: e,
      date: dateList.value[activeIndex.value],
    })
  }
}

// TODO: 点击观看回放跳转到大会详情
const router = useRouter()
function watchReplay(id) {
  // console.log(id)
  // 通过path跳转传递
  router.push({ path: '/meetingdetails', query: { id } })
}
</script>

<template>
  <!-- PC端大会议程 -->
  <div
    class="[#98EAF7] w-full from-[#8EEDF0] to-[#8EC4F7] from-10% to-90% via-30% bg-gradient-to-r pb50px max-md:hidden"
  >
    <div class="ml10% mr10% h-full w-80%">
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        大会议程
      </p>
      <!-- 头部两个筛选 -->
      <div class="h50% w-full flex items-center justify-between">
        <!-- 日期筛选 -->
        <div class="h-full w-30% flex">
          <div
            v-for="(item, index) in dateList" :key="index"
            :class="activeIndex === index ? 'bg-[#00B4BC]' : 'bg-[#EFFBFF]'"
            class="mr2% h-60% w-18% flex items-center justify-center rounded-[10px]" @click="selectDate(index)"
          >
            <div
              :class="activeIndex === index ? 'color-[#EFFBFF]' : 'color-[#00B4BC]'"
              class="h90% w80% flex flex-col items-center justify-center rounded-[10px]"
            >
              <span class="text-size-[13px]">5月</span>
              <span class="text-size-[18px]">{{ item }}</span>
            </div>
          </div>
        </div>
        <!-- 类型筛选 -->
        <div class="h-full w-30% flex items-center justify-end">
          <p class="mr5% text-size-[15px] color-[#00B4BC] font-bold">
            类型筛选
          </p>
          <el-select
            v-model="selectedOptionValue" class="" placeholder="全部" size="large" style="width: 150px;"
            @change="selectedOptionChange"
          >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
      <!-- for循环日期数组 如果点击日期 那么就展示点击日期对应的议程 -->
      <!-- <div v-for="(item, index) in dateList" v-show="activeIndex === index" :key="index"> -->
      <!-- for循环type数组  -->
      <div v-for="(item2, index2) in options" v-show="selectedOptionValue === item2.value" :key="index2">
        <div class="mb15px mt15px flex items-center">
          <i class="iconfont font-size-30px color-[#00B4BC]" :class="item2.icon" />
          <span class="ml10px text-size-[19px] color-[#00B4BC] font-bold">{{ item2.value }}</span>
        </div>
        <template v-if="agendaList.length !== 0">
          <div
            v-for="(item3, index3) in agendaList" :key="index3"
            class="mb15px w-full rounded-[15px] bg-[#fff] pb20px pt20px shadow-lg"
          >
            <div class="w-full flex items-center">
              <!-- 时间图片和时间 -->
              <div class="ml5% h-50px w190px flex items-center justify-around">
                <img src="/public/agenda/time.png" alt="" class="h22px w22px">
                <span>{{ item3.time }}</span>
              </div>
              <!-- 标题和地点 -->
              <div class="ml5% w370px flex flex-col justify-center">
                <p class="text-size-[17px] color-[#00B4BC] font-bold">
                  {{ item3.title }}
                </p>
                <div class="flex items-center color-[grey]">
                  <i class="iconfont icon-dingwei font-size-20px" />
                  <p class="text-size-[12px]">
                    {{ item3.place }}
                  </p>
                </div>
              </div>
              <!-- 观看回放 -->
              <div
                class="ml5% h30px w8% flex items-center justify-center rounded-[13px] bg-[#00B4BC] font-size-13px color-[#fff]"
                @click="watchReplay(item3.id)"
              >
                <p>观看回放</p>
              </div>
              <!-- 右边箭头 -->
              <div class="ml40% w5% flex items-center justify-center color-[#00B4BC]" @click="showMoreContent">
                <i class="iconfont icon-arrow-down" />
              </div>
            </div>
            <div v-show="showMoreContentFlag" class="mt10px bg-[#EFFBFF] pb15px pl6%">
              <div class="flex pt15px">
                <i class="iconfont icon-shijian1" />
                <span class="pl2%">{{ item3.time }}</span>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  {{ item3.channel }} 精彩干货不间断
                </p>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  郝志强
                </p>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  工业和信息化部教育与考试中心主任 书记
                </p>
              </div>
            </div>
            <div v-show="showMoreContentFlag" class="mt10px bg-[#EFFBFF] pb15px pl6%">
              <div class="flex pt15px">
                <i class="iconfont icon-shijian1" />
                <span class="pl2%">09:30-12:00</span>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  第二直播间 精彩干货不间断
                </p>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  郝志强
                </p>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  工业和信息化部教育与考试中心主任 书记
                </p>
              </div>
            </div>
            <div v-show="showMoreContentFlag" class="mt10px h-50px w-full flex items-center justify-center">
              <button class="putAway" @click="showMoreContent">
                收起
              </button>
            </div>
          </div>
        </template>
        <div v-else class="h300px w-full rounded-20px bg-[#fff]">
          <el-empty description="未查询到任何会议信息" />
        </div>
      </div>
      <!-- </div> -->
    </div>

    <!-- 移动端大会议程 -->
    <div class="[#98EAF7] w-full from-[#8EEDF0] to-[#8EC4F7] from-10% to-90% via-30% bg-gradient-to-r pb50px md:hidden">
      <div class="h-50px w-full flex items-center justify-center font-size-[18px] color-[#00B4BC] font-bold">
        大会议程
      </div>
      <div class="w-full flex items-center justify-center">
        <div
          v-for="(item, index) in dateList" :key="index"
          :class="activeIndex === index ? 'bg-[#00B4BC]' : 'bg-[#EFFBFF]'"
          class="mr2% h-60% w-15% flex items-center justify-center rounded-[10px]" @click="selectDate(index)"
        >
          <div
            :class="activeIndex === index ? 'color-[#EFFBFF]' : 'color-[#00B4BC]'"
            class="h90% w80% flex flex-col items-center justify-center rounded-[10px] shadow-xl"
          >
            <span class="text-size-[13px]">5月</span>
            <span class="text-size-[18px]">{{ item }}</span>
          </div>
        </div>
      </div>
      <div v-for="(item, index) in dateList" v-show="activeIndex === index" :key="index">
        <div v-for="(item2, index2) in options" :key="index2">
          <div v-show="selectedOptionValue === item2.value || selectedOptionValue === '全部'">
            <div class="mb15px mt15px flex items-center">
              <i class="iconfont font-size-30px color-[#0E88A4]" :class="item2.icon" />
              <span class="ml10px text-size-[19px] color-[#0E88A4] font-bold">{{ item2.value }}</span>
            </div>
            <div class="w-full rounded-[15px] bg-[#fff] pb20px pt20px shadow-lg">
              <div class="w-full flex items-center">
                <div class="w20% flex flex-col items-center justify-around font-size-12px">
                  <img src="/public/agenda/time.png" alt="" class="mb10px h15px w15px">
                  <span>10:00-11:30</span>
                </div>
                <div class="ml1% w-55% flex flex-col justify-center">
                  <p class="pl2% text-size-[14px] color-[#00B4BC] font-bold">
                    网络安全创新发展高端论坛
                  </p>
                  <div class="flex items-center color-[grey]">
                    <i class="iconfont icon-dingwei font-size-20px" />
                    <p class="text-size-[12px]">
                      杭州市滨江区文化中心剧院一层
                    </p>
                  </div>
                </div>
                <div
                  class="h20px w15% flex items-center justify-center rounded-[10px] bg-[#00B4BC] font-size-12px color-[#fff]"
                >
                  <p>观看回放</p>
                </div>
                <div class="ml3% w3% flex items-center justify-center pr2% color-[#00B4BC]" @click="showMoreContent">
                  <i class="iconfont icon-arrow-down font-size-12px" />
                </div>
              </div>
              <div v-show="showMoreContentFlag" class="mt10px bg-[#EFFBFF] pb15px pl6%">
                <div class="flex pt15px">
                  <i class="iconfont icon-shijian1" />
                  <span class="pl2%">09:30-12:00</span>
                </div>
                <div class="flex pt5px font-size-13px">
                  <p>
                    第二直播间 精彩干货不间断
                  </p>
                </div>
                <div class="flex pt5px font-size-13px">
                  <p>
                    郝志强
                  </p>
                </div>
                <div class="flex pt5px font-size-13px">
                  <p>
                    工业和信息化部教育与考试中心主任 书记
                  </p>
                </div>
              </div>
              <div v-show="showMoreContentFlag" class="mt10px bg-[#EFFBFF] pb15px pl6%">
                <div class="flex pt15px">
                  <i class="iconfont icon-shijian1" />
                  <span class="pl2%">09:30-12:00</span>
                </div>
                <div class="flex pt5px font-size-13px">
                  <p>
                    第二直播间 精彩干货不间断
                  </p>
                </div>
                <div class="flex pt5px font-size-13px">
                  <p>
                    郝志强
                  </p>
                </div>
                <div class="flex pt5px font-size-13px">
                  <p>
                    工业和信息化部教育与考试中心主任 书记
                  </p>
                </div>
              </div>
              <div v-show="showMoreContentFlag" class="mt10px h-50px w-full flex items-center justify-center">
                <button class="putAway" @click="showMoreContent">
                  收起
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.putAway {
  border-radius: 15px;
  width: 80px;
  height: 30px;
  border: 2px solid #00b4bc;
  color: #00b4bc;
}

.putAway:hover {
  background-color: #00b4bc;
  color: #fff;
}
</style>
