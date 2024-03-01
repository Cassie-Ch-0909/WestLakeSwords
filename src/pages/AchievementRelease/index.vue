<script setup>
const whiteBooksList = ref([
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/7/70fe3218d7ae4f58ae91a838ed4d64dd.jpg',
    name: '2023西湖论剑-11周年精华特刊',
    content: '建没数宇中国是我国的重要国策。在《数宇中国建设整体布局规划〉(以下简称《规划》)中明确了数字中国建设按照“2522”的整体框架进行布局。整体框架中，一方面着重强调了数字安全的重要性，数字安全和数字技术并列为支撑数字中国建设的两大能力。另一方面，“安全”在2522框架中无处不在——数字基础设施不可无安全保障，数据资源大循环不可无安全赋能，建设公平规范的数字治理生态不可无安全辅助。建设数字中国，构筑数字安全屏障势在必行。',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8cc23042ae8f4a6e80f25997132d13c0.png',
    name: '2023数字安全能力洞察报告',
    content: '数字经济成为全球新一轮科技革命和产业变革的重要引擎，将开启人类数字文明的新时代。数字安全的基础性作用日益突出，在数字化建设进程中，加紧实施国家信息化发展战略，筑牢可信可控的数字安全屏障，夯实数字基础设施安全底座，增强关键基础设施安全韧性，助力数字社会安全发展，已成为支撑现代化建设、增强国家综合实力的必然选择。',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/0bfbde79d1774b43bab8f03d1c75e44c.png',
    name: '安恒信息2023年行业解决方案蓝皮书（全6本）',
    content: '数字安全是未来数字化发展的重要组成部分，立足数字安全建设。备预不虞，为国常道，安恒信息结合多年网络安全、数据安全经验以及对行业发展趋势的理解和把握，安恒信息首次发布六大行业解决方案蓝皮书，全面介绍网信、公安、运营商、金融、教育、交通六大行业中的解决方案最佳实践，为产业数字化发展指明了方向，全面加速推动经济社会全面发展。',
  },
])
</script>

<template>
  <!-- PC端成果发布 -->
  <div class="[#98EAF7] w-full from-[#8EEDF0] to-[#8EC4F7] from-10% to-90% via-30% bg-gradient-to-r pb50px max-md:hidden">
    <div class="ml10% mr10% h-full w-80%">
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        成果发布
      </p>
      <div class="mt50px flex justify-between">
        <p class="font-size-28px color-[#fff] font-bold">
          白皮书
          <span class="font-size-20px">White Paper</span>
        </p>
        <el-carousel height="400px" direction="vertical" type="card" :autoplay="false" class="w70%">
          <el-carousel-item v-for="item in whiteBooksList" :key="item" class="flex shadow-lg">
            <img
              class="h-full"
              :src="item.img" alt=""
            >
            <div class="flex flex-1 flex-col justify-evenly p15px">
              <p class="font-size-18px color-[#2DB1BA] font-bold">
                {{ item.name }}
              </p>
              <p class="font-size-12px">
                {{ item.content }}
              </p>
              <div class="h40px w-full flex items-center justify-end">
                <div
                  class="h25px w80px flex items-center justify-center rounded-15px bg-[#2DB1BA] font-size-12px color-[#fff] font-bold"
                >
                  立即下载
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <p class="mt80px font-size-28px color-[#fff] font-bold">
        新品发布
        <span class="font-size-20px">New Product Launch</span>
      </p>
      <div class="mt30px h300px w-full flex justify-between">
        <div class="bg h-full w47% bg-blue shadow-lg">
          <p class="h-30% w-full flex items-center justify-center font-size-24px color-[#fff] font-bold">
            下一代防火墙
          </p>
          <p class="h50% w-full pl-15px pr-15px font-size-14px color-[#fff]">
            明御防火墙（DAS-TGFW）秉持“持续边界安全态势改善”的理念，以用户为核心，以边界、应用、威胁、权限为防护对象，构建了以资产为视角的可持续智能安全运营防护体系。是集传统防火墙、入侵防御、防病毒、上网行为管控、VPN、威胁情报等安全模块于一身，同时可联合态势感知、EDR等产品进行一体化建设的智能安全网关。
          </p>
          <div class="h-20% w-full flex items-center justify-between pl10px pr15px">
            <div class="h30px w100px flex items-center justify-center rounded-15px bg-[#2DB1BA] color-[#fff]">
              申请试用
            </div>
            <div class="color-[#002D46] font-bold">
              了解更多
            </div>
          </div>
        </div>
        <div class="bg2 h-full w47% bg-blue shadow-lg">
          <p class="h-30% w-full flex items-center justify-center font-size-24px color-[#fff] font-bold">
            安全托管运营服务MSS
          </p>
          <p class="h50% w-70% pl-15px pr-15px font-size-14px color-[#fff]">
            提供体系化、常态化的安全托管服务，协助构建7*24小时全天候、全方位的安全运营体系， 实现安全风险从发现到响应处置的闭环，持续不断提高网络安全水平
          </p>
          <div class="h-20% w-full flex items-center justify-between pl10px pr15px">
            <div class="h30px w100px flex items-center justify-center rounded-15px bg-[#2DB1BA] color-[#fff]">
              申请试用
            </div>
            <div class="color-[#fff] font-bold">
              了解更多
            </div>
          </div>
        </div>
      </div>
      <p class="mt80px font-size-28px color-[#fff] font-bold">
        书籍
        <span class="font-size-20px">Books</span>
      </p>
      <div class="bg3 mt30px h300px w-full flex flex-col items-center justify-center shadow-lg">
        <p class="font-size-22px color-#2DB1BA font-bold">
          数据安全与隐私计算
        </p>
        <div class="h-70% w-full flex items-center justify-center pl10% pr10%">
          <img class="h-full" src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/cd902015f99246108a0615d4668f5d0d.png" alt="">
          <div class="font-size-14px">
            本书首先介绍了业内多个具备代表性的数据安全理论及实践框架，从数 据常见风险出发，引出数据安全保护最佳实践，然后介绍了数字经济时代数据要素市场的基本信息，基于构建数据要素市场、促进数据合规安全流通，释放数据价值等场景中的实践，抽象并总结了一套数据要素可信、安全、合 规流通的体系架构，包括数据安全保护技术与保护数据价值释放的隐私计算 技术，最后针对政务、金融、电力能源、公安行业等重点行业，分析了数据 安全与数据孤岛现象的根本原因，介绍了数据安全实践案例，以及如何通过 部署数据要素流通体系架构，打破“数据壁垒”，促进多方数据融合计算的实践案例。 本书可以作为高校学生、隐私计算技术从业者、数据要素市场从业者、 数据安全行业从业者的入门读物，也可作为相关机构或组织进行数据要素市 场流通体系建设实践的参考指南。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/bf77ef3740464bd38b383633d30831a6.jpg');
}

.bg2 {
  background-image: url('https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/500e36be359f492ab623b7998263ccc2.jpg');
}
.bg3 {
  background-image: url('https://www.gcsis.cn/img/cg5.jpg');
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff;
}
</style>
