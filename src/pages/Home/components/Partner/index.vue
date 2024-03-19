<script setup>
/*
    生态合作媒体的三行数据
*/
const list = ref([
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/ae832a31047749299bd504e6070d487a.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/ae832a31047749299bd504e6070d487a.png',
    title: '希捷科技',
    url: 'https://www.seagate.com/cn/zh/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png',
    title: '孝道科技',
    url: 'https://www.tcsec.com.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
    title: '宝德计算',
    url: 'http://www.powerleader.com.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png',
    title: '其阳科技',
    url: 'https://www.aewin.cn',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
    title: '安恒信息',
    url: 'https://www.dbappsecurity.com.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d86aad180ee14acb95d1df723414aec2.png',
    image2: '',
    title: '乐研科技',
    url: 'https://www.royaltech.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2e88c33068c04d31a5bb9599c22382a0.png',
    image2: '',
    title: '汇志凌云',
    url: 'http://www.51lingyun.com',
  },
])
const list2 = ref([
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png',
    title: '立华科技',
    url: 'https://www.ls-china.com.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png',
    title: '安博通',
    url: 'http://www.abtnetworks.com/ ',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png',
    title: '联软科技',
    url: 'https://www.leagsoft.com/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png',
    title: '上元信安',
    url: 'http://www.sunyainfo.com/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png',
    title: '兴汉网际',
    url: 'https://www.nexsec.cn',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png',
    title: '中尔网络',
    url: 'http://www.hzzekj.com/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/44e9a8a91d544be4a53b2d5ca7bf6c9a.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/44e9a8a91d544be4a53b2d5ca7bf6c9a.png',
    title: '娃哈哈',
    url: 'https://www.wahaha.com.cn/#/',
  },
])
const list3 = ref([
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png',
    title: '广电五舟',
    url: 'http://www.wuzhoucloud.com',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
    title: '网宿科技',
    url: 'https://www.wangsu.com/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png',
    title: '中科可控',
    url: 'https://www.cancon.com.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png',
    title: '南京壹进制',
    url: '',
  },
])

/*
    战略合作媒体的一行数据
*/
const strategicCooperativeMediaList = ref([
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/60234dda9f664775a5b991bd8412dca1.png',
    image2: '',
    title: '新华网',
    url: '',
  },
])

/*
    新闻媒体的数组
*/

/*
    移动端合作伙伴
*/
// 生态合作
const phoneList1 = ref(
  [
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/ae832a31047749299bd504e6070d487a.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/ae832a31047749299bd504e6070d487a.png',
      title: '希捷科技',
      url: 'https://www.seagate.com/cn/zh/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png',
      title: '孝道科技',
      url: 'https://www.tcsec.com.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
      title: '宝德计算',
      url: 'http://www.powerleader.com.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png',
      title: '其阳科技',
      url: 'https://www.aewin.cn',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
      title: '安恒信息',
      url: 'https://www.dbappsecurity.com.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d86aad180ee14acb95d1df723414aec2.png',
      image2: '',
      title: '乐研科技',
      url: 'https://www.royaltech.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2e88c33068c04d31a5bb9599c22382a0.png',
      image2: '',
      title: '汇志凌云',
      url: 'http://www.51lingyun.com',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png',
      title: '广电五舟',
      url: 'http://www.wuzhoucloud.com',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
      title: '网宿科技',
      url: 'https://www.wangsu.com/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png',
      title: '中科可控',
      url: 'https://www.cancon.com.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png',
      title: '南京壹进制',
      url: '',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png',
      title: '立华科技',
      url: 'https://www.ls-china.com.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png',
      title: '安博通',
      url: 'http://www.abtnetworks.com/ ',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png',
      title: '联软科技',
      url: 'https://www.leagsoft.com/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png',
      title: '上元信安',
      url: 'http://www.sunyainfo.com/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png',
      title: '兴汉网际',
      url: 'https://www.nexsec.cn',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png',
      title: '中尔网络',
      url: 'http://www.hzzekj.com/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/44e9a8a91d544be4a53b2d5ca7bf6c9a.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/44e9a8a91d544be4a53b2d5ca7bf6c9a.png',
      title: '娃哈哈',
      url: 'https://www.wahaha.com.cn/#/',
    },
  ],
)

// 定义一个flag，用来控制是否显示全部
const flag = ref(false)
// 定义一个按钮名称
const buttonName = ref('查看更多')
/*
    定义一个方法来控制flag是否显示以及按钮的名称
*/
function changeFlag() {
  flag.value = !flag.value
  if (flag.value)
    buttonName.value = '收起'

  else
    buttonName.value = '查看更多'
}
</script>

<template>
  <!-- PC端合作伙伴 -->
  <div class="mb[50px] mt[50px] w100% max-md:hidden">
    <p class="left-0 ml10% h-[80px] w-80% font-size-[30px] font-bold">
      合作伙伴&nbsp;<span class="font-size-[23px]">Cooperative Partner</span>
    </p>
    <p class="ml10% font-size-[20px] color-[#05BAB3] font-bold">
      生态合作伙伴
    </p>
    <!-- 生态合作媒体 一共三行 -->
    <div class="ml10% mr10% h-[120px] w-80% flex flex-wrap justify-between">
      <span v-for="(item, index) in list" :key="index" class="inline-block w120px">
        <img class="h120px w120px" :src="item.image1">
      </span>
    </div>
    <div class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list2" :key="index" class="h-full">
        <img class="h-full w-full" :src="item.image1">
      </span>
    </div>
    <div class="% ml10% mr10% h-[120px] w-80% flex">
      <span v-for="(item, index) in list3" :key="index" class="h-full" :class="index === 0 ? '' : 'ml5%'">
        <img class="h-full w-full" :src="item.image1">
      </span>
    </div>
    <p class="ml10% font-size-[20px] color-[#05BAB3] font-bold">
      战略合作媒体
    </p>
    <div class="ml10% mr10% h-[120px] w-80% flex flex-wrap justify-between">
      <span
        v-for="(item, index) in strategicCooperativeMediaList" :key="index"
        class="inline-block w120px flex items-center"
      >
        <img class="w120px" :src="item.image1">
      </span>
    </div>
    <!-- 55+42 -->
    <p class="ml10% font-size-[20px] color-[#05BAB3] font-bold">
      新闻媒体
    </p>
    <div class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div v-if="flag" class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div v-if="flag" class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <el-button class="ml47%" @click="changeFlag">
      {{ buttonName }}
    </el-button>
  </div>
  <!-- 移动端合作伙伴 -->
  <div class="mt-[10px] w-full md-hidden">
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">生态合作伙伴</span>&nbsp;
      <span class="font-size-[12px]">Ecological partner</span>
    </div>
    <div class="w-full flex flex-wrap">
      <span v-for="(item, index) in phoneList1" :key="index" class="h-full w-16%" :class="index % 5 === 0 ? '' : 'ml4%'">
        <img class="h-full w-full" :src="item.image1">
      </span>
    </div>
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">战略合作媒体</span>&nbsp;
      <span class="font-size-[12px]">Strategic cooperative media</span>
    </div>
    <div class="w-full flex flex-wrap justify-between">
      <span v-for="(item, index) in strategicCooperativeMediaList" :key="index" class="h-full w-22%">
        <img class="h-full w-full" :src="item.image1">
      </span>
    </div>
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">合作媒体</span>&nbsp;
      <span class="font-size-[12px]">Partner Media</span>
    </div>
    <div class="w-full flex flex-wrap justify-between">
      <span v-for="(item, index) in list2" :key="index" class="h-full w-22%">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div v-if="flag" class="w-full flex flex-wrap justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full w-22%">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <el-button class="ml40%" @click="changeFlag">
      {{ buttonName }}
    </el-button>
  </div>
</template>

<style scoped></style>
