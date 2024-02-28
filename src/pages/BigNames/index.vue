<script setup>
const specialList = ref([
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/45d698748a394f6e923254d06ffdcc76.png',
    name: '左晓栋',
    content: '中国科学技术大学网络空间安全学院教授、科技人文高等研究院副院长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/416955f5d3a34eda8b95411dd0483065.jpg',
    name: '崔光耀 ',
    content: '《中国信息安全》杂志原主编',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/8dadced7bad74bd7b7e692957bc6f1d2.jpg',
    name: '顾炳中 ',
    content: '中国计算机用户协会理事长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/2f791d88ef5c42669d61dfb560ab484e.jpg',
    name: '李新友 ',
    content: '国家信息中心研究员',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/54400aca0eea438f822ebf3a059e43db.jpg',
    name: '曲胜 ',
    content: '中国能源研究会能源网络安全技术研究中心常务副主任',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/82f148791fda423aac58841930ca293c.jpg',
    name: '王秉政 ',
    content: '全国信安标委成员',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/e93465d2e3bf4d3d8f9cce134f7cceec.jpg',
    name: '许玉娜 ',
    content: '中国网络安全产业联盟副秘书长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/d3fc25a6b3c84ebc98e154893a49ac40.jpg',
    name: '严明 ',
    content: '中国计算机学会计算机安全专委会荣誉主任',
  },
])
const specialList2 = ref([
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/4075600edb5c4360a406fa920ea32c86.jpg',
    name: '姚力',
    content: 'CNCERT 博士',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/517e9a9d04484be38c37f406dd3fb9c1.jpg',
    name: '叶红 ',
    content: '中国信息协会信息安全专业委员会主任',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/043e77f57ca444eea78c05f3e2ef7747.jpg',
    name: '张莹 ',
    content: '国家工业信息安全发展研究中心网络安全宣传部主任',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/9be725f9fc34436d8d0a701923f4a2e5.jpg',
    name: '沈 韵',
    content: '浙江省互联网协会副理事长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/63c23cf679a449ffb53a17bdef1115de.jpg',
    name: '傅正  ',
    content: '浙江省图灵互联网研究院院长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/beb377784b8a453b9a071a8565990e7e.jpg',
    name: '黄益超 ',
    content: '浙江省智慧城市促进会常务副秘书长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/c778d8425ec84a28aedef86301358333.jpg',
    name: '施雄伟',
    content: '杭州亚组委信息技术部副部长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/c9a9c9abb84a4a9da5cc4fb774cefa35.jpg',
    name: '许绍州 ',
    content: '浙江省委机要局原局长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/564e0c3b11904cc9a45af0b45c9c292c.jpg',
    name: '尹本臻  ',
    content: '浙江省数字经济联合会秘书长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/8c890dc751a949bdbe88165429b3032e.jpg',
    name: '郁全胜 ',
    content: '浙大城市学院城市大脑研究院副院长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/0d712721dba548e193e308a1f9fbbe3d.png',
    name: '冯燕春',
    content: '中国电子商会自主创新与安全技术委员会理事长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/73792f156e244136b258685ce2c26611.png',
    name: '杨建军',
    content: '全国信安标委秘书长、中国电子技术标准化研究院党委书记、副院长',
  },
])

// 移动端
const specialList3 = ref([
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/45d698748a394f6e923254d06ffdcc76.png',
    name: '左晓栋',
    content: '中国科学技术大学网络空间安全学院教授、科技人文高等研究院副院长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/416955f5d3a34eda8b95411dd0483065.jpg',
    name: '崔光耀 ',
    content: '《中国信息安全》杂志原主编',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/8dadced7bad74bd7b7e692957bc6f1d2.jpg',
    name: '顾炳中 ',
    content: '中国计算机用户协会理事长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/2f791d88ef5c42669d61dfb560ab484e.jpg',
    name: '李新友 ',
    content: '国家信息中心研究员',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/54400aca0eea438f822ebf3a059e43db.jpg',
    name: '曲胜 ',
    content: '中国能源研究会能源网络安全技术研究中心常务副主任',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/82f148791fda423aac58841930ca293c.jpg',
    name: '王秉政 ',
    content: '全国信安标委成员',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/e93465d2e3bf4d3d8f9cce134f7cceec.jpg',
    name: '许玉娜 ',
    content: '中国网络安全产业联盟副秘书长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/d3fc25a6b3c84ebc98e154893a49ac40.jpg',
    name: '严明 ',
    content: '中国计算机学会计算机安全专委会荣誉主任',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/4075600edb5c4360a406fa920ea32c86.jpg',
    name: '姚力',
    content: 'CNCERT 博士',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/517e9a9d04484be38c37f406dd3fb9c1.jpg',
    name: '叶红 ',
    content: '中国信息协会信息安全专业委员会主任',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/043e77f57ca444eea78c05f3e2ef7747.jpg',
    name: '张莹 ',
    content: '国家工业信息安全发展研究中心网络安全宣传部主任',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/9be725f9fc34436d8d0a701923f4a2e5.jpg',
    name: '沈 韵',
    content: '浙江省互联网协会副理事长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/63c23cf679a449ffb53a17bdef1115de.jpg',
    name: '傅正  ',
    content: '浙江省图灵互联网研究院院长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/beb377784b8a453b9a071a8565990e7e.jpg',
    name: '黄益超 ',
    content: '浙江省智慧城市促进会常务副秘书长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/c778d8425ec84a28aedef86301358333.jpg',
    name: '施雄伟',
    content: '杭州亚组委信息技术部副部长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/c9a9c9abb84a4a9da5cc4fb774cefa35.jpg',
    name: '许绍州 ',
    content: '浙江省委机要局原局长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/564e0c3b11904cc9a45af0b45c9c292c.jpg',
    name: '尹本臻  ',
    content: '浙江省数字经济联合会秘书长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/8c890dc751a949bdbe88165429b3032e.jpg',
    name: '郁全胜 ',
    content: '浙大城市学院城市大脑研究院副院长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/0d712721dba548e193e308a1f9fbbe3d.png',
    name: '冯燕春',
    content: '中国电子商会自主创新与安全技术委员会理事长',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/73792f156e244136b258685ce2c26611.png',
    name: '杨建军',
    content: '全国信安标委秘书长、中国电子技术标准化研究院党委书记、副院长',
  },
])

// 定义一个flag，用来控制是否显示全部
const flag = ref(false)
// 定义一个按钮名称
const buttonName = ref('查看更多')
/*
    定义一个方法来控制flag是否显示以及按钮的名称
*/
function changeFlag() {
  flag.value = !flag.value
  if (flag.value)
    buttonName.value = '收起'

  else
    buttonName.value = '查看更多'
}

// 日期数组
const dateList = ref([
  {
    date: '5',
    childList: [
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8e6f11e78dbd448a9522dbf57be6edd5.png',
        name: '梁文杰',
        position: '中国科学院物理所',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',
      },
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a2c694abc5a7432590191312242c94e5.png',
        name: '徐飞虎',
        position: '中国科学技术大学',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',
      },
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8e6f11e78dbd448a9522dbf57be6edd5.png',
        name: '梁文杰',
        position: '中国科学院物理所',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',
      },
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a2c694abc5a7432590191312242c94e5.png',
        name: '徐飞虎',
        position: '中国科学技术大学',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',
      },
    ],
  },
  {
    date: '6',
    childList: [
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/84685534901f4685851fa65aa0e6a32a.png',
        name: '梁文杰',
        position: '中国科学院物理所',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',
      },
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/35b1aef1ee3b44dcb2d6d2222014b223.png',
        name: '徐飞虎',
        position: '中国科学技术大学',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',

      },
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/84685534901f4685851fa65aa0e6a32a.png',
        name: '梁文杰',
        position: '中国科学院物理所',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',
      },
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/35b1aef1ee3b44dcb2d6d2222014b223.png',
        name: '徐飞虎',
        position: '中国科学技术大学',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',

      },
    ],
  },
  {
    date: '7',
    childList: [
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/f63d6ca43ae947a88c15f337527cc27b.jpg',
        name: '梁文杰',
        position: '中国科学院物理所',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',
      },
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/71fbce1648b04bf7a37a55bfa4d7ac7b.jpg',
        name: '徐飞虎',
        position: '中国科学技术大学',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',
      },
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/f63d6ca43ae947a88c15f337527cc27b.jpg',
        name: '梁文杰',
        position: '中国科学院物理所',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',
      },
      {
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/71fbce1648b04bf7a37a55bfa4d7ac7b.jpg',
        name: '徐飞虎',
        position: '中国科学技术大学',
        time: '5月5日 18:00 - 21:00',
        agenda: '格致论道@西湖论剑',

      },
    ],
  },
])
// 选中的日期的标记
const activeIndex = ref(0)
/*
    定义一个方法 选中日期
*/
function selectDate(index) {
  activeIndex.value = index
}
</script>

<template>
  <!-- PC端大咖云集 -->
  <div class="[#98EAF7] w-full from-[#8EEDF0] to-[#8EC4F7] from-10% to-90% via-30% bg-gradient-to-r pb50px max-md:hidden">
    <div class="ml10% mr10% h-full w-80%">
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        大咖云集
      </p>
      <div>
        <!-- 专家委员会 -->
        <p class="mb20px font-size-22px color-[#00B4BC] font-bold">
          专家委员会
        </p>
        <div class="flex flex-wrap justify-between">
          <div
            v-for="(item, index) in specialList" :key="index"
            class="mb15px h110px w22% flex items-center justify-between rounded-10px bg-[#fff] pl10px pr10px shadow-xl hover:bg-[#00B4BC] hover:color-[#fff]"
          >
            <img class="h-90px w-90px rounded-50%" :src="item.img" alt="">
            <div class="h-full flex flex-1 flex-col justify-center pl3% pr3%">
              <p class="h-40% w-full font-size-20px font-bold">
                {{ item.name }}
              </p>
              <p class="ellipsis font-size-14px">
                {{ item.content }}
              </p>
            </div>
          </div>
          <div
            v-for="(item, index) in specialList2" v-show="flag" :key="index"
            class="mb15px h110px w22% flex items-center justify-between rounded-10px bg-[#fff] pl10px pr10px shadow-xl hover:bg-[#00B4BC] hover:color-[#fff]"
          >
            <img class="h-90px w-90px rounded-50%" :src="item.img" alt="">
            <div class="h-full flex flex-1 flex-col justify-center pl3% pr3%">
              <p class="h-40% w-full font-size-20px font-bold">
                {{ item.name }}
              </p>
              <p class="ellipsis font-size-14px">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
        <div class="h60px flex items-center justify-center">
          <button
            class="h35px w100px rounded-10px bg-[#fff] font-size-14px color-[#00B4BC] hover:bg-[#00B4BC] hover:color-[#fff]"
            @click="changeFlag"
          >
            {{ buttonName }}
          </button>
        </div>
        <!-- 演讲嘉宾 -->
        <p class="mb20px font-size-22px color-[#00B4BC] font-bold">
          演讲嘉宾
        </p>
        <div class="mb20px h50% w-full">
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
                <span class="text-size-[18px]">{{ item.date }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-for="(item, index) in dateList" v-show="activeIndex === index" :key="index" class="flex justify-between">
          <div v-for="(item2, index2) in item.childList" :key="index2" class="sideBox mb15px h200px w22% flex flex-col items-center justify-evenly rounded-10px bg-[#fff] pl10px pr10px shadow-xl hover:bg-[#00B4BC] hover:color-[#fff]">
            <div class="w-full flex items-center justify-between">
              <img class="h-90px w-90px rounded-50%" :src="item2.img" alt="">
              <div class="h-full flex flex-1 flex-col justify-center pl3% pr3%">
                <p class="h-40% w-full font-size-20px font-bold">
                  {{ item2.name }}
                </p>
                <p class="ellipsis font-size-14px">
                  {{ item2.position }}
                </p>
              </div>
            </div>
            <p class="insideContent font-size-12px color-[#00B4BC] font-bold">
              时间：{{ item2.time }}
            </p>
            <p class="insideContent font-size-14px color-[#00B4BC] font-bold">
              会议：{{ item2.agenda }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 移动端大咖云集 -->
  <div class="[#98EAF7] w-full from-[#8EEDF0] to-[#8EC4F7] from-10% to-90% via-30% bg-gradient-to-r pb50px md:hidden">
    <div class="h-50px w-full flex items-center justify-center font-size-[18px] color-[#00B4BC] font-bold">
      大咖云集
    </div>
    <p class="h30px w-full flex items-center font-size-14px color-[#fff] font-bold">
      专家委员会 Expert Committee (专家排名不分先后)
    </p>
    <div class="w-full flex flex-wrap items-center justify-between">
      <div v-for="(item, index) in specialList3" :key="index" class="mb10px w-18% flex flex-col items-center justify-center bg-[#fff]">
        <img :src="item.img" alt="">
        <p class="font-size-12px">
          {{ item.name }}
        </p>
      </div>
    </div>
    <p class="h30px w-full flex items-center font-size-14px color-[#fff] font-bold">
      演讲嘉宾 Speakers
    </p>
  </div>
</template>

<style scoped>
.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
.sideBox:hover {
  .insideContent {
    color: #fff;
  }
}
</style>
