<script setup>
// TODO: 下拉展示更多和收起内容会触发全部的,应该是单个控制(调接口时再说)

import { getAgendaByDateAPI, getAgendaByTypeAPI } from '@/apis/agenda'

/*
    调接口：根据日期查询大会议程  5 6 7 8
*/
async function getAgendaByDate() {
  // const res = await getAgendaByDateAPI(5)
  // console.log(res)
}
getAgendaByDate()

/*
    调接口：根据大会类型查询大会议程 主论坛 平行论坛...
*/
async function getAgendaByType() {
  // const res = await getAgendaByTypeAPI(params)
  // console.log(res)
}
getAgendaByType('主论坛')

// 日期数组
const dateList = ref([
  5,
  6,
  7,
  8,
])
// 选中的日期的标记
const activeIndex = ref(0)
/*
    定义一个方法 选中日期
*/
function selectDate(index) {
  activeIndex.value = index
}

const options = [
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
]

// 选择器选择的值
const selectedOptionValue = ref(null)
selectedOptionValue.value = '全部'

/*
    定义一个方法
    选择器的值发生改变时触发
*/
function selectedOptionChange() {
  // console.log(selectedOptionValue.value)
}

// 下拉箭头展示更多内容的flag值
const showMoreContentFlag = ref(false)

/*
    定义一个方法
    用来折叠和展开更多内容
*/
function showMoreContent() {
  showMoreContentFlag.value = !showMoreContentFlag.value
}
</script>

<template>
  <!-- PC端大会议程 -->
  <div class="[#98EAF7] w-full from-[#8EEDF0] to-[#8EC4F7] from-10% to-90% via-30% bg-gradient-to-r pb50px max-md:hidden">
    <div class="ml10% mr10% h-full w-80%">
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        大会议程
      </p>
      <div class="h50% w-full flex items-center justify-between">
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
      <div v-for="(item, index) in dateList" v-show="activeIndex === index" :key="index">
        <div v-for="(item2, index2) in options" :key="index2">
          <div v-show="selectedOptionValue === item2.value || selectedOptionValue === '全部'">
            <div class="mb15px mt15px flex items-center">
              <i class="iconfont font-size-30px color-[#00B4BC]" :class="item2.icon" />
              <span class="ml10px text-size-[19px] color-[#00B4BC] font-bold">{{ item2.value }}</span>
            </div>
            <div class="w-full rounded-[15px] bg-[#fff] pb20px pt20px shadow-lg">
              <div class="w-full flex items-center">
                <div class="ml5% w12% flex items-center justify-around">
                  <img src="/public/agenda/time.png" alt="" class="h22px w22px">
                  <span>10:00-11:30</span>
                </div>
                <div class="ml5% flex flex-col justify-center">
                  <p class="text-size-[17px] color-[#00B4BC] font-bold">
                    加速行业智能化
                  </p>
                  <div class="flex items-center color-[grey]">
                    <i class="iconfont icon-dingwei font-size-20px" />
                    <p class="text-size-[12px]">
                      上海世博展览馆HALL1
                    </p>
                  </div>
                </div>
                <div
                  class="ml10% h30px w6% flex items-center justify-center rounded-[13px] bg-[#00B4BC] font-size-13px color-[#fff]"
                >
                  <p>观看回放</p>
                </div>
                <div class="ml40% w5% flex items-center justify-center color-[#00B4BC]" @click="showMoreContent">
                  <i class="iconfont icon-arrow-down" />
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
