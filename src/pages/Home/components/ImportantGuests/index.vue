<script setup>
const list = ref([
  '/public/guests/13.webp',
  '/public/guests/14.webp',
  '/public/guests/15.webp',
  '/public/guests/1.webp',
  '/public/guests/2.webp',
  '/public/guests/3.webp',
  '/public/guests/4.webp',
  '/public/guests/5.webp',
  '/public/guests/6.webp',
  '/public/guests/7.webp',
  '/public/guests/8.webp',
  '/public/guests/9.webp',
  '/public/guests/10.webp',
  '/public/guests/11.webp',
  '/public/guests/12.webp',
])
</script>

<template>
  <!-- PC端重磅嘉宾 -->
  <div class="ml10% mt[50px] w80% max-md:hidden">
    <p class="left-0 top-5% h-[80px] w-full font-size-[30px] font-bold">
      重磅嘉宾&nbsp;<span class="font-size-[23px]">Important Guests</span>
    </p>
    <el-carousel :interval="4000" type="card" height="341px" class="animation-delay-1 animate__fadeInDown wow animate-duration-2500">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- 移动端重磅嘉宾 -->
  <div class="mt-[10px] h-[145px] w-full md-hidden">
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">重磅嘉宾</span>&nbsp;
      <span class="font-size-[12px]">Important Guests</span>
    </div>
    <el-carousel :interval="4000" type="card" height="100px" class="">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
