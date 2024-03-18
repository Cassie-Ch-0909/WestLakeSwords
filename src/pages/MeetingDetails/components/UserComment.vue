<script setup>
import { ref } from 'vue'

// const firstCommentList = ref([
//   {
//     avator: '/public/firstComment/1.jpg',
//     comment: '西湖论剑网络安全大会是一场引领行业发展的盛会，为网络安全领域提供了重要的交流和学习平台。',
//   },
//   {
//     avator: '/public/firstComment/2.jpg',
//     comment: '大会汇聚了业界顶尖专家和企业，共同探讨前沿技术和解决方案，为推动网络安全发展做出了积极贡献。',
//   },
// ])

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
          <div v-for="(item, index) in 2" :key="index" class="mt15px h-full w-full flex flex-col">
            <div class="flex">
              <div class="h30px w70px">
                <img src="/public/avator.jpeg" alt="" class="h100% w100% rounded-50%">
              </div>
              <span class="ml10px">
                <span class="font-size-14px color-#61666d">
                  信仰产生奇迹
                </span>
                <span class="ml15px">大会汇聚了业界顶尖专家和企业，共同探讨前沿技术和解决方案，为推动网络安全发展做出了积极贡献。
                  大会汇聚了业界顶尖专家和企业，共同探讨前沿技术和解决方案，为推动网络安全发展做出了积极贡献。
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
            <div v-for="(item, index) in 2" :key="index" class="mt15px h-full w-full flex flex-col">
              <div class="flex">
                <div class="h30px w70px">
                  <img src="/public/avator.jpeg" alt="" class="h100% w100% rounded-50%">
                </div>
                <span class="ml10px">
                  <span class="font-size-14px color-#61666d">
                    信仰产生奇迹
                  </span>
                  <span class="ml15px">大会汇聚了业界顶尖专家和企业，共同探讨前沿技术和解决方案，为推动网络安全发展做出了积极贡献。
                    大会汇聚了业界顶尖专家和企业，共同探讨前沿技术和解决方案，为推动网络安全发展做出了积极贡献。
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
              共21条回复，点击查看
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
