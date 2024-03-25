<script setup>
import { ref } from 'vue'

const list = ref([
  {
    i: 'icon-jingxuanwenzhang',
    type: '精选文章',
  },
  {
    i: 'icon-web_anquankekao',
    type: 'Web安全',
  },
  {
    i: 'icon-shujuanquan',
    type: '数据安全',
  },
  {
    i: 'icon-zhongduananquan',
    type: '终端安全',
  },
  {
    i: 'icon-xitonganquan',
    type: '系统安全',
  },
  {
    i: 'icon-gongkonganquan',
    type: '工控安全',
  },
  {
    i: 'icon-wuxiananquan',
    type: '无线安全',
  },
  {
    i: 'icon-renwuzhi',
    type: '人物志',
  },
  {
    i: 'icon-liwuhuodong',
    type: '活动',
  },
  {
    i: 'icon-jiaoben',
    type: '代码人生',
  },
  {
    i: 'icon-31paixingbang',
    type: '排行榜',
  },
])
</script>

<template>
  <div class="mt20px w180px border-2px border-#E0E0E0 rounded-10px border-solid pb10px pt10px">
    <ul class="w-full">
      <li
        v-for="(item, index) in list " :key="index" class="ml5% h56px w-90% flex items-center rounded-10px hover:bg-[#00B4BC] hover:color-#fff"
        :class="index === 0 ? 'relative' : ''"
      >
        <i class="iconfont pl20px" :class="item.i" />
        <span class="pl20px">{{ item.type }}</span>
        <img v-show="index === 0" src="/public/hottopic/new.png" alt="" class="absolute right-25px top-0px w-25px">
      </li>
    </ul>
  </div>
</template>
