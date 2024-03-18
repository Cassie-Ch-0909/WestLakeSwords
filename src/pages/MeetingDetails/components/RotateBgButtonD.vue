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
      订阅
      <!-- LIVE -->
      <!-- <svg t="1707897543779" class="icon svg" viewBox="0 0 1962 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1066" width="200" height="200"><path d="M0 0m127.579148 0l1212.001909 0q127.579148 0 127.579148 127.579148l0 510.316593q0 127.579148-127.579148 127.579149l-1212.001909 0q-127.579148 0-127.579148-127.579149l0-510.316593q0-127.579148 127.579148-127.579148Z" fill="#E22A2A" p-id="1067" /><path d="M449.078602 493.731304v67.42558H230.6631V206.997168h77.568122V493.731304zM500.110261 206.997168h77.568122v354.159716H500.110261zM623.606877 206.997168h85.733187L794.562936 478.421806h3.061899l88.284771-271.488427h80.630021L842.022379 561.156884h-96.449836zM1235.986789 493.731304v67.42558h-223.518668V206.997168h216.374235V274.295169h-138.806113v72.975273h128.599781V412.080649h-128.599781v81.650655z" fill="#FFFFFF" p-id="1068" /></svg> -->
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
  width: 120px;
  height: 26px;
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
