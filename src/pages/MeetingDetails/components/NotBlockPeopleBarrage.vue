/**
* 不挡人像的弹幕
*/
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { message } from 'ant-design-vue'
import { useI18n } from 'vue-i18n'
import * as bodySegmentation from '@tensorflow-models/body-segmentation'
import '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-backend-webgl'
import { getCanvasImgDataByVideo, imageDataToDataURL } from '@/utils/fileUtil'

enum VideoStatus {
  'ready',
  'playing',
  'pause',
}

const videoWidth = 860
const videoHeight = 485
const barrageMoveSpeed = 2 // 弹幕移动速度
const barrageRowNum = 10 // 弹幕行数
const barrageTextFontSize = 20 // 弹幕文字大小
const barrageMarginTop = 4 // 每行弹幕上下间距
const drawContour = false // 是否在每个人的分割蒙版周围绘制轮廓
const foregroundThresholdProbability = 0.3 // 将像素着色为前景而不是背景的最小概率
let segmentater: any = null
let frameId = 0

const { t } = useI18n()
const videoRef = ref<HTMLVideoElement | null>(null)
const barrageBoxRef = ref<HTMLDivElement | null>(null)
const inputText = ref<string>('')
const videoStatus = ref<VideoStatus>(
  VideoStatus.ready,
)

async function setBarrageBgImage() {
  if (videoRef.value && barrageBoxRef.value) {
    const imageData = getCanvasImgDataByVideo(
      videoRef.value,
      videoWidth,
      videoHeight,
    )
    if (imageData) {
      const segmentationConfig = {
        flipHorizontal: false,
        multiSegmentaion: false,
        segmentBodyParts: false, // 如果设置为true，则24个身体部位被分割输出，否则只有前景/背景二进制分割。
        segmentationThreshold: 1,
      }
      const people = await segmentater.segmentPeople(
        imageData,
        segmentationConfig,
      )
      const foregroundColor = { r: 0, g: 0, b: 0, a: 0 }
      const backgroundColor = { r: 0, g: 0, b: 0, a: 255 }
      const backgroundDarkeningMask = await bodySegmentation.toBinaryMask(
        people,
        foregroundColor,
        backgroundColor,
        drawContour,
        foregroundThresholdProbability,
      )
      const dataUrl = imageDataToDataURL(backgroundDarkeningMask)
      // @ts-expect-errordsd
      barrageBoxRef.value.style['-webkit-mask-image'] = `url(${dataUrl})`
      barrageBoxRef.value.style[
        // @ts-expect-errordsd
        '-webkit-mask-size'
      ] = `${videoWidth}px ${videoHeight}px`

      // 处理弹幕
      const { children } = barrageBoxRef.value
      if (children && children.length > 0) {
        Array.prototype.forEach.call(children, (child) => {
          const { left } = child.style
          if (left < -videoWidth) {
            barrageBoxRef.value?.removeChild(child)
          }
          else {
            const { left } = child.style
            child.style.left = `${Number(left.substring(0, left.length - 2)) - barrageMoveSpeed
              }px`
          }
        })
      }

      frameId = window.requestAnimationFrame(setBarrageBgImage)
    }
  }
}

function onTogglePlay() {
  if (videoRef.value) {
    if (videoStatus.value === VideoStatus.playing) {
      videoStatus.value = VideoStatus.pause
      videoRef.value.pause()
    }
    else {
      videoStatus.value = VideoStatus.playing
      videoRef.value.play()
    }
  }
}

function onSend() {
  if (inputText.value) {
    if (barrageBoxRef.value) {
      const span = document.createElement('span')
      span.textContent = inputText.value
      span.style.fontSize = `${barrageTextFontSize}px`
      span.style.fontWeight = '500'
      span.style.color = '#fff'
      span.style.whiteSpace = 'nowrap'
      span.style.position = 'absolute'
      const rowIndex = Math.floor(Math.random() * barrageRowNum)
      const top = rowIndex * (barrageTextFontSize + barrageMarginTop) + 20
      span.style.top = `${top}px`
      span.style.left = `${videoWidth}px`
      barrageBoxRef.value.appendChild(span)
    }
    else {
      message.warning(t('common.tryingToLoad'))
    }
    inputText.value = ''
  }
}

async function init() {
  if (videoRef.value) {
    videoRef.value.oncanplay = () => {
      if (
        videoRef.value
        && videoRef.value?.readyState === videoRef.value.HAVE_ENOUGH_DATA
      ) {
        if (segmentater) {
          videoStatus.value = VideoStatus.playing
          videoRef.value.play()
          setBarrageBgImage()
        }
      }
    }

    // 加载模型
    const model
      = bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation
    const segmenterConfig = {
      runtime: 'mediapipe',
      modelType: 'landscape',
      solutionPath:
        'https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation',
    }

    segmentater = await bodySegmentation.createSegmenter(
      model,
      // @ts-expect-errordsd
      segmenterConfig,
    )
    if (videoStatus.value === VideoStatus.ready) {
      videoStatus.value = VideoStatus.playing
      videoRef.value.play()
      setBarrageBgImage()
    }
  }
}

onMounted(() => init())

onUnmounted(() => {
  frameId && cancelAnimationFrame(frameId)
})
</script>

<template>
  <div class="container">
    <div class="content" :style="{ width: `${videoWidth}px`, height: `${videoHeight}px` }">
      <video
        ref="videoRef"
        :style="{ width: `${videoWidth}px`, height: `${videoHeight}px` }" :muted="false"
        preload="true" loop x5-video-player-fullscreen="true" x5-playsinline="true" playsInline
        webkit-playsinline="true" crossOrigin="anonymous"
        autoplay="true"
        controls="true"
      >
        <source src="/public/video.mp4">
        <!-- <embed src="https://live.vhall.com/v3/lives/embedclient/subscribe/347881970?embed=video"> -->
      </video>
      <div ref="barrageBoxRef" class="barrageBox" />
    </div>
    <div class="bottomBox relative">
      <a-button v-if="videoStatus !== VideoStatus.ready" class="mr10px" type="primary" ghost @click="onTogglePlay">
        {{ videoStatus === VideoStatus.playing
          ? "暂停"
          : "播放" }}
      </a-button>
      <div class="ml180px">
        <span class="mr20px">发送弹幕</span>
        <a-input
          v-model:value="inputText" :placeholder="t('page.AIApplication.sendBarrage')" :max-length="20" @keydown="(e: any) => {
            if (e?.key === 'Enter') {
              onSend();
            }
          }
          "
        />
        <a-button type="primary" @click="onSend">
          {{ t("page.AIApplication.send") }}
        </a-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 860px;
  height: 540px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // background-color: #fff;
  // background-image: $globalBackgroundImage;

  .content {
    box-sizing: border-box;
    border: 1px solid #aaa;
    position: relative;

    video {
      object-fit: cover;
      z-index: 1;
    }

    .barrageBox {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      z-index: 2;
    }

    button {
      position: absolute;
      right: -80px;
      bottom: 0;
    }
  }

  .bottomBox {
    background-color: #fff;
    height: 50px;
    // margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 520px;
    }

    button {
      margin-left: 12px;
    }
  }
}
</style>
