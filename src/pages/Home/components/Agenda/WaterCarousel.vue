<script setup>
import { useRouter } from 'vue-router'

// 定义变量控制ul的显示隐藏
const fiveAM = ref(true)
const sixPM = ref(false)
const sevenPM = ref(false)
const eightAM = ref(false)
const eightPM = ref(false)
// 定义方法控制ul的显示隐藏
function changeFiveAM() {
  fiveAM.value = true
  sixPM.value = false
  sevenPM.value = false
  eightAM.value = false
  eightPM.value = false
}
function changeSixPM() {
  sixPM.value = true
  fiveAM.value = false
  sevenPM.value = false
  eightAM.value = false
  eightPM.value = false
}
function changeSevenPM() {
  sevenPM.value = true
  sixPM.value = false
  fiveAM.value = false
  eightAM.value = false
  eightPM.value = false
}
function changeEightPM() {
  eightPM.value = true
  sevenPM.value = false
  sixPM.value = false
  eightAM.value = false
  fiveAM.value = false
}
function changeEightAM() {
  eightAM.value = true
  eightPM.value = false
  sevenPM.value = false
  sixPM.value = false
  fiveAM.value = false
}

/*
    点击每个小卡片跳转到大会议程页面
*/
const router = useRouter()
function gotoAgenda() {
  router.push({ path: '/agenda' })
}
</script>

<template>
  <div id="body" class="">
    <div id="void" class="void max-md:hidden">
      <div class="crop">
        <!-- 最多支持6个小li -->
        <!-- 5thPM && 6thAM && 7thAM -->
        <ul v-if="fiveAM" id="ul" class="card-list" style="--count: 6">
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/56A.png" alt="">
              <span class="span font-bold">主论坛</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  主论坛
                </div>
                <div class="time text-slate-50">
                  5月7日&nbsp;9:00~12:00
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                主论坛
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    杭州洲际酒店·杭州厅
                  </p>
                </div>
                <div
                  class="jusdify-center watch h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/56A.png" alt="">
              <span class="span font-bold">95后极客青年Talk</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  掌上论剑
                </div>
                <div class="time text-slate-50">
                  5月6日&nbsp;10:00~10:30
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                95后极客青年Talk
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    线上直播
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/textPic.png" alt="">
              <span class="span font-bold">教育技术产业融合创新发展论坛</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  平行论坛
                </div>
                <div class="time text-slate-50">
                  5月5日&nbsp;8:30~12:10
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                教育技术产业融合创新发展论坛
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    杭州洲际酒店·国际厅1厅
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <!-- 6th PM -->
        <ul v-if="sixPM" id="ul" class="card-list" style="--count: 6">
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/56P1.png" alt="">
              <span class="span font-bold">当科幻照进显示我们会更安全吗？</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  掌上论剑
                </div>
                <div class="time text-slate-50">
                  5月6日&nbsp;13:00~13:30
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                当科幻照进显示我们会更安全吗？
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    线上直播
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/56P2.png" alt="">
              <span class="span font-bold"> 人工智能会颠覆安全行业吗？</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  掌上论剑
                </div>
                <div class="time text-slate-50">
                  5月6日&nbsp;15:00~15:30
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                人工智能会颠覆安全行业吗？
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    线上直播
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/56P3.png" alt="">
              <span class="span font-bold"> 反炸直播间@西湖论剑</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  掌上论剑
                </div>
                <div class="time text-slate-50">
                  5月6日&nbsp;15:30~16:30
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                反炸直播间@西湖论剑
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    线上直播
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <!-- 7th PM -->
        <ul v-if="sevenPM" id="ul" class="card-list" style="--count: 6">
          <li class="li lii" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  主论坛
                </div>
                <div class="time text-slate-50">
                  5月7日&nbsp;13:30~18:00
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                数字中国&安全治理论坛
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="area">
                    杭州洲际酒店·杭州厅
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  平行论坛
                </div>
                <div class="time text-slate-50">
                  5月7日&nbsp;13:30~17:10
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                信创软件供应链安全论坛
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    杭州洲际酒店·天津厅
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li lii" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  平行论坛
                </div>
                <div class="time text-slate-50">
                  5月7日&nbsp;13:30~17:00
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                车联网安全论坛
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="">
                    杭州洲际酒店·上海厅
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  平行论坛
                </div>
                <div class="time text-slate-50">
                  5月7日&nbsp;13:00~17:30
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                工业领域网络和数据安全论坛
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    杭州洲际酒店·北京厅
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li lii" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  第二直播间
                </div>
                <div class="time text-slate-50">
                  5月7日&nbsp;12:30~14:00
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                独家探营·数字安全创新成果展
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="">
                    线上直播
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  第二直播间
                </div>
                <div class="time text-slate-50">
                  5月6日&nbsp;14:00~15:00
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                第二直播间
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    线上直播
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <!-- 8th AM -->
        <ul v-if="eightAM" id="ul" class="card-list" style="--count: 6">
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/58A1.png" alt="">
              <span class="span font-bold">教育技术产业融合创新发展论坛</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  平行论坛
                </div>
                <div class="time text-slate-50">
                  5月8日&nbsp;8:30~12:10
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                教育技术产业融合创新发展论坛
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    杭州洲际酒店·国际厅1厅
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/58A2.png" alt="">
              <span class="span font-bold"> 商用密码应用论坛</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  平行论坛
                </div>
                <div class="time text-slate-50">
                  5月8日&nbsp;9:00~12:00
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                商用密码应用论坛
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    杭州洲际酒店·国际厅2厅
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/58A3.png" alt="">
              <span class="span font-bold"> 第二直播间</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  第二直播间
                </div>
                <div class="time text-slate-50">
                  5月8日&nbsp;9:30~12:00
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                第二直播间
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    第二直播间
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <!-- 8th PM -->
        <ul v-if="eightPM" id="ul" class="card-list" style="--count: 6">
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/58PM1.png" alt="">
              <span class="span font-bold">MSS安全托管运营服务论坛</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  平行论坛
                </div>
                <div class="time text-slate-50">
                  5月8日&nbsp;13:30~18:00
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                MSS安全托管运营服务论坛
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    杭州洲际酒店·国际厅1厅
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/58PM2.png" alt="">
              <span class="span font-bold"> 金融行业网络安全论坛</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  平行论坛
                </div>
                <div class="time text-slate-50">
                  5月8日&nbsp;13:30~18:00
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                金融行业网络安全论坛
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    杭州洲际酒店·国际厅2厅
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card flex">
              <img src="@/assets/Time/58PM3.png" alt="">
              <span class="span font-bold"> 生态“朋友圈”</span>
            </div>
          </li>
          <li class="li" @click="gotoAgenda">
            <div class="card">
              <div class="card-top flex justify-between text-xs">
                <div class="type text-xs text-slate-50 font-bold">
                  第二直播间
                </div>
                <div class="time text-slate-50">
                  5月8日&nbsp;12:30~13:00
                </div>
              </div>
              <div
                class="card-middle mb-[4px] mt-[4px] text-lg text-[#23A2AB] font-bold"
              >
                生态“朋友圈”
              </div>
              <div
                class="card-bottom flex items-center justify-between text-xs"
              >
                <div class="place flex">
                  <i class="iconfont icon-dingwei text-[#23A2AB]" />
                  <p class="text-slate-50">
                    线上直播
                  </p>
                </div>
                <div
                  class="watch jusdify-center h-[25px] w-33% flex items-center border-2 rounded-[10px] border-solid bg-[#23A2AB]"
                >
                  <i class="iconfont icon-shipinbofang- color-[#fff]" />
                  <p class="text-[#fff]">
                    观看回放
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="last-circle" />
        <div class="second-circle" />
      </div>
      <!-- 按钮绑定点击事件 -->
      <div class="mask relative flex flex-col">
        <el-button
          type="primary"
          plain
          class="absolute left-42% top-28% shadow-xl"
          color="#333"
          @click="changeFiveAM"
        >
          5th PM / 6th AM / 7th AM
        </el-button>
        <el-button
          type="primary"
          plain
          class="absolute left-30% top-45% shadow-xl"
          color="#333"
          @click="changeSixPM"
        >
          6th PM
        </el-button>
        <el-button
          type="primary"
          plain
          class="absolute left-30% top-50% shadow-xl"
          color="#333"
          @click="changeSevenPM"
        >
          7th PM
        </el-button>
        <el-button
          type="primary"
          plain
          class="absolute left-45% top-68% shadow-xl"
          color="#333"
          @click="changeEightAM"
        >
          8th AM
        </el-button>
        <el-button
          type="primary"
          plain
          class="absolute left-70% top-68% shadow-xl"
          color="#333"
          @click="changeEightPM"
        >
          8th PM
        </el-button>
      </div>
      <!-- 大会议程 -->
      <div
        class="center-circle flex flex-col cursor-pointer items-center justify-center from-sky-500 to-indigo-700 bg-gradient-to-r hover:color-#00F7FF"
        @click="gotoAgenda"
      >
        <div
          class="h20% w45% flex items-center justify-evenly text-[40px] font-bold"
        >
          <span>大</span>
          <span>会</span>
        </div>
        <div
          class="h20% w45% flex items-center justify-evenly text-[40px] font-bold"
        >
          <span>议</span>
          <span>程</span>
        </div>
        <div class="mb-[-5px] mt2% color-[#fff]">
          General
        </div>
        <div class="color-[#fff]">
          assembly agenda
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '@/styles/sos.css';

.lii .card {
  .type,
  .time,
  .area {
    color: #333;
  }
}
</style>
