<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { interfaceForEchartsAPI } from '@/apis/user'

// 积分明细列表
const userIntegralDetailsList = ref([])
async function interfaceForEcharts() {
  const res = await interfaceForEchartsAPI()
  userIntegralDetailsList.value = res.data
  userIntegralDetailsList.value = userIntegralDetailsList.value.map((item) => {
    return { name: item.todo, value: item.totalPoints }
  })
}

const chartDom = ref()
onMounted(async () => {
  const myChart = echarts.init(chartDom.value)
  const option = {
    title: {
      text: '积分明细一览表',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '88%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: '用户注册' },
          { value: 735, name: '签到' },
          { value: 580, name: '完善信息' },
          { value: 484, name: '观看直播（5分钟以上）' },
          { value: 300, name: '订阅' },
          { value: 300, name: '分享' },
          { value: 300, name: '线下展商打卡' },
          { value: 300, name: '邀请好友参会' },
          { value: 300, name: '答题' },
        ],
      },
    ],
  }
  await interfaceForEcharts()

  // console.log(option.series[0].data)
  option.series[0].data = userIntegralDetailsList.value
  // console.log(option.series[0].data)
  option && myChart.setOption(option)
})
</script>

<template>
  <div ref="chartDom" style="width:400px;height:400px" class="mt25px pl10px" />
</template>
