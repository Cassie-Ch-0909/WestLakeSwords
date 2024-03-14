<script setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { reactive } from 'vue-demi'

const state = reactive({
  path: [],
  current_position: [],
})

// 进行地图初始化
function initMap() {
  AMapLoader.load({
    key: '528de2b6fe1df1fc678dfca6786d112d', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  })
    .then((AMap) => {
      const map = new AMap.Map('container', {
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 10, // 初始化地图级别
        center: [120.222355, 30.447843], // 初始化地图中心点位置
      })
      // 添加插件
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye'], () => {
        // 异步同时加载多个插件
        map.addControl(new AMap.HawkEye()) // 显示缩略图
        map.addControl(new AMap.Scale()) // 显示当前地图中心的比例尺
      })
      // 单击
      // map.on('click', (e) => {
      // console.log(e);

      // 地图按照适合展示图层内数据的缩放等级展示
      // map.setFitView();
      // 萧山国际机场
      state.current_position = [120.4339981, 30.22949982]
      state.path.push([120.443644, 30.241397],
      )
      addMarkerBlue()
      addPolyLine()

      // 杭州洲际酒店
      state.current_position = [120.222355, 30.447843]
      state.path.push([120.222355, 30.447843])
      addMarkerRed()
      addPolyLine()

      // 杭州东站
      state.current_position = [120.210405, 30.274338]
      state.path.push([120.210405, 30.274338],
      )
      addMarkerBlue()
      addPolyLine()
      // })

      // 实例化点标记
      function addMarkerRed() {
        const marker = new AMap.Marker({
          icon: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png',
          position: state.current_position,
          offset: new AMap.Pixel(-26, -54),
        })
        marker.setMap(map)
      }

      function addMarkerBlue() {
        const marker = new AMap.Marker({
          icon: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
          position: state.current_position,
          offset: new AMap.Pixel(-26, -54),
        })
        marker.setMap(map)
      }

      // 折线
      function addPolyLine() {
        const polyline = new AMap.Polyline({
          path: state.path,
          isOutline: true,
          outlineColor: '#277E86',
          borderWeight: 1,
          strokeColor: '#277E86',
          strokeOpacity: 0.6,
          strokeWeight: 5,
          // 折线样式还支持 'dashed'
          strokeStyle: 'solid',
          // strokeStyle是dashed时有效
          // strokeDasharray: [10, 5],
          lineJoin: 'round',
          lineCap: 'round',
          zIndex: 50,
        })
        map.add([polyline])
      }
    })
    .catch(() => {
      // console.log(e)
    })
}
initMap()
</script>

<template>
  <div id="container" class="max-md:hidden" />
</template>

<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
