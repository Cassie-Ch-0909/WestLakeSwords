<script setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

/*
    定义一个变量来控制发布视频还是发布图片
*/
const releaseMethodActiveIndex = ref(0)
function changeReleaseMethodActiveIndex(index) {
  releaseMethodActiveIndex.value = index
}

// 定义一个变量来控制page1 还是page2
const isPage1Flag = ref(true)

function changeIsPage1Flag(flag) {
  isPage1Flag.value = flag
}

// 输入框
const title = ref('')
const desc = ref('')

// 获取当前日期
const date = new Date()

// 获取当前月份
let nowMonth = date.getMonth() + 1

// 获取当前是几号
let strDate = date.getDate()

// 添加分隔符“-”
const seperator = '-'

// 对月份进行处理，1-9月在前面添加一个“0”
if (nowMonth >= 1 && nowMonth <= 9)
  nowMonth = `0${nowMonth}`

// 对月份进行处理，1-9号在前面添加一个“0”
if (strDate >= 0 && strDate <= 9)
  strDate = `0${strDate}`

// 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
const nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate
// console.log(nowDate)

// 发布笔记 跳转到true
function publishNote() {
  ElMessage({
    message: '发布成功',
    type: 'success',
  })
  setTimeout(() => {
    changeIsPage1Flag(true)
  }, 2000)
}
</script>

<template>
  <div v-if="isPage1Flag" class="rounded-10px bg-#fff">
    <div class="h80px w-full flex items-center pl2%">
      <span
        class="inline-block h-90% w8% flex cursor-pointer justify-center font-size-16px line-height-80px"
        :class="
          releaseMethodActiveIndex === 0
            ? 'border-b-2px border-#00B4BC border-solid'
            : ''
        "
        @click="changeReleaseMethodActiveIndex(0)"
      >上传视频</span>
      <span
        class="inline-block h-90% w8% flex cursor-pointer justify-center font-size-16px line-height-80px"
        :class="
          releaseMethodActiveIndex === 1
            ? 'border-b-2px border-#00B4BC border-solid'
            : ''
        "
        @click="changeReleaseMethodActiveIndex(1)"
      >上传图文</span>
    </div>
    <div
      v-show="releaseMethodActiveIndex === 0"
      class="h600px w-full rounded-10px bg-#fff p3%"
    >
      <el-upload
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
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
    <div
      v-show="releaseMethodActiveIndex === 1"
      class="relative h600px w-full rounded-10px bg-#fff p3%"
    >
      <el-upload
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :on-success="handleSuccess"
      >
        <span
          class="absolute right-10px top-10px h10px w10px rounded-50% bg-#00B4BC"
          @click="changeIsPage1Flag(false)"
        />
        <el-icon class="el-icon--upload">
          <UploadFilled />
        </el-icon>
        <div class="el-upload__text">
          拖拽图片到此<em>或点击上传</em>
        </div>
        <button class="mt20px h40px w15% rounded-5px bg-#00B4BC color-#fff">
          上传图片
        </button>
      </el-upload>
      <div class="h200px w-full flex items-center justify-between">
        <div
          class="border-grey h80% w-32% flex flex-col items-center justify-center border-1px rounded-10px border-dashed"
        >
          <p class="font-size-14px color-#262626">
            图片大小
          </p>
          <p class="pb5px pt5px font-size-12px color-#8c8c8c">
            支持上传的图片大小，
          </p>
          <p class="font-size-12px color-#8c8c8c">
            最大20MB的图片文件
          </p>
        </div>
        <div
          class="border-grey h80% w-32% flex flex-col items-center justify-center border-1px rounded-10px border-dashed"
        >
          <p class="font-size-14px color-#262626">
            图片格式
          </p>
          <p class="pb5px pt5px font-size-12px color-#8c8c8c">
            支持上传的图片格式，
          </p>
          <p class="font-size-12px color-#8c8c8c">
            推荐使用png、jpg、jpeg、webp
          </p>
        </div>
        <div
          class="border-grey h80% w-32% flex flex-col items-center justify-center border-1px rounded-10px border-dashed"
        >
          <p class="font-size-14px color-#262626">
            图片分辨率
          </p>
          <p class="pb5px pt5px font-size-12px color-#8c8c8c">
            推荐上传宽高比为3:4、分辨率不低于720*960的照片，
          </p>
          <p class="font-size-12px color-#8c8c8c">
            超过1280P的图片用网页端上传画质更清晰
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="h830px w-full rounded-10px bg-#fff p30px">
    <!-- 发布图文 -->
    <div class="w-full flex items-center">
      <span class="mr10px inline-block h20px w6px bg-#00B4BC" />
      发布图文
    </div>
    <!-- 图片编辑 -->
    <div class="mt20px w-full flex">
      <div class="w65%">
        <!-- 图片编辑 +上传更多 -->
        <div class="w-full flex items-center">
          <p class="mr20px font-size-20px">
            图片编辑
          </p>
          <div class="font-size-16px color-#00B4BC">
            + 上传更多
          </div>
        </div>
        <!-- 图片的框 -->
        <div class="mt15px h120px w-full rounded-5px">
          <img
            src="/public/about/1.webp"
            class="h-120px w-120px border-1px border-#D9D9D9 rounded-5px border-solid"
            alt=""
          >
        </div>
        <!-- 填写标题，可能会有更多赞哦~ -->
        <input
          v-model="title"
          type="text"
          placeholder="填写标题，可能会有更多赞哦"
          class="mt12px h35px w-98% cursor-pointer border-1px border-#D9D9D9 rounded-3px border-solid pl10px"
        >
        <!-- 填写更全面的描述信息，让更多的人看到你吧! -->
        <textarea
          v-model="desc"
          placeholder="填写更全面的描述信息，让更多的人看到你吧!"
          class="mt12px h100px w-98% cursor-pointer border-1px border-#D9D9D9 rounded-3px border-solid pl10px pt5px"
          maxlength="1000"
        />
        <!-- #话题 @用户 表情 -->
        <div class="mt5px h30px w-full flex">
          <span
            class="mr10px inline-block h-full w70px flex cursor-pointer items-center justify-center border-1px border-#D9D9D9 rounded-5px border-solid"
          ># 话题</span>
          <span
            class="mr10px inline-block h-full w70px flex cursor-pointer items-center justify-center border-1px border-#D9D9D9 rounded-5px border-solid"
          >@ 用户</span>
          <span
            class="mr10px inline-block h-full w70px flex cursor-pointer items-center justify-center border-1px border-#D9D9D9 rounded-5px border-solid"
          ><i class="iconfont icon-biaoqing_xiao_o font-size-18px" /> &nbsp;表情</span>
        </div>
        <!-- 在图片上标记人、位置 -->
        <div
          class="mt15px h70px w-70% flex items-center justify-between bg-#FCFCFC"
        >
          <div class="h-full w-60% flex items-center">
            <img
              class="h-full"
              src="https://fe-static.xhscdn.com/formula-static/ugc/public/img/mark.b7364a1.png"
            >
            <div class="flex flex-col">
              <p>在图片上标记人、位置</p>
              <p class="font-size-12px color-#999">
                已添加0个标记
              </p>
            </div>
          </div>
          <button class="h55% w85px cursor-pointer rounded-5px bg-#00B4BC color-#fff">
            添加标记
          </button>
        </div>
        <!-- 发布设置 -->
        <p class="mt15px font-size-20px">
          发布设置
        </p>
        <!-- 添加地点 -->
        <div class="mt10px h40px w-full flex items-center pr20px">
          <p class="mr20px">
            添加地点
          </p>
          <input
            type="text"
            placeholder="填写标题，可能会有更多赞哦"
            class="h35px flex-1 cursor-pointer border-1px border-#D9D9D9 rounded-3px border-solid pl10px"
          >
        </div>
        <!-- 权限设置 -->
        <div class="mt10px h40px w-full flex items-center pr20px">
          <p class="mr20px">
            添加地点
          </p>
          <label class="pr20px"><input type="radio" value="0" name="status" checked="checked">
            公开<span class="color-#999">(所有人可见)</span></label>
          <label><input type="radio" value="1" name="status"> 私密<span
            class="color-#999"
          >(仅自己可见)</span></label>
        </div>
        <!-- 发布时间 -->
        <div class="mt10px h40px w-full flex items-center pr20px">
          <p class="mr20px">
            发布时间
          </p>
          <label class="pr20px"><input type="radio" value="0" name="sex" checked="checked">
            立即发布</label>
          <label><input type="radio" value="1" name="sex"> 定时发布</label>
        </div>
        <!-- 两个按钮 -->
        <div class="items-centeer mt25px h50px w-full flex">
          <button
            class="mr2% h90% w100px cursor-pointer rounded-5px bg-#00B4BC color-#fff"
            @click="publishNote"
          >
            发布
          </button>
          <button
            class="h90% w100px cursor-pointer border-1px border-#D9D9D9 rounded-5px border-solid bg-#fff"
          >
            取消
          </button>
        </div>
      </div>
      <div class="w35% flex justify-center">
        <div
          class="relative h75% w75% flex items-center justify-center border-1px border-#00B4BC rounded-30px border-solid"
        >
          <img
            class="absolute right-0px top-60% h30% rounded-30px"
            src="https://fe-static.xhscdn.com/formula-static/ugc/public/img/comment.3b617df.png"
          >
          <img
            class="h-98% w-98%"
            src="https://fe-static.xhscdn.com/formula-static/ugc/public/img/note-detail.e442d97.png"
          >
          <img
            class="absolute left-12% top-12% h40%"
            src="/public/about/1.webp"
          >
          <img
            src="/public/avator.jpeg"
            class="absolute left-10% top-6% w30px rounded-50%"
          >
          <img
            src="/public/avator.jpeg"
            class="absolute left-8% top-66.5% w30px rounded-50%"
          >
          <p class="absolute left-5% top-52% font-size-14px">
            {{ title }}
          </p>
          <p class="absolute left-5% top-57% font-size-14px">
            {{ desc }}
          </p>
          <p class="absolute left-5% top-62% font-size-12px color-#999">
            {{ nowDate }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
