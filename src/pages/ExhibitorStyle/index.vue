<script setup>
const list = ref([
  { img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png', name: '宝德' },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d86aad180ee14acb95d1df723414aec2.png',
    name: '乐研科技',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png',
    name: '上元信安',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png',
    name: '中尔科技',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png',
    name: '兴汉网际',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png',
    name: '其阳科技',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2e88c33068c04d31a5bb9599c22382a0.png',
    name: '汇志凌云',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png',
    name: '五舟科技',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png',
    name: '联软科技',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png',
    name: '立华科技',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png',
    name: 'Suma',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
    name: '安恒信息',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
    name: '网宿科技',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png',
    name: '孝道科技',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/ae832a31047749299bd504e6070d487a.png',
    name: 'SEAGATE',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png',
    name: '安博通',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png',
    name: '壹进制',
  },
])
</script>

<template>
  <!-- PC端展商风采 -->
  <div class="bg w-full bg-left bg-no-repeat pb50px max-md:hidden">
    <div class="ml10% mr10% h-full w-80%">
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        展商风采
      </p>
      <div class="ml2.5% w-full flex flex-wrap justify-center">
        <div
          v-for="(item, index) in list" :key="index"
          class="animation-delay-1 animate__fadeIn mb15px mr5% w10% animate-duration-2500"
        >
          <div
            class="h130px w130px flex flex-col items-center justify-center rounded-50% from-[#70E9E4] to-[#139AE6] bg-gradient-to-t shadow-xl"
          >
            <img class="w100px rounded-50%" :src="item.img" alt="">
            <p class="font-size-13px font-bold">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
      <div class="mt20px">
        <embed
          class="h-730px w-1300px"
          src="https://live.vhall.com/v3/lives/embedclient/subscribe/347881970?embed=video"
        >
      </div>
    </div>
  </div>

  <!-- 移动端展商风采 -->
  <div class="bg w-full bg-left bg-no-repeat md:hidden">
    <div class="h-50px w-full flex items-center justify-center font-size-[18px] color-[#00B4BC] font-bold">
      展商风采
    </div>
    <div class="ml-[-2%] mt10px w-full flex flex-wrap justify-center">
      <div v-for="(item, index) in list" :key="index" class="mb15px ml2% w18%">
        <div
          class="h80px w80px flex flex-col items-center justify-center rounded-50% from-[#70E9E4] to-[#139AE6] bg-gradient-to-t"
        >
          <img class="w61px rounded-50%" :src="item.img" alt="">
          <p class="font-size-10px font-bold">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt10px">
      <embed class="w-full" src="https://live.vhall.com/v3/lives/embedclient/subscribe/347881970?embed=video">
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('/public/bg/3.png');
}
</style>
