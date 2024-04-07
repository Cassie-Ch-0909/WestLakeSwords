<script setup>
import { ref } from 'vue'
import MoudleHeader from './MoudleHeader.vue'
import { checkAnswerAPI, getAnswerListAPI } from '@/apis/answer'
import { useUserStore } from '@/stores/user.js'

/*
    定义一个变量pptActiveIndex
*/
const pptActiveIndex = ref(-1)

// TODO1: 调接口获取答题列表
// 题目列表
const answerList = ref()
async function getAnswerList() {
  const res = await getAnswerListAPI()
  // console.log(res)
  answerList.value = res
}
getAnswerList()

/*
    定义一个方法来控制pptActiveIndex的值
*/
function pptActiveIndexAdd1(index) {
  pptActiveIndex.value = index + 1
  if (index === -2)
    getAnswerList()
}

// TODO2: 选择哪个选项
const optionActiveIndex = ref()
function changeOptionActiveIndex(index) {
  optionActiveIndex.value = index
}

// TODO3：调接口校对每题答案

const checkObj = ref({
  questionId: '',
  userAnswer: '',
})

const correctNumber = ref()

async function checkAnswer(obj) {
  const res = await checkAnswerAPI(obj)
  correctNumber.value = res.correctCount
  if (correctNumber.value === 5) {
    // TODO: 更新积分
    const userStore = useUserStore()
    userStore.getUserInfo()
  }
}

function gotoCheck(index) {
  // 跳到下一题
  checkObj.value.questionId = answerList.value[pptActiveIndex.value].id
  checkObj.value.userAnswer = answerList.value[pptActiveIndex.value].optionsList[optionActiveIndex.value]
  // console.log(checkObj.value)
  checkAnswer(checkObj.value)
  pptActiveIndexAdd1(index)
}
</script>

<template>
  <!-- 原始高度是h600px -->
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="趣味活动" />
    <!-- 开始答题 -->
    <div
      v-show="pptActiveIndex === -1"
      class="bg h580px w-full flex flex-col items-center bg-contain bg-left bg-no-repeat"
    >
      <p class="mt5% font-size-50px font-bold">
        网络安全知识竞赛
      </p>
      <p class="mt2% font-size-50px font-bold">
        西湖论剑
      </p>
      <button class="mt15% h8% w-15% rounded-10px bg-#2B7BBB color-#fff shadow-2xl" @click="pptActiveIndexAdd1(-1)">
        开始答题
      </button>
    </div>
    <div
      v-for="(item, index) in answerList" v-show="pptActiveIndex === index" :key="index"
      class="bg2 h520px w-full flex flex-col items-center bg-contain bg-left bg-no-repeat"
    >
      <p class="mt5% font-size-30px color-#00B4BC font-bold">
        题目{{ index + 1 }}
      </p>
      <p class="mt2% font-size-20px font-bold">
        {{ item.title }}
      </p>
      <div class="flex flex-wrap justify-center">
        <button class="custom-btn btn-7 mt2% flex" @click="changeOptionActiveIndex(0)">
          <span>A.&nbsp;&nbsp;&nbsp;&nbsp;{{ item.optionsList[0] }}</span>
        </button>
        <button class="custom-btn btn-7 mt2% flex" @click="changeOptionActiveIndex(1)">
          <span>B.&nbsp;&nbsp;&nbsp;&nbsp;{{ item.optionsList[1] }}</span>
        </button><br>
        <button class="custom-btn btn-7 mt2% flex" @click="changeOptionActiveIndex(2)">
          <span>C.&nbsp;&nbsp;&nbsp;&nbsp;{{ item.optionsList[2] }}</span>
        </button>
        <button class="custom-btn btn-7 mt2% flex" @click="changeOptionActiveIndex(3)">
          <span>D.&nbsp;&nbsp;&nbsp;&nbsp;{{ item.optionsList[3] }}</span>
        </button>
      </div>
      <div class="mt5% w-full flex justify-center">
        <button class="mr5% h50px w20% rounded-10px bg-yellow">
          上一题
        </button>
        <button class="h50px w20% rounded-10px bg-yellow" @click="gotoCheck(index)">
          {{ pptActiveIndex === 4 ? '提交' : '下一题' }}
        </button>
      </div>
    </div>
    <div
      v-show="pptActiveIndex === 5"
      class="bg7 h520px w-full flex flex-col items-center bg-contain bg-left bg-no-repeat"
    >
      <p class="mt10% font-size-30px font-bold">
        答题完成
      </p>
      <p class="mt2% font-size-50px color-green font-bold">
        恭喜您，答对{{ correctNumber }}题。获得{{ correctNumber === 5 ? 10 : 0 }}积分
      </p>
      <div class="mt5% w-full flex justify-center">
        <button class="mr5% h50px w20% rounded-10px bg-yellow">
          查看题目列表
        </button>
        <button class="h50px w20% rounded-10px bg-yellow" @click="pptActiveIndexAdd1(-2)">
          再来一次
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('/public/answer/1.jpg');
}

.bg2 {
  background-image: url('/public/answer/8.jpg');
}

.bg3 {
  background-image: url('/public/answer/9.jpg');
}

.bg4 {
  background-image: url('/public/answer/10.jpg');
}

.bg5 {
  background-image: url('/public/answer/11.jpg');
}

.bg6 {
  background-image: url('/public/answer/12.jpg');
}

.bg7 {
  background-image: url('/public/answer/3.jpg');
}

.custom-btn {
  width: 365px;
  height: 58px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  margin-bottom: 5px;
  margin-right: 2%;
}

.btn-7 {
  background: linear-gradient(
    0deg,
    rgba(165, 216, 255) 0%,
    rgba(0, 126, 216) 100%
  );
  line-height: 58px;
  padding: 0;
  border: none;
}

.btn-7 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-7:before,
.btn-7:after {
  position: absolute;
  content: '';
  right: 0;
  bottom: 0;
  background: rgba(0, 126, 216);
  box-shadow:
    -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2),
    4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.btn-7:before {
  height: 0%;
  width: 2px;
}

.btn-7:after {
  width: 0%;
  height: 2px;
}

.btn-7:focus {
  color: rgba(0, 126, 216);
  background: transparent;
}

.btn-7:hover {
  color: rgba(0, 126, 216);
  background: transparent;
}

.btn-7:hover:before {
  height: 100%;
}

.btn-7:hover:after {
  width: 100%;
}

.btn-7:focus:before {
  height: 100%;
}

.btn-7:focus:after {
  width: 100%;
}

.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  background: rgba(0, 126, 216);
  box-shadow:
    -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2),
    4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.btn-7 span:before {
  width: 2px;
  height: 0%;
}

.btn-7 span:after {
  height: 2px;
  width: 0%;
}

.btn-7 span:hover:before {
  height: 100%;
}

.btn-7 span:hover:after {
  width: 100%;
}

.btn-7 span:focus:before {
  height: 100%;
}

.btn-7 span:focus:after {
  width: 100%;
}
</style>
