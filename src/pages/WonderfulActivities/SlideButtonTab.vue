<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SudokuImageAnimation from './SudokuImageAnimation.vue'

// const btnList = Array.from({ length: 6 }).fill(0)
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
const contentPaddingLeft = 16
const btnMarginLeftRight = 8
let btnWidth = 0

const contentRef = ref<HTMLDivElement | null>(null)
const activedBtnIndex = ref<number>(0)

function onBtnClick(index: number) {
  if (contentRef.value && activedBtnIndex.value !== index) {
    const left = `${contentPaddingLeft + btnWidth * index + index * btnMarginLeftRight * 2
      }px`
    contentRef.value.style.setProperty('--groove-left', left)

    let rotate = '0deg'
    if (index < activedBtnIndex.value)
      rotate = '-8deg'
    else
      rotate = '8deg'

    contentRef.value.style.setProperty('--wraper-rotate', rotate)
    window.setTimeout(() => {
      if (contentRef.value)
        contentRef.value.style.setProperty('--wraper-rotate', '0deg')
    }, 600)

    activedBtnIndex.value = index
  }
}

onMounted(() => {
  if (contentRef.value) {
    const { width } = contentRef.value.getBoundingClientRect()
    btnWidth
      = (width
      - contentPaddingLeft * 2
      - (btnList.value.length * 2 - 2) * btnMarginLeftRight)
      / btnList.value.length
    contentRef.value.style.setProperty('--btnWidth', `${btnWidth}px`)
  }
})
</script>

<template>
  <div style="width: 100%" class="flex items-center">
    <div class="animation-delay-1 animate__slideInLeft wow animate-duration-2500">
      <div class="container">
        <ModuleTitle i18n-title="page.htmlVision.interactiveDesign.swipeTab" />
        <div ref="contentRef" class="content from-[#00B4BC] to-[#2FABF3] bg-gradient-to-t">
          <div
            v-for="(item, index) in btnList" :key="index" class="btn22" :class="{ actived: activedBtnIndex === index }"
            @click="() => onBtnClick(index)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <div v-for="(item, index) in btnList" v-show="activedBtnIndex === index" :key="index">
        <div v-for="(item2, index2) in item.list" :key="index2" class="mt20px h300px w-full flex" :class="index2 % 2 === 1 ? ' justify-end' : ' justify-start'">
          <div class="h-full w90% flex bg-white">
            <div v-if="index2 % 2 === 0" class="h-full w50%">
              <img :src="item2.img" alt="" class="h-full w-full">
            </div>
            <div v-if="index2 % 2 === 0" class="h-full w50% p20px">
              <div class="h-30% w-full flex items-center justify-between">
                <span class="w60% font-size-20px font-bold">{{ item2.name }}</span>
                <span class="h20px w85px flex items-center justify-center rounded-10px bg-[#E6F5F7] font-size-12px color-[#00B4C1] font-bold">+订阅</span>
              </div>
              <div class="ellipsis h-57% w-full font-size-14px">
                {{ item2.content }}
              </div>
              <div class="h13% w-full flex items-center justify-between">
                <span class="font-size-13px color-[#00B4BC] font-bold">{{ item2.time }}</span>
                <span class="mr20px h28px w100px flex items-center justify-center border-2px border-[#00B4BC] rounded-15px bg-[#fff] font-size-14px color-[#00B4BC] font-bold hover:bg-[#00B4BC] hover:color-[#fff]">了解详情</span>
              </div>
            </div>
            <div v-if="index2 % 2 === 1" class="h-full w50% p20px">
              <div class="h-30% w-full flex items-center justify-between">
                <span class="w60% font-size-20px font-bold">{{ item2.name }}</span>
                <span class="h20px w85px flex items-center justify-center rounded-10px bg-[#E6F5F7] font-size-12px color-[#00B4C1] font-bold">+订阅</span>
              </div>
              <div class="ellipsis h-57% w-full font-size-14px">
                {{ item2.content }}
              </div>
              <div class="h13% w-full flex items-center justify-between">
                <span class="font-size-13px color-[#00B4BC] font-bold">{{ item2.time }}</span>
                <span class="mr20px h28px w100px flex items-center justify-center border-2px border-[#00B4BC] rounded-15px bg-[#fff] font-size-14px color-[#00B4BC] font-bold hover:bg-[#00B4BC] hover:color-[#fff]">了解详情</span>
              </div>
            </div>
            <div v-if="index2 % 2 === 1" class="h-full w50%">
              <img :src="item2.img" alt="" class="h-full w-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-image: url('https://www.gcsis.cn/img/activity_bg1.png');
}

.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 7;
  text-overflow: ellipsis;
}
.container {
  width: 100%;
  height: 100px;
  display: flex;
  // justify-content: center;
  align-items: center;
  perspective: 500px;
  position: relative;

  $contentPaddingTop: 20px;
  $contentPaddingLeft: 16px;
  $btnMarginLeftRight: 8px;

  .content {
    @property --groove-left {
      syntax: '<length>';
      initial-value: $contentPaddingLeft;
      inherits: false;
    }

    @property --wraper-rotate {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @property --btnWidth {
      syntax: '<length>';
      initial-value: 0px;
      inherits: false;
    }

    position: relative;
    width: 1200px;
    height: 80px;
    padding: $contentPaddingTop $contentPaddingLeft;
    border-radius: 12px;
    overflow: hidden;
    // background-color: #5ee0f9;
    box-shadow:
      -10px -10px 15px #fff,
      10px 10px 15px #fff;
    display: flex;
    justify-content: space-between;
    transform-origin: center; // 添加转换原点
    transition: transform 0.4s cubic-bezier(0, 0, 0.48, 1); // 添加过渡效果
    transform: rotateY(var(--wraper-rotate)); // 添加Y轴旋转

    &::before {
      content: '';
      position: absolute;
      left: var(--groove-left, $contentPaddingLeft);
      top: $contentPaddingTop;
      width: var(--btnWidth);
      height: calc(100% - ($contentPaddingTop * 2));
      border-radius: 12px;
      box-shadow:
        inset 8px 8px 6px #d9dce6,
        inset -5px -5px 15px #f5f9fd,
        inset -5px -5px 15px #f5f9fd,
        inset 7px 7px 6px #d9dce6;
      transition: left 0.8s cubic-bezier(0.82, 0.12, 0.18, 0.88); // 添加过渡效果，贝塞尔曲线
    }

    .btn22 {
      display: flex;
      width: var(--btnWidth);
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      user-select: none;
      transition: color 1.2s linear 0.4s; // 添加文字颜色过渡效果
      animation: txtOutScale 0.6s linear; // 添加按钮未选中动画

      &:not(:first-child) {
        margin-left: $btnMarginLeftRight;
      }

      &:not(:last-child) {
        margin-right: $btnMarginLeftRight;
      }
    }

    .actived {
      color: #111 !important;
      transform: scale(1.1); // 修改选中状态原始缩放为1.1
      animation: txtEnterScale 1s linear; // 添加按钮选中动画
    }

    /* 按钮选中缩放动画 */
    @keyframes txtEnterScale {
      0%,
      30% {
        transform: scale(1);
      }

      80% {
        transform: scale(1.15);
      }

      100% {
        transform: scale(1.1);
      }
    }

    /* 按钮未选中缩放动画 */
    @keyframes txtOutScale {
      0%,
      30% {
        transform: scale(1.1);
      }

      80% {
        transform: scale(0.95);
      }

      100% {
        transform: scale(1);
      }
    }
  }
}
</style>
