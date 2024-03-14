<script setup>
import Map from './Map.vue'
</script>

<template>
  <!-- PC端大会交通 -->
  <div class="mt40px max-md:hidden">
    <div class="w-full">
      <p class="mb20px mt40px font-size-22px color-[#00B4BC] font-bold">
        Map地图
      </p>
    </div>
    <!-- 引入高德地图 -->
    <Map />
    <!-- 路线介绍 -->
    <div class="w-full">
      <p class="mb20px mt40px font-size-22px color-[#00B4BC] font-bold">
        路线介绍
      </p>
    </div>
    <div class="h200px w-full">
      <p class="flex items-center font-size-18px">
        <i class="iconfont icon-number1 mr10px font-size-32px color-[#00B4BC]" />
        杭州萧山国际机场——杭州洲际酒店
      </p>
      <div class="flex items-center">
        <div class="flex items-center">
          <i class="iconfont icon-ditiexiao font-size-20px color-[#00B4BC]" />
          <p class="pl3px font-size-16px color-[#00B4BC]">
            地铁
          </p>
        </div>
      </div>
      <p>搭乘地铁7号线（吴山广场方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。</p>

      <div class="flex items-center">
        <div class="flex items-center">
          <i class="iconfont icon-chuzuche font-size-20px color-[#00B4BC]" />
          <p class="pl3px font-size-16px color-[#00B4BC]">
            出租车
          </p>
        </div>
      </div>
      <p>路程25公里 时间约50分钟 车费60元左右</p>
    </div>
    <div class="h180px w-full">
      <p class="flex items-center font-size-18px">
        <i class="iconfont icon-xuhao mr10px font-size-32px color-[#00B4BC]" />
        杭州萧山国际机场——杭州洲际酒店
      </p>
      <div class="flex items-center">
        <div class="flex items-center">
          <i class="iconfont icon-ditiexiao font-size-20px color-[#00B4BC]" />
          <p class="pl3px font-size-16px color-[#00B4BC]">
            地铁
          </p>
        </div>
      </div>
      <p>搭乘地铁4号线（浦沿方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。</p>

      <div class="flex items-center">
        <div class="flex items-center">
          <i class="iconfont icon-chuzuche font-size-20px color-[#00B4BC]" />
          <p class="pl3px font-size-16px color-[#00B4BC]">
            出租车
          </p>
        </div>
      </div>
      <p>路程7公里时长约20分钟车费20元左右。</p>
    </div>
  </div>
  <!-- 移动端大会交通 -->
  <div class="mt-[10px] w-full md-hidden">
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">大会交通</span>&nbsp;
      <span class="font-size-[12px]">Conference traffic</span>
    </div>
    <p class="mb5px font-size-14px color-[#00B4BC] font-bold">
      Map地图
    </p>
    <img class="w-full" src="/public/map/map.png" alt="">
    <p class="mb5px mt5px font-size-14px color-[#00B4BC] font-bold">
      路线介绍
    </p>
    <div class="h160px w-full bg-#EFFBFF">
      <p class="flex items-center font-size-14px">
        <i class="iconfont icon-number1 mr10px font-size-22px color-[#00B4BC]" />
        杭州萧山国际机场——杭州洲际酒店
      </p>
      <div class="flex items-center">
        <div class="flex items-center">
          <i class="iconfont icon-ditiexiao font-size-12px color-[#00B4BC]" />
          <p class="pl3px font-size-16px color-[#00B4BC]">
            地铁
          </p>
        </div>
      </div>
      <p class="font-size-13px">
        搭乘地铁7号线（吴山广场方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。
      </p>

      <div class="flex items-center">
        <div class="flex items-center">
          <i class="iconfont icon-chuzuche font-size-20px color-[#00B4BC]" />
          <p class="pl3px font-size-16px color-[#00B4BC]">
            出租车
          </p>
        </div>
      </div>
      <p class="font-size-13px">
        路程25公里 时间约50分钟 车费60元左右
      </p>
    </div>
    <div class="mt10px h160px w-full bg-#EFFBFF">
      <p class="flex items-center font-size-14px">
        <i class="iconfont icon-xuhao mr10px font-size-22px color-[#00B4BC]" />
        杭州萧山国际机场——杭州洲际酒店
      </p>
      <div class="flex items-center">
        <div class="flex items-center">
          <i class="iconfont icon-ditiexiao font-size-16px color-[#00B4BC]" />
          <p class="pl3px font-size-16px color-[#00B4BC]">
            地铁
          </p>
        </div>
      </div>
      <p class="font-size-13px">
        搭乘地铁4号线（浦沿方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。
      </p>

      <div class="flex items-center">
        <div class="flex items-center">
          <i class="iconfont icon-chuzuche font-size-16px color-[#00B4BC]" />
          <p class="pl3px font-size-16px color-[#00B4BC]">
            出租车
          </p>
        </div>
      </div>
      <p class="font-size-13px">
        路程7公里时长约20分钟车费20元左右。
      </p>
    </div>
  </div>
</template>

<style scoped></style>
