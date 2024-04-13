<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const speedDeg = 0.01
const r = 0.5
let frameId = 0

const buttonRef = ref(null)

function rotateBg() {
  if (buttonRef.value) {
    const nativeNode = buttonRef.value as HTMLButtonElement
    if (nativeNode) {
      const bgPos = nativeNode.style.backgroundPosition
      if (!bgPos) {
        nativeNode.style.backgroundPosition = '0% 50%'
      }
      else {
        const arr = bgPos.split(' ')
        let x = Number(arr[0].substring(0, arr[0].length - 1)) / 100 - r
        let y = Number(arr[1].substring(0, arr[1].length - 1)) / 100 - r

        x = x * Math.cos(speedDeg) - y * Math.sin(speedDeg)
        y = y * Math.cos(speedDeg) + x * Math.sin(speedDeg)

        nativeNode.style.backgroundPosition = `${(x + r) * 100}% ${(y + r) * 100
          }%`
      }

      frameId = requestAnimationFrame(rotateBg)
    }
  }
}

onMounted(() => {
  if (buttonRef.value)
    frameId = requestAnimationFrame(rotateBg)
})

onUnmounted(() => frameId && cancelAnimationFrame(frameId))
</script>

<template>
  <div>
    <div ref="buttonRef" class="container">
      退出登录
    </div>
  </div>
</template>

<style scoped lang="scss">
// LIVE 【补充】
.svg {
  width: 30px;
  position: absolute;
  right: -20px;
  top: calc(10% - 98px);
}
.container {
  position: relative;
  width: 150px;
  height: 30px;
  border-radius: 15px;
  background-size: 200% 600%;
  background-image: radial-gradient(
    closest-side,
    #14ccc9 5%,
    $buttonColor 50%,
    #14ccc9 100%
  );
  background-position: 0% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 13px;
  cursor: pointer;
}
</style>
