<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SudokuImageAnimation from './SudokuImageAnimation.vue'

// const btnList = Array.from({ length: 6 }).fill(0)
const btnList = ref([
  {
    title: '格致论道',
    img: '/activity/1.webp',
    sumer: '让“圈外人”关注网络安全，让“冷”科普做到“热”传播',
    content: '5月4-6日 西湖论剑安全特训营是国内领先的数字安全人才交流、孵化及实训平台，致力于成为数字时代的“数字安全人才助推器”。',
  },
  {
    title: '安全特训营',
    img: '/activity/2.webp',
    sumer: '数字安全人才助推器',
    content: '5月5日 18:30 \'格致论道\'是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以\'格物致知\'的精神探讨科技、教育、生活、未来的发展。',
  },
  {
    title: '新品发布',
    img: '/activity/3.webp',
    sumer: '最新研究成果发布会',
    content: '以体系化课程、实战化导向为显著特色，服务于数字化转型背景下的政府、企事业单位，为其培养数字安全的管理者、实战人才提供有力支撑，为国家数字安全人才发展持续输出强有力的“燃料”。',
  },
  {
    title: '第二直播间',
    img: '/activity/4.jpg',
    sumer: '创新内容形式,立体化开展宣传',
    content: '一次掌上场景搭建下的即时性交流；身临其境的参与感，精彩看点的抢先看；行业专家、观点嘉宾在线解读核心观点；更有大会成果密集输出，限定款宠粉福利',
  },
  {
    title: '掌上论剑',
    img: '/activity/6.jpg',
    sumer: '线下“精致”、线上“亮眼”',
    content: '以西湖论剑官网为载体，精心策划“掌上论剑”系列活动，推出“点亮网安，守护城市”、“ 守护每一份网安愿景”等互动活动，《今夜不破防》、《十日谈》、《新时代安全观对话》等亮点节目，打造一档精彩、有趣的掌上论剑特色节目。',
  },
  {
    title: '十周年回顾',
    img: '/activity/5.webp',
    sumer: '十年磨一剑',
    content: '2022年第十届西湖论剑·网络安全大会，十年磨一剑，向世界递出一张具有全球影响力、全国引领力、浙江辨识度的网络安全大会金名片。',
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
        <div ref="contentRef" class="content from-[#70E9E4] to-[#0EBEFF] bg-gradient-to-b">
          <div
            v-for="(item, index) in btnList" :key="index" class="btn22" :class="{ actived: activedBtnIndex === index }"
            @click="() => onBtnClick(index)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <div
        v-for="(item, index) in btnList" v-show="activedBtnIndex === index" :key="index"
        class="mt-[15px] h-[270px] w-[900px] flex bg-red"
      >
        <div class="h-full w-[900px] bg-yellow">
          <img :src="item.img" class="h-full w-full">
        </div>
        <div class="h-full w60% flex flex-col bg-[#F5F7FA] p2%">
          <p class="font-size-[30px] font-bold">
            {{ item.title }}
          </p>
          <p class="pt-[5px] font-size-[20px] color-[#3EB8C5] font-bold">
            {{ item.sumer }}
          </p>
          <p class="pt-[10px] font-size-[14.5px]">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center">
      <el-button type="primary" plain class="animation-delay-1 wow animate__slideInRight mt-[70px] w-50% animate-duration-2500">
        查看详情+
      </el-button>
      <SudokuImageAnimation class="animation-delay-1 wow animate__slideInRight animate-duration-2500" />
    </div>
  </div>
</template>

<style scoped lang="scss">
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
    width: 900px;
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
      color: #444;
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
