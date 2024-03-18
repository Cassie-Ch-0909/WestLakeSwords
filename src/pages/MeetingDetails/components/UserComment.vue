<script setup>
import { ref } from 'vue'

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
    comment: '大会汇聚了业界顶尖专家和企业，共同探讨前沿技术和解决方案，为推动网络安全发展做出了积极贡献。',
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
    comment: '西湖论剑网络安全大会的影响力不断扩大，已成为国内网络安全领域的标志性活动，他们的观点和建议对提升网络安全具有重要指导意义。',
    name: '桃奈叶子',

  },
  {
    avator: '/public/firstComment/7.jpg',
    comment: '大会关注热点问题，探讨解决方案，为应对网络安全挑战提供了有益的思路和方法。',
    name: '知更鸟的死因',

  },
  {
    avator: '/public/firstComment/8.jpg',
    comment: '会议的举办有助于提高公众对网络安全的认识和重视程度，促进全社会共同参与网络安全建设。大会的专业性和权威性得到了业界的广泛认可，是网络安全从业者不可错过的盛会。',
    name: '放鹤归舟',

  },
  {
    avator: '/public/firstComment/9.jpg',
    comment: '西湖论剑网络安全大会展示了最新的技术成果和创新应用，推动了网络安全技术的进步和应用落地。',
    name: '春日樱亭',

  },
  {
    avator: '/public/firstComment/10.jpg',
    comment: '大会的专业性和权威性得到了业界的广泛认可，是网络安全从业者不可错过的盛会。',
    name: '宇宙热恋期',

  },
  {
    avator: '/public/firstComment/11.jpg',
    comment: '会议的成功举办离不开主办方的精心筹备和辛勤付出，向他们表示衷心的感谢和赞美。',
    name: '今夜星潮暗涌',

  },
  {
    avator: '/public/firstComment/12.jpg',
    comment: '期待西湖论剑网络安全大会继续发挥引领作用，为网络安全事业的发展注入新的活力和动力。',
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
</script>

<template>
  <div class="w-full">
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
      <i class="iconfont icon-touxiang ml15px font-size-45px color-#00B4BC" />
      <input type="text" class="ml15px h40px w-710px rounded-5px bg-#D6E5E5 pl20px" placeholder="请先登录后发表评论 (・ω・)">
      <button class="ml15px h40px w65px rounded-5px hover:bg-[#00B4BC] hover:color-#fff">
        发表
      </button>
    </div>
    <!-- 第三行 写死 用户的相互评论 -->
    <div class="w-865px flex">
      <!-- 用户头像 -->
      <div class="left mt15px h-full w78px">
        <img src="/public/avator.jpeg" alt="" class="ml15px h48px w48px rounded-50%">
      </div>
      <div class="mt15px h-full flex-1">
        <!-- 用户名 -->
        <div class="h-30px w-full flex items-center font-size-14px color-#61666d">
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
          <div v-for="(item, index) in firstCommentList" :key="index" class="mt15px h-full w-full flex flex-col">
            <div class="flex">
              <div class="h30px w30px">
                <img :src="item.avator" alt="" class="h100% w100% rounded-50%">
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
            <div v-for="(item, index) in firstCommentList2" :key="index" class="mt15px h-full w-full flex flex-col">
              <div class="flex">
                <div class="h30px w30px">
                  <img :src="item.avator" alt="" class="h100% w100% rounded-50%">
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
          <div class="mt10px font-size-12px color-#9499A0" @click="changeIsShowNextCommentsFlag">
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
    <div class="w-865px flex">
      <!-- 用户头像 -->
      <div class="left mt15px h-full w78px">
        <img src="/public/avator.jpeg" alt="" class="ml15px h48px w48px rounded-50%">
      </div>
      <div class="mt15px h-full flex-1">
        <!-- 用户名 -->
        <div class="h-30px w-full flex items-center font-size-14px color-#61666d">
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
      </div>
    </div>
  </div>
</template>

<style scoped></style>
