<script setup>
</script>

<template>
  <div class="mt20px w-260px border-2px border-#E0E0E0 rounded-10px border-solid">
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
        <div class="flex items-center color-#999">
          <i class="iconfont icon-huanyihuan mr5px font-size-15px" />
          <p class="font-size-13px">
            换一换
          </p>
        </div>
      </div>
      <div class="w-full flex-1 border-b-1 border-#E0E0E0 font-size-14px">
        <ul class="h-full w-full flex flex-col justify-evenly">
          <li v-for="(item, index) in 5" :key="index" class="ml5% mr5% w-90% flex items-center p5px hover:bg-#E0E0E0">
            <span class="font-size-16px font-bold">1</span>
            <span class="ml25px">一个排查了一天的BUG，你在...</span>
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
          <img class="w30px" src="/public/hottopic/article.png" alt="">
          <span class="ml5px">文章榜</span>
        </div>
        <div class="flex items-center color-#999">
          <i class="iconfont icon-huanyihuan mr5px font-size-15px" />
          <p class="font-size-13px">
            换一换
          </p>
        </div>
      </div>
      <div class="w-full flex-1 border-b-1 border-#E0E0E0 font-size-14px">
        <ul class="h-full w-full flex flex-col justify-evenly pb10px pt10px">
          <li
            v-for="(item, index) in 5" :key="index"
            class="ml5% mr5% w-90% flex items-center justify-between p5px hover:bg-#E0E0E0"
          >
            <div class="h40px flex items-center font-size-12px">
              <img
                class="w-40px"
                src="https://p3-passport.byteacctimg.com/img/user-avatar/06d48f05b22d366e72d9e10134610cd7~300x300.image"
                alt=""
              >
              <div class="ml5px">
                <p class="font-size-13px">
                  京东云开发者
                </p>
                <p class="color-#999">
                  技术运营 @京东科技信...
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
  </div>
</template>
