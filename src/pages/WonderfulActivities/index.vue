<script setup>
import SlideButtonTab from './SlideButtonTab.vue'

const btnList = ref([
  {
    title: '全部',
    list: [
      {
        name: '格致论道@西湖论剑',
        img: '/public/activity/1.webp',
        content: ' “格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。',
        time: '2023-05-05 18:30 - 21:45',
        num: 1280,
      },
      {
        name: '西湖论剑安全特训营·网络攻防蓝队实战技法进阶班',
        img: '/public/activity/2.webp',
        content: ' 本次培训面向网络安全从业人员，特别是负责网络安全防护的蓝队人员，以及有意向从事蓝队工作的人员。 培训所需具备的基础能力：应具备网络安全的基本知识，了解常见的网络攻击手法和防御策略，掌握基本的漏洞分析、利用和防御技能，能够进行简单的应急响应和取证分析。',
        time: '2023-05-04 09:00 - 18:00',
      },
      {
        name: '西湖论剑安全特训营·数字安全官高级研修班',
        img: '/public/wonderfulActivity/1.jpg',
        content: ' 作为整个企业安全治理结构的设计者和践行人，数字安全官即需要了解国家、行业合规需求与发展趋势，还要洞悉数字经济背景下企业所需的安全能力，协助企业提升安全能力建设的成熟度。本次培训以塑造数字化转型思维为出发点，结合数字经济发展与数据要素价值，协助数字安全官找准数字化转型的痛点与具体对策；从对抗、运营、管理多维度入手建立完善的数据安全管理体系，确保数据要素在数据生命周期各阶段的安全；进一步深化数字化产业人才能力，培养其看待风险的宏观视野，提升企业安全管理者的数字化素养。 ',
        time: '2023-05-04 09:00 - 18:00',
      },
      {
        name: '新·见未来 实·现梦想',
        img: '/public/wonderfulActivity/2.png',
        content: '今年是习近平总书记提出“八八战略”实施的20周年，是杭州亚运会举办之年，是数字浙江建设20周年,同时也是西湖论剑网络安全大会迈向第二个十年的起始之年。作为西湖论剑系列预热活动之一，此次新品发布会将突出西湖论剑新十年的目标——“聚焦科技，强化成果输出”，重点呈现三大亮点。  ■  亮点一：西湖论剑预热活动之一，擦亮西湖论剑新十年“金名片”；  ■ 亮点二：首次大规模集中发布新品，行业罕见；  ■ 亮点三：围绕“新”字讲透，新方向、新进展、新产品、新技术、新模式，奏响前沿之声',
        time: '2023-04-19 13:30 - 17:00',
        num: 478,
      },
      {
        name: '新品发布日（精彩预告）',
        img: '/public/wonderfulActivity/3.jpg',
        content: ' 4月19日，以“新·见未来 实·现梦想”为主题的安恒信息首次年度新品发布会即将举行，来自产业界、投资界、财经界、媒体界等多方代表将共同见证。这是安恒信息自成立以来，首次大规模高密度地发布新品。',
        time: '2023-04-18 09:00 - 09:30',
        num: 20,
      },
      {
        name: '第二直播间-1',
        img: '/public/wonderfulActivity/4.jpeg',
        content: '本期嘉宾：左晓栋教授 中国科学技术大学公共事务学院、网络空间安全学院',
        time: '2022-07-07 14:00 - 14:30',
        num: 9,
      },
      {
        name: '第二直播间-2',
        img: '/public/wonderfulActivity/5.jpeg',
        content: '本期嘉宾：尤其 中国网络安全审查技术与认证中心 培训与人员认证部副主任、黄玉钏 应急管理部大数据中心网络安全部负责人',
        time: '2022-07-05 14:00 - 15:00 ',
        num: 21,
      },
      {
        name: '第二直播间-3',
        img: '/public/wonderfulActivity/6.jpeg',
        content: '本期嘉宾：段平霞 安恒信息高级副总裁、崔光耀 中国信息安全原副社长、主编',
        time: '2022-07-04 14:00 - 15:00',
        num: 0,
      },
      {
        name: '小强实验室',
        img: '/public/wonderfulActivity/7.jpg',
        content: '擦亮眼睛，智能家居有安全风险，小强实验室探秘，“安全屋”里的奥秘。',
        time: '2022-07-04 14:00 - 15:00',
        num: 39,
      },
      {
        name: '新时代青年科学家安全观对话',
        img: '/public/wonderfulActivity/8.jpg',
        content: '元宇宙是一个新概念吗？新技术下安全要怎么做？他们带着答案来了！',
        time: '2022-06-28 14:00 - 15:00 ',
        num: 345,
      },
      {
        name: '光明网AI主播精彩专访——西湖论剑·安全对话',
        img: '/public/wonderfulActivity/9.jpg',
        content: '“网安”与“医学”话攻防 跨次元漫谈病毒',
        time: '2022-06-27 10:00 - 11:00 ',
        num: 60,
      },
      {
        name: '今夜不破防',
        img: '/public/wonderfulActivity/10.jpg',
        content: '互联网上撒过最大的谎是什么？民间隐私保护小妙招靠谱吗？网络诈骗为何就在身边？绝地反击，就在今夜。',
        time: '2022-06-24 10:00 - 11:00  ',
        num: 41,
      },
      {
        name: '西湖论剑的十个维度',
        img: '/public/wonderfulActivity/11.png',
        content: '2023年，西湖论剑迈入新十年，奋进十年，持续精进，新篇将起，邀君从高度、力度、厚度、精度……十个维度，共鉴大会。',
        time: '2023-04-12',
      },
      {
        name: '十周年精华特刊',
        img: '/public/wonderfulActivity/12.jpg',
        content: '十周年精华特刊',
        time: '2023-04-03 00:00 - 00:00 ',
      },
    ],
  },
  {
    title: '格致论道',
    list: [
      {
        name: '格致论道@西湖论剑',
        img: '/public/activity/1.webp',
        content: ' “格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。',
        time: '2023-05-05 18:30 - 21:45',
        num: 1280,
      },
    ],
  },
  {
    title: '安全特训营',
    list: [
      {
        name: '西湖论剑安全特训营·网络攻防蓝队实战技法进阶班',
        img: '/public/activity/2.webp',
        content: ' 本次培训面向网络安全从业人员，特别是负责网络安全防护的蓝队人员，以及有意向从事蓝队工作的人员。 培训所需具备的基础能力：应具备网络安全的基本知识，了解常见的网络攻击手法和防御策略，掌握基本的漏洞分析、利用和防御技能，能够进行简单的应急响应和取证分析。',
        time: '2023-05-04 09:00 - 18:00',
      },
      {
        name: '西湖论剑安全特训营·数字安全官高级研修班',
        img: '/public/wonderfulActivity/1.jpg',
        content: ' 作为整个企业安全治理结构的设计者和践行人，数字安全官即需要了解国家、行业合规需求与发展趋势，还要洞悉数字经济背景下企业所需的安全能力，协助企业提升安全能力建设的成熟度。本次培训以塑造数字化转型思维为出发点，结合数字经济发展与数据要素价值，协助数字安全官找准数字化转型的痛点与具体对策；从对抗、运营、管理多维度入手建立完善的数据安全管理体系，确保数据要素在数据生命周期各阶段的安全；进一步深化数字化产业人才能力，培养其看待风险的宏观视野，提升企业安全管理者的数字化素养。 ',
        time: '2023-05-04 09:00 - 18:00',
      },
    ],
  },
  {
    title: '新品发布',
    list: [
      {
        name: '新·见未来 实·现梦想',
        img: '/public/wonderfulActivity/2.png',
        content: '今年是习近平总书记提出“八八战略”实施的20周年，是杭州亚运会举办之年，是数字浙江建设20周年,同时也是西湖论剑网络安全大会迈向第二个十年的起始之年。作为西湖论剑系列预热活动之一，此次新品发布会将突出西湖论剑新十年的目标——“聚焦科技，强化成果输出”，重点呈现三大亮点。  ■  亮点一：西湖论剑预热活动之一，擦亮西湖论剑新十年“金名片”；  ■ 亮点二：首次大规模集中发布新品，行业罕见；  ■ 亮点三：围绕“新”字讲透，新方向、新进展、新产品、新技术、新模式，奏响前沿之声',
        time: '2023-04-19 13:30 - 17:00',
        num: 478,
      },
      {
        name: '新品发布日（精彩预告）',
        img: '/public/wonderfulActivity/3.jpg',
        content: ' 4月19日，以“新·见未来 实·现梦想”为主题的安恒信息首次年度新品发布会即将举行，来自产业界、投资界、财经界、媒体界等多方代表将共同见证。这是安恒信息自成立以来，首次大规模高密度地发布新品。',
        time: '2023-04-18 09:00 - 09:30',
        num: 20,
      },
    ],
  },
  {
    title: '第二直播间',
    list: [
      {
        name: '第二直播间-1',
        img: '/public/wonderfulActivity/4.jpeg',
        content: '本期嘉宾：左晓栋教授 中国科学技术大学公共事务学院、网络空间安全学院',
        time: '2022-07-07 14:00 - 14:30',
        num: 9,
      },
      {
        name: '第二直播间-2',
        img: '/public/wonderfulActivity/5.jpeg',
        content: '本期嘉宾：尤其 中国网络安全审查技术与认证中心 培训与人员认证部副主任、黄玉钏 应急管理部大数据中心网络安全部负责人',
        time: '2022-07-05 14:00 - 15:00 ',
        num: 21,
      },
      {
        name: '第二直播间-3',
        img: '/public/wonderfulActivity/6.jpeg',
        content: '本期嘉宾：段平霞 安恒信息高级副总裁、崔光耀 中国信息安全原副社长、主编',
        time: '2022-07-04 14:00 - 15:00',
        num: 0,
      },
    ],
  },
  {
    title: '掌上论剑',
    list: [
      {
        name: '小强实验室',
        img: '/public/wonderfulActivity/7.jpg',
        content: '擦亮眼睛，智能家居有安全风险，小强实验室探秘，“安全屋”里的奥秘。',
        time: '2022-07-04 14:00 - 15:00',
        num: 39,
      },
      {
        name: '新时代青年科学家安全观对话',
        img: '/public/wonderfulActivity/8.jpg',
        content: '元宇宙是一个新概念吗？新技术下安全要怎么做？他们带着答案来了！',
        time: '2022-06-28 14:00 - 15:00 ',
        num: 345,
      },
      {
        name: '光明网AI主播精彩专访——西湖论剑·安全对话',
        img: '/public/wonderfulActivity/9.jpg',
        content: '“网安”与“医学”话攻防 跨次元漫谈病毒',
        time: '2022-06-27 10:00 - 11:00 ',
        num: 60,
      },
      {
        name: '今夜不破防',
        img: '/public/wonderfulActivity/10.jpg',
        content: '互联网上撒过最大的谎是什么？民间隐私保护小妙招靠谱吗？网络诈骗为何就在身边？绝地反击，就在今夜。',
        time: '2022-06-24 10:00 - 11:00  ',
        num: 41,
      },
    ],
  },
  {
    title: '十周年回顾',
    list: [
      {
        name: '西湖论剑的十个维度',
        img: '/public/wonderfulActivity/11.png',
        content: '2023年，西湖论剑迈入新十年，奋进十年，持续精进，新篇将起，邀君从高度、力度、厚度、精度……十个维度，共鉴大会。',
        time: '2023-04-12',
      },
      {
        name: '十周年精华特刊',
        img: '/public/wonderfulActivity/12.jpg',
        content: '十周年精华特刊',
        time: '2023-04-03 00:00 - 00:00 ',
      },
    ],
  },
])
</script>

<template>
  <!-- PC端精彩活动 -->
  <div class="[#98EAF7] w-full from-[#8EEDF0] to-[#8EC4F7] from-10% to-90% via-30% bg-gradient-to-r pb50px max-md:hidden">
    <div class="ml10% mr10% h-full w-80%">
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        精彩活动
      </p>
      <SlideButtonTab />
    </div>
  </div>
  <!-- 移动端精彩活动 -->
  <div class="[#98EAF7] w-full pb50px md:hidden">
    <div class="h-50px w-full flex items-center justify-center font-size-[18px] color-[#00B4BC] font-bold">
      精彩活动
    </div>
    <div class="w-full md-hidden">
      <div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane v-for="(item, index) in btnList" :key="index" class="w-full" :label="item.title" :name="item.name">
            <div v-for="(item2, index2) in item.list" :key="index2" class="mb10px h100px w-full flex">
              <div class="h-full w-50%">
                <img :src="item2.img" alt="" class="h-full w-full">
              </div>
              <div class="h-full w50% flex flex-col bg-[#EFFBFF] p10px">
                <div class="h50% w-full font-size-14px font-bold">
                  {{ item2.name }}
                </div>
                <div class="item-center mt5px h20% w-full flex font-size-10px">
                  {{ item2.time }}
                </div>
                <div class="w-full flex flex-1 items-center justify-end">
                  <span class="mr5px h-80% w30% flex items-center justify-center rounded-10px bg-[#00B4BC] font-size-10px color-[#fff]">了解详情</span>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
