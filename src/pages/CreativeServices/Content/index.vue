<script setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'

/*
    定义一个变量来控制发布视频还是发布图片
*/
const releaseMethodActiveIndex = ref(0)
function changeReleaseMethodActiveIndex(index) {
  releaseMethodActiveIndex.value = index
}
</script>

<template>
  <div class="rounded-10px bg-#fff">
    <div class="h80px w-full flex items-center pl2%">
      <span
        class="inline-block h-90% w8% flex justify-center font-size-16px line-height-80px"
        :class="releaseMethodActiveIndex === 0 ? 'border-b-2px border-#00B4BC border-solid' : ''"
        @click="changeReleaseMethodActiveIndex(0)"
      >上传视频</span>
      <span
        class="inline-block h-90% w8% flex justify-center font-size-16px line-height-80px"
        :class="releaseMethodActiveIndex === 1 ? 'border-b-2px border-#00B4BC border-solid' : ''"
        @click="changeReleaseMethodActiveIndex(1)"
      >上传图文</span>
    </div>
    <div v-show="releaseMethodActiveIndex === 0" class="h600px w-full rounded-10px bg-#fff p3%">
      <el-upload
        class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
      >
        <el-icon class="el-icon--upload">
          <UploadFilled />
        </el-icon>
        <div class="el-upload__text">
          拖拽视频到此<em>或点击上传</em>
        </div>
        <button class="mt20px h40px w15% rounded-5px bg-#00B4BC color-#fff">
          上传视频
        </button>
      </el-upload>
      <div class="h200px w-full flex items-center justify-between">
        <div
          class="border-grey h80% w-32% flex flex-col items-center justify-center border-1px rounded-10px border-dashed"
        >
          <p class="font-size-14px color-#262626">
            视频大小
          </p>
          <p class="pb5px pt5px font-size-12px color-#8c8c8c">
            支持时长60分钟以内
          </p>
          <p class="font-size-12px color-#8c8c8c">
            最大20GB的视频文件
          </p>
        </div>
        <div
          class="border-grey h80% w-32% flex flex-col items-center justify-center border-1px rounded-10px border-dashed"
        >
          <p class="font-size-14px color-#262626">
            视频格式
          </p>
          <p class="pb5px pt5px font-size-12px color-#8c8c8c">
            支持常用视频格式
          </p>
          <p class="font-size-12px color-#8c8c8c">
            推荐使用mp4、mov
          </p>
        </div>
        <div
          class="border-grey h80% w-32% flex flex-col items-center justify-center border-1px rounded-10px border-dashed"
        >
          <p class="font-size-14px color-#262626">
            视频分辨率
          </p>
          <p class="pb5px pt5px font-size-12px color-#8c8c8c">
            推荐上传720P（1280*720）及以上视频，
          </p>
          <p class="font-size-12px color-#8c8c8c">
            超过1080P的视频用网页端上传画质更清晰
          </p>
        </div>
      </div>
    </div>
    <div v-show="releaseMethodActiveIndex === 1" class="h400px w-full bg-yellow">
      dsd
    </div>
  </div>
</template>

<style scoped></style>
