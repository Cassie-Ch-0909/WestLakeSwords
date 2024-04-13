<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getAgendaByIdAPI } from '@/apis/agenda'
import {
  addChildCommentAPI,
  addCommentAPI,
  getChildCommentsByParentCommentIdAPI,
  getCommentByLikeAPI,
  getCommentByTimeAPI,
  getCommentDetailsByCommentIdAPI,
  getCommentNumberByAgendaIdAPI,
  likeForParentCommentAPI,
} from '@/apis/comment'
import { loginDialogFlagStore } from '@/stores/loginDialogFlag.js'
import { useUserStore } from '@/stores/user.js'
import { useLoginStatusStore } from '@/stores/loginStatus.js'

const loginDialogVisibleStore = loginDialogFlagStore()
const loginStatusStore = useLoginStatusStore()

const firstCommentList = ref([
  {
    avator: '/public/firstComment/1.jpg',
    comment: '西湖论剑网络安全大会是一场引领行业发展的盛会!',
    name: '云端遗梦录',
    time: '2023-09-20 10:00:00',
    like: 434,
  },
  {
    avator: '/public/firstComment/2.jpg',
    comment:
      '大会汇聚了业界顶尖专家和企业，共同探讨前沿技术和解决方案，为推动网络安全发展做出了积极贡献。',
    name: '我要月亮奔我而来',
    time: '2023-09-20 13:33:30',
    like: 90,
  },
])

const firstCommentList2 = ref([
  {
    avator: '/public/firstComment/3.jpg',
    comment: '会议内容丰富多样，让参会者全面了解行业动态和最新趋势。',
    name: '星河暗恋记',
    time: '2023-09-20 10:00:00',
    like: 434,
  },
  {
    avator: '/public/firstComment/4.jpg',
    comment: '大会的组织和安排高效有序',
    name: '月野氿桃',
  },
  {
    avator: '/public/firstComment/5.jpg',
    comment: '演讲嘉宾们的专业水平和丰富经验让人受益匪浅',
    name: '星星跌入梦境',
  },
  {
    avator: '/public/firstComment/6.jpg',
    comment:
      '西湖论剑网络安全大会的影响力不断扩大，已成为国内网络安全领域的标志性活动，他们的观点和建议对提升网络安全具有重要指导意义。',
    name: '桃奈叶子',
  },
  {
    avator: '/public/firstComment/7.jpg',
    comment:
      '大会关注热点问题，探讨解决方案，为应对网络安全挑战提供了有益的思路和方法。',
    name: '知更鸟的死因',
  },
  {
    avator: '/public/firstComment/8.jpg',
    comment:
      '会议的举办有助于提高公众对网络安全的认识和重视程度，促进全社会共同参与网络安全建设。大会的专业性和权威性得到了业界的广泛认可，是网络安全从业者不可错过的盛会。',
    name: '放鹤归舟',
  },
  {
    avator: '/public/firstComment/9.jpg',
    comment:
      '西湖论剑网络安全大会展示了最新的技术成果和创新应用，推动了网络安全技术的进步和应用落地。',
    name: '春日樱亭',
  },
  {
    avator: '/public/firstComment/10.jpg',
    comment:
      '大会的专业性和权威性得到了业界的广泛认可，是网络安全从业者不可错过的盛会。',
    name: '宇宙热恋期',
  },
  {
    avator: '/public/firstComment/11.jpg',
    comment:
      '会议的成功举办离不开主办方的精心筹备和辛勤付出，向他们表示衷心的感谢和赞美。',
    name: '今夜星潮暗涌',
  },
  {
    avator: '/public/firstComment/12.jpg',
    comment:
      '期待西湖论剑网络安全大会继续发挥引领作用，为网络安全事业的发展注入新的活力和动力。',
    name: '与银河邂逅',
  },
])

/*
    实现多条评论的展开和收缩
*/
const isShowNextCommentsFlag = ref(false)
function changeIsShowNextCommentsFlag() {
  isShowNextCommentsFlag.value = !isShowNextCommentsFlag.value
}
const route = useRoute()

/*
    定义一个变量用来切换最热还是最新 默认是最热
*/
const activeGetMethod = ref(0)
function changeActiveGetMethod(index) {
  activeGetMethod.value = index
  getAgendaById(route.query.id)
}

// TODO: 最热评论
// 根据AgendaId获取的评论列表
const commentList = ref([])

// TODO2：调获取评论接口
async function getAgendaCommentByLike(id) {
  const res = await getCommentByLikeAPI(id)
  commentList.value = res.data
  /*
      将通过大会Id获取到的评论数组进行遍历
      将item.id作为父评论id，调用getChildCommentsByParentCommentIdAPI接口获取子评论
      给每条评论新增一个child属性，它的值就是发请求获取的子评论
  */
  commentList.value.forEach(async (item) => {
    const res = await getChildCommentsByParentCommentIdAPI(item.id)
    item.child = res.data
  })
}

// TODO3: 发请求获取会议信息
function getAgendaById(id) {
  getAgendaByIdAPI(id).then((res) => {
    if (activeGetMethod.value === 0)
      getAgendaCommentByLike(res.data.id)
    else getAgendaCommentByTime(res.data.id)
  })
}
getAgendaById(route.query.id)

// // TODO: 根据token判断用户是否登录
const userStore = useUserStore()
// TODO：从pinia中拿出token的值判断当前是否处于登陆状态 使用v-if判断 登录|注册 还是 个人中心
const token = ref('')
token.value = userStore.token
// console.log(token.value)
// 如果token有值 那么loginFlag就是true
// const loginFlag = ref(false);
if (token.value)
  loginStatusStore.changeLoginStatusFlagTrue()

// watch监听登陆状态的改变 实现评论区的刷新
watch(
  () => loginStatusStore.loginStatusFlag,
  (newValue) => {
    if (newValue)
      getAgendaById(route.query.id)
  },
  { immediate: true, deep: true },
)

/*
    获取路由参数赋值给agendaId
    获取输入框输入的内容赋值给content
*/
const myComment = ref()
const addCommentObj = ref({
  agendaId: route.query.id,
  content: myComment,
})
// TODO：调取新增评论接口
async function addComment(obj) {
  await addCommentAPI(obj)
  ElMessage({
    message: '发送成功',
    type: 'success',
  })
  await getAgendaById(route.query.id)
}

/*
    当用户未登录的时候，点击发送按钮，跳出登陆注册的弹框
*/
function sendWhenLogOut() {
  loginDialogVisibleStore.changeLoginDialogFlagTrue()
}

/*
    当用户登录的时候，点击发送按钮，增加一条评论，清空输入框
*/
function sendWhenLogin() {
  addComment(addCommentObj.value)
  myComment.value = ''
}

// TODO：最新评论

// TODO: 调接口获取根据时间查询的评论列表
async function getAgendaCommentByTime(agendaId) {
  const res = await getCommentByTimeAPI(agendaId)
  commentList.value = res.data
  commentList.value.forEach(async (item) => {
    const res = await getChildCommentsByParentCommentIdAPI(item.id)
    item.child = res.data
  })
}

// TODO：调接口获取评论总数
const totalComments = ref()
async function getCommentNumberByAgendaId(agendaId) {
  const res = await getCommentNumberByAgendaIdAPI(agendaId)
  // console.log(res)
  totalComments.value = res.data
}
getCommentNumberByAgendaId(route.query.id)

// TODO：调接口根据评论Id获取评论详情
const commentDetails = ref()
const placeholder = ref()
async function getCommentDetailsByCommentId(commentId, index) {
  const res = await getCommentDetailsByCommentIdAPI(commentId)
  // console.log(res)
  commentDetails.value = res
  commentList.value[index].isLike = commentDetails.value.isLike
  commentList.value[index].likeCount = commentDetails.value.likeCount
  if (commentList.value[index].isLike) {
    ElMessage({
      message: '点赞成功',
      type: 'success',
    })
  }
  else {
    ElMessage({
      message: '取消点赞',
    })
  }
}

// TODO: 调接口给parent评论点赞
async function likeForParentComment(commentId, index) {
  await likeForParentCommentAPI(commentId)
  // console.log(res.isLike)
  // commentList.value[index].isLike = res.isLike
  // console.log(commentList.value[index])
  await getCommentDetailsByCommentId(commentId, index)
}
// likeForParentComment(1)

function likeParentComment(commentId, index) {
  likeForParentComment(commentId, index)
}

const myChildComment = ref()
// TODO: 调接口新增被评论
const addChildObj = ref({
  communityId: '',
  contented: '',
  id: route.query.id,
})
async function addChildComment(obj) {
  await addChildCommentAPI(obj)
}

/*
    定义一个变量activeReplyIndex，用来标记回复评论的输入框展示与隐藏
*/
const activeReplyIndex = ref(999)
async function changeActiveReplyIndex(id, index) {
  activeReplyIndex.value = index
  const res = await getCommentDetailsByCommentIdAPI(id)
  // console.log(res)
  commentDetails.value = res
  placeholder.value = `回复${commentDetails.value.username}`
  addChildObj.value.communityId = id
}

// TODO: 发布子评论
async function sendChildComment(id, index) {
  addChildObj.value.contented = myChildComment.value
  // console.log(addChildObj.value)
  await addChildComment(addChildObj.value)
  myChildComment.value = ''
  const res = await getChildCommentsByParentCommentIdAPI(id)
  // console.log(res)
  commentList.value[index].child = res.data
  ElMessage({
    message: '回复成功',
    type: 'success',
  })
  activeReplyIndex.value = 999
}
</script>

<template>
  <!-- PC端评论区 -->
  <div class="w-full max-md:hidden">
    <!-- 第一行 标头 -->
    <div class="h50px w-full flex">
      <div class="h-full w-120px flex items-center justify-evenly">
        <span class="font-size-22px font-bold">评论</span>
        <span class="font-size-14px">{{ totalComments }}</span>
      </div>
      <div class="h-full w-100px flex items-center justify-center">
        <span
          class="cursor-pointer font-size-13px hover:color-#00B4BC"
          :class="activeGetMethod === 0 ? 'color-#00B4BC' : ''"
          @click="changeActiveGetMethod(0)"
        >最热</span>
        <span class="ml8px mr8px h15px w1px bg-black" />
        <span
          class="cursor-pointer font-size-13px hover:color-#00B4BC"
          :class="activeGetMethod === 1 ? 'color-#00B4BC' : ''"
          @click="changeActiveGetMethod(1)"
        >最新</span>
      </div>
    </div>
    <!-- 第二行 发表评论和判断是否需要登录 -->
    <div
      v-if="!loginStatusStore.loginStatusFlag"
      class="h-60px w-full flex items-center"
    >
      <i class="iconfont icon-touxiang ml15px font-size-45px color-#00B4BC" />
      <input
        type="text"
        class="ml15px h40px w-710px rounded-5px bg-#D6E5E5 pl20px"
        placeholder="请先登录后发表评论 (・ω・)"
      >
      <button
        class="ml15px h40px w65px rounded-5px hover:bg-[#00B4BC] hover:color-#fff"
        @click="sendWhenLogOut"
      >
        发表
      </button>
    </div>
    <div v-else class="h-60px w-full flex items-center">
      <i class="iconfont icon-touxiang ml15px font-size-45px color-#00B4BC" />
      <input
        v-model="myComment"
        type="text"
        class="ml15px h40px w-710px rounded-5px bg-#D6E5E5 pl20px"
        placeholder="请输入您的评论 (・ω・)"
      >
      <button
        class="ml15px h40px w65px rounded-5px hover:bg-[#00B4BC] hover:color-#fff"
        @click="sendWhenLogin"
      >
        发表
      </button>
    </div>
    <!-- 第三行 写死 用户的相互评论 -->
    <div class="w-865px flex">
      <!-- 用户头像 -->
      <div class="left mt15px h-full w78px">
        <img
          src="/public/avator.jpeg"
          alt=""
          class="ml15px h48px w48px rounded-50%"
        >
      </div>
      <div class="mt15px h-full flex-1">
        <!-- 用户名 -->
        <div
          class="h-30px w-full flex items-center font-size-14px color-#61666d"
        >
          山竹醇单推人
        </div>
        <div class="mt10px font-size-15px">
          <!-- 评论内容 -->
          <p>
            西湖论剑网络安全大会是一场引领行业发展的盛会，为网络安全领域提供了重要的交流和学习平台。
          </p>
          <div class="mt5px font-size-12px color-#9499A0">
            <!-- 评论时间 -->
            <span class="mr20px">2024-03-17&nbsp; 13:30</span>
            <!-- 点赞 -->
            <span class="mr20px">
              <i class="iconfont icon-dianzan_kuai" />
              {{ 4785 }}
            </span>
            <!-- 拉踩 -->
            <span class="mr20px">
              <i class="iconfont icon-badreview-full font-size-14px" />
            </span>
            <!-- 回复 -->
            <span>回复</span>
          </div>
        </div>
        <!-- 回复第一条评论 -->
        <!-- 用户头像 -->
        <div>
          <div
            v-for="(item, index) in firstCommentList"
            :key="index"
            class="mt15px h-full w-full flex flex-col"
          >
            <div class="flex">
              <div class="h30px w30px">
                <img
                  :src="item.avator"
                  alt=""
                  class="h100% w100% rounded-50%"
                >
              </div>
              <span class="ml10px">
                <span class="font-size-14px color-#61666d">
                  {{ item.name }}
                </span>
                <span class="ml15px">
                  {{ item.comment }}
                </span>
              </span>
            </div>
            <div class="mt5px font-size-12px color-#9499A0">
              <!-- 评论时间 -->
              <span class="mr20px">2024-03-17&nbsp; 13:30</span>
              <!-- 点赞 -->
              <span class="mr20px">
                <i class="iconfont icon-dianzan_kuai" />
                {{ 4785 }}
              </span>
              <!-- 拉踩 -->
              <span class="mr20px">
                <i class="iconfont icon-badreview-full font-size-14px" />
              </span>
              <!-- 回复 -->
              <span>回复</span>
            </div>
          </div>
          <template v-if="isShowNextCommentsFlag">
            <div
              v-for="(item, index) in firstCommentList2"
              :key="index"
              class="mt15px h-full w-full flex flex-col"
            >
              <div class="flex">
                <div class="h30px w30px">
                  <img
                    :src="item.avator"
                    alt=""
                    class="h100% w100% rounded-50%"
                  >
                </div>
                <span class="ml10px">
                  <span class="font-size-14px color-#61666d">
                    {{ item.name }}
                  </span>
                  <span class="ml15px">
                    {{ item.comment }}
                  </span>
                </span>
              </div>
              <div class="mt5px font-size-12px color-#9499A0">
                <!-- 评论时间 -->
                <span class="mr20px">2024-03-17&nbsp; 13:30</span>
                <!-- 点赞 -->
                <span class="mr20px">
                  <i class="iconfont icon-dianzan_kuai" />
                  {{ 4785 }}
                </span>
                <!-- 拉踩 -->
                <span class="mr20px">
                  <i class="iconfont icon-badreview-full font-size-14px" />
                </span>
                <!-- 回复 -->
                <span>回复</span>
              </div>
            </div>
          </template>
          <div
            class="mt10px font-size-12px color-#9499A0"
            @click="changeIsShowNextCommentsFlag"
          >
            <p v-if="!isShowNextCommentsFlag">
              共12条回复，点击查看
            </p>
            <p v-else>
              收起
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 需要v-for的评论 -->
    <div v-for="(item, index) in commentList" :key="index" class="w-865px flex">
      <!-- 用户头像 -->
      <div class="left mt15px h-full w78px">
        <img :src="item.avatar" alt="" class="ml15px h48px w48px rounded-50%">
      </div>
      <div class="mt15px h-full flex-1">
        <!-- 用户名 -->
        <div
          class="h-30px w-full flex items-center font-size-14px color-#61666d"
        >
          {{ item.username }}
        </div>
        <div class="mt10px font-size-15px">
          <!-- 评论内容 -->
          <p>
            {{ item.content }}
          </p>
          <div class="mt5px font-size-12px color-#9499A0">
            <!-- 评论时间 -->
            <span class="mr20px">{{ item.time }}</span>
            <!-- 点赞 -->
            <span
              class="mr20px cursor-pointer"
              @click="likeParentComment(item.id, index)"
            >
              <i
                class="iconfont icon-dianzan_kuai hover:color-#00B4BC"
                :class="item.isLike ? 'color-#00B4BC' : ''"
              />
              {{ item.likeCount }}
            </span>
            <!-- 拉踩 -->
            <span class="mr20px cursor-pointer">
              <i class="iconfont icon-badreview-full font-size-14px" />
            </span>
            <!-- 回复 -->
            <span
              class="cursor-pointer hover:color-#00B4BC"
              @click="changeActiveReplyIndex(item.id, index)"
            >回复</span>
          </div>
          <div v-show="activeReplyIndex === index" class="">
            <div class="h-70px w-full flex items-center">
              <i
                class="iconfont icon-touxiang ml15px font-size-45px color-#00B4BC"
              />
              <input
                v-model="myChildComment"
                type="text"
                class="ml15px h40px w-650px border-2px border-#D6E5E5 rounded-5px border-solid pl20px"
                :placeholder="placeholder"
              >
            </div>
            <div class="mt-[-5px] flex items-center">
              <span
                class="ml80px mr5px inline-block h30px w35px flex items-center justify-center border-1px border-#D6E5E5 rounded-5px border-solid"
              >
                <i class="iconfont icon-biaoqing_xiao_o font-size-22px" />
              </span>
              <span
                class="inline-block h30px w35px flex items-center justify-center border-1px border-#D6E5E5 rounded-5px border-solid"
              >
                @
              </span>
              <button
                class="ml505px inline-block h40px w65px rounded-5px hover:bg-[#00B4BC] hover:color-#fff"
                @click="sendChildComment(item.id, index)"
              >
                发布
              </button>
            </div>
          </div>
        </div>
        <div
          v-for="(item3, index3) in item.child"
          :key="index3"
          class="mt15px h-full w-full flex flex-col"
        >
          <div class="flex">
            <div class="h30px w30px">
              <img :src="item3.avatar" alt="" class="h100% w100% rounded-50%">
            </div>
            <span class="ml10px">
              <span class="font-size-14px color-#61666d">
                {{ item3.username }}
              </span>
              <span class="ml15px">
                {{ item3.contented }}
              </span>
            </span>
          </div>
          <div class="mt5px font-size-12px color-#9499A0">
            <!-- 评论时间 -->
            <span class="mr20px">{{ item3.time }}</span>
            <!-- 点赞 -->
            <span class="mr20px">
              <i class="iconfont icon-dianzan_kuai" />
              {{ item3.likeCount }}
            </span>
            <!-- 拉踩 -->
            <span class="mr20px">
              <i class="iconfont icon-badreview-full font-size-14px" />
            </span>
            <!-- 回复 -->
            <span class="hover:color-#00B4BC">回复</span>
          </div>
        </div>
      </div>
      <div />
    </div>
  </div>

  <!-- 移动端评论区 -->
  <div class="w-full md:hidden">
    <!-- 第一行 标头 -->
    <div class="h50px w-full flex">
      <div class="h-full w-120px flex items-center justify-evenly">
        <span class="font-size-22px font-bold">评论</span>
        <span class="font-size-14px">14857</span>
      </div>
      <div class="h-full w-100px flex items-center justify-center">
        <span class="font-size-13px">最热</span>
        <span class="ml8px mr8px h15px w1px bg-black" />
        <span class="font-size-13px">最新</span>
      </div>
    </div>
    <!-- 第二行 发表评论和判断是否需要登录 -->
    <div class="h-60px w-full flex items-center">
      <i class="iconfont icon-touxiang ml5px font-size-30px color-#00B4BC" />
      <input
        type="text"
        class="ml8px h30px w290px rounded-5px bg-#D6E5E5 pl20px font-size-14px"
        placeholder="请先登录后发表评论 (・ω・)"
      >
      <button
        class="ml8px h30px w65px rounded-5px font-size-14px hover:bg-[#00B4BC] hover:color-#fff"
      >
        发表
      </button>
    </div>
    <!-- 第三行 写死 用户的相互评论 -->
    <div class="w-375px flex">
      <!-- 用户头像 -->
      <div class="left mr[-25px] mt15px h-full w78px">
        <img
          src="/public/avator.jpeg"
          alt=""
          class="ml8px h35px w35px rounded-50%"
        >
      </div>
      <div class="mt15px h-full flex-1">
        <!-- 用户名 -->
        <div
          class="h-30px w-full flex items-center font-size-14px color-#61666d"
        >
          山竹醇单推人
        </div>
        <div class="mt10px w-full font-size-15px">
          <!-- 评论内容 -->
          <p>
            西湖论剑网络安全大会是一场引领行业发展的盛会，为网络安全领域提供了重要的交流和学习平台。
          </p>
          <div class="mt5px font-size-12px color-#9499A0">
            <!-- 评论时间 -->
            <span class="mr20px">2024-03-17&nbsp; 13:30</span>
            <!-- 点赞 -->
            <span class="mr20px">
              <i class="iconfont icon-dianzan_kuai" />
              {{ 4785 }}
            </span>
            <!-- 拉踩 -->
            <span class="mr20px">
              <i class="iconfont icon-badreview-full font-size-14px" />
            </span>
            <!-- 回复 -->
            <span>回复</span>
          </div>
        </div>
        <!-- 回复第一条评论 -->
        <!-- 用户头像 -->
        <div>
          <div
            v-for="(item, index) in firstCommentList"
            :key="index"
            class="mt15px h-full w-full flex flex-col"
          >
            <div class="flex">
              <img :src="item.avator" alt="" class="h8% w8% rounded-50%">
              <span class="ml10px">
                <span class="font-size-14px color-#61666d">
                  {{ item.name }}
                </span>
                <span class="ml15px font-size-15px">
                  {{ item.comment }}
                </span>
              </span>
            </div>
            <div class="mt5px font-size-12px color-#9499A0">
              <!-- 评论时间 -->
              <span class="mr20px">2024-03-17&nbsp; 13:30</span>
              <!-- 点赞 -->
              <span class="mr20px">
                <i class="iconfont icon-dianzan_kuai" />
                {{ 4785 }}
              </span>
              <!-- 拉踩 -->
              <span class="mr20px">
                <i class="iconfont icon-badreview-full font-size-14px" />
              </span>
              <!-- 回复 -->
              <span>回复</span>
            </div>
          </div>
          <template v-if="isShowNextCommentsFlag">
            <div
              v-for="(item, index) in firstCommentList2"
              :key="index"
              class="mt15px h-full w-full flex flex-col"
            >
              <div class="flex">
                <!-- <div class="h30px w30px"> -->
                <img :src="item.avator" alt="" class="h8% w8% rounded-50%">
                <!-- </div> -->
                <span class="ml10px">
                  <span class="font-size-14px color-#61666d">
                    {{ item.name }}
                  </span>
                  <span class="ml15px font-size-15px">
                    {{ item.comment }}
                  </span>
                </span>
              </div>
              <div class="mt5px font-size-12px color-#9499A0">
                <!-- 评论时间 -->
                <span class="mr20px">2024-03-17&nbsp; 13:30</span>
                <!-- 点赞 -->
                <span class="mr20px">
                  <i class="iconfont icon-dianzan_kuai" />
                  {{ 4785 }}
                </span>
                <!-- 拉踩 -->
                <span class="mr20px">
                  <i class="iconfont icon-badreview-full font-size-14px" />
                </span>
                <!-- 回复 -->
                <span>回复</span>
              </div>
            </div>
          </template>
          <div
            class="mt10px font-size-12px color-#9499A0"
            @click="changeIsShowNextCommentsFlag"
          >
            <p v-if="!isShowNextCommentsFlag">
              共12条回复，点击查看
            </p>
            <p v-else>
              收起
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 需要v-for的评论 -->
    <div class="w-375px flex">
      <!-- 用户头像 -->
      <div class="left mr[-25px] mt15px h-full w78px">
        <img
          src="/public/avator.jpeg"
          alt=""
          class="ml8px h35px w35px rounded-50%"
        >
      </div>
      <div class="mt15px h-full flex-1">
        <!-- 用户名 -->
        <div
          class="h-30px w-full flex items-center font-size-14px color-#61666d"
        >
          山竹醇单推人
        </div>
        <div class="mt10px w-full font-size-15px">
          <!-- 评论内容 -->
          <p>
            西湖论剑网络安全大会是一场引领行业发展的盛会，为网络安全领域提供了重要的交流和学习平台。
          </p>
          <div class="mt5px font-size-12px color-#9499A0">
            <!-- 评论时间 -->
            <span class="mr20px">2024-03-17&nbsp; 13:30</span>
            <!-- 点赞 -->
            <span class="mr20px">
              <i class="iconfont icon-dianzan_kuai" />
              {{ 4785 }}
            </span>
            <!-- 拉踩 -->
            <span class="mr20px">
              <i class="iconfont icon-badreview-full font-size-14px" />
            </span>
            <!-- 回复 -->
            <span>回复</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
