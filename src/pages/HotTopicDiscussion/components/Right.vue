<script setup>
import { useScroll } from '@vueuse/core'
import { getArticleRankingAPI, getAuthorRankingListAPI } from '@/apis/hotTopic'

const { y } = useScroll(window)

// TODO: 调接口获取文章榜数据 点击换一换重新获取文章列表
const articleRankingList = ref()
async function getArticleRankingList() {
  const res = await getArticleRankingAPI()
  // console.log(res)
  articleRankingList.value = res.data
}
getArticleRankingList()

function changeArtivleRankings() {
  getArticleRankingList()
}

// TODO: 调接口获取作者榜数据 点击换一换重新获取作者列表
const authorRankingList = ref()
async function getAuthorRankingList() {
  const res = await getAuthorRankingListAPI()
  // console.log(res)
  authorRankingList.value = res.data
}
getAuthorRankingList()

function changeAuthorRankingList() {
  getAuthorRankingList()
}
</script>

<template>
  <div class="mt20px w-260px rounded-10px">
    <!-- 限时领取西湖会员模块 -->
    <div class="h90px w-full flex items-center justify-between rounded-10px bg-#fff p20px">
      <div>
        <p class="font-size-16px font-bold">
          限时领取西湖会员
        </p>
        <p class="font-size-13px color-#999">
          点亮在社区的每一天
        </p>
      </div>
      <img class="w75px" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/sign.d62085a.gif" alt="">
    </div>
    <!-- 文章排行榜 -->
    <div class="mt20px h300px w-full flex flex-col bg-#fff">
      <div class="h50px w-full flex items-center justify-between border-b-1 border-#E0E0E0 pl15px pr15px">
        <div class="flex items-center">
          <img class="w30px" src="/public/hottopic/article.png" alt="">
          <span class="ml5px">文章榜</span>
        </div>
        <div class="flex items-center color-#999" @click="changeArtivleRankings">
          <i class="iconfont icon-huanyihuan mr5px font-size-15px" />
          <p class="font-size-13px">
            换一换
          </p>
        </div>
      </div>
      <div class="w-full flex-1 border-b-1 border-#E0E0E0 font-size-14px">
        <ul class="h-full w-full flex flex-col justify-evenly">
          <li
            v-for="(item, index) in articleRankingList" :key="index"
            class="ml5% mr5% w-90% flex items-center p5px hover:bg-#E0E0E0"
          >
            <span class="font-size-16px font-bold">{{ item.index }}</span>
            <span class="shenglue ml25px">{{ item.content }}</span>
          </li>
        </ul>
      </div>
      <div class="h50px w-full flex items-center justify-center border-b-1 border-#E0E0E0 color-#999">
        <span class="font-size-13px">查看更多</span>
        <i class="iconfont icon-youjiantou ml5px font-size-12px" />
      </div>
    </div>
    <!-- 三张海报 -->
    <img src="/public/hottopic/2.jpg" class="mt15px" alt="">
    <img src="/public/hottopic/3.jpg" class="mt15px" alt="">
    <img src="/public/hottopic/1.jpg" class="mt15px" alt="">
    <!-- 作者排行榜 -->
    <div class="mt20px w-full flex flex-col bg-#fff">
      <div class="h50px w-full flex items-center justify-between border-b-1 border-#E0E0E0 pl15px pr15px">
        <div class="flex items-center">
          <img class="w30px" src="/public/hottopic/author.png" alt="">
          <span class="ml5px">作者榜</span>
        </div>
        <div class="flex items-center color-#999" @click="changeAuthorRankingList">
          <i class="iconfont icon-huanyihuan mr5px font-size-15px" />
          <p class="font-size-13px">
            换一换
          </p>
        </div>
      </div>
      <div class="w-full flex-1 border-b-1 border-#E0E0E0 font-size-14px">
        <ul class="h-full w-full flex flex-col justify-evenly pb10px pt10px">
          <li
            v-for="(item, index) in authorRankingList" :key="index"
            class="ml5% mr5% w-90% flex items-center justify-between p5px hover:bg-#E0E0E0"
          >
            <div class="h40px w-80% flex items-center font-size-12px">
              <img class="w23%" :src="item.img" alt="">
              <div class="ml7% w70%">
                <p class="font-size-13px">
                  {{ item.name }}
                </p>
                <p class="shenglue w-full color-#999">
                  {{ item.desc }}
                </p>
              </div>
            </div>
            <div class="color-blue-400">
              <span>+</span>
              <span>关注</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="h50px w-full flex items-center justify-center border-b-1 border-#E0E0E0 color-#999">
        <span class="font-size-13px">查看更多</span>
        <i class="iconfont icon-youjiantou ml5px font-size-12px" />
      </div>
    </div>
    <!-- 推荐话题 -->
    <div class="mt20px w-full flex flex-col bg-#fff">
      <div class="h50px w-full flex items-center justify-between border-b-1 border-#E0E0E0 pl15px pr15px">
        <div class="flex items-center">
          <img class="w30px" src="/public/hottopic/recommand.png" alt="">
          <span class="ml5px">推荐话题</span>
        </div>
        <div class="flex items-center color-#999">
          <i class="iconfont icon-huanyihuan mr5px font-size-15px" />
          <p class="font-size-13px">
            换一换
          </p>
        </div>
      </div>
      <div class="w-full flex-1 border-b-1 border-#E0E0E0 font-size-14px">
        <ul class="h-full w-full flex flex-col justify-evenly pb5px pt5px">
          <li
            v-for="(item, index) in 5" :key="index"
            class="ml5% mr5% h35px w-90% flex items-center justify-between p5px hover:bg-#E0E0E0 hover:color-[#00B4BC]"
          >
            <p class="">
              #选择留在大城市工作
            </p>
            <p class="color-#999">
              110k
            </p>
          </li>
        </ul>
      </div>
      <div class="h50px w-full flex items-center justify-center border-b-1 border-#E0E0E0 color-#999">
        <span class="font-size-13px">查看更多</span>
        <i class="iconfont icon-youjiantou ml5px font-size-12px" />
      </div>
    </div>
  </div>

  <!-- 当前滚动距离大于1400时显示 -->
  <div
    v-show="y > 1400"
    class="animation-delay-1 animate__fadeInRight wow fixed right-10% z-999 animate-duration-2000 max-md:hidden"
  >
    <div class="mt20px w-260px rounded-10px">
      <!-- 限时领取西湖会员模块 -->
      <div class="h90px w-full flex items-center justify-between rounded-10px bg-#fff p20px">
        <div>
          <p class="font-size-16px font-bold">
            限时领取西湖会员
          </p>
          <p class="font-size-13px color-#999">
            点亮在社区的每一天
          </p>
        </div>
        <img class="w75px" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/sign.d62085a.gif" alt="">
      </div>
      <!-- 文章排行榜 -->
      <div class="mt20px h300px w-full flex flex-col bg-#fff">
        <div class="h50px w-full flex items-center justify-between border-b-1 border-#E0E0E0 pl15px pr15px">
          <div class="flex items-center">
            <img class="w30px" src="/public/hottopic/article.png" alt="">
            <span class="ml5px">文章榜</span>
          </div>
          <div class="flex items-center color-#999" @click="changeArtivleRankings">
            <i class="iconfont icon-huanyihuan mr5px font-size-15px" />
            <p class="font-size-13px">
              换一换
            </p>
          </div>
        </div>
        <div class="w-full flex-1 border-b-1 border-#E0E0E0 font-size-14px">
          <ul class="h-full w-full flex flex-col justify-evenly">
            <li
              v-for="(item, index) in articleRankingList" :key="index"
              class="ml5% mr5% w-90% flex items-center p5px hover:bg-#E0E0E0"
            >
              <span class="font-size-16px font-bold">{{ item.index }}</span>
              <span class="shenglue ml25px">{{ item.content }}</span>
            </li>
          </ul>
        </div>
        <div class="h50px w-full flex items-center justify-center border-b-1 border-#E0E0E0 color-#999">
          <span class="font-size-13px">查看更多</span>
          <i class="iconfont icon-youjiantou ml5px font-size-12px" />
        </div>
      </div>
      <!-- 三张海报 -->
      <img src="/public/hottopic/2.jpg" class="mt15px" alt="">
      <img src="/public/hottopic/3.jpg" class="mt15px" alt="">
    </div>
  </div>
</template>

<style scoped>
.shenglue {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
