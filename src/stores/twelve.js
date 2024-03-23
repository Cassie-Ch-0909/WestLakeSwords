import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTwelveStore = defineStore('twelve', () => {
  // 使用组件式代码书写风格

  // 控制12个面板总体的v-show
  const twelve = ref(true)
  const changeTwelveFlagtoTrue = () => {
    twelve.value = true
  }
  const changeTwelveFlagtoFalse = () => {
    twelve.value = false
  }

  // 控制选中哪个activeMoudleIndex的值
  const activeMoudleIndex = ref(999)
  // 选中对应的模块
  const changeActiveIndex = (index) => {
    activeMoudleIndex.value = index
  }
  // 不要选中任何模块
  const noActiveIndex = () => {
    activeMoudleIndex.value = 999
  }

  // 以对象的形式return供组件使用
  return {
    twelve,
    changeTwelveFlagtoTrue,
    changeTwelveFlagtoFalse,
    activeMoudleIndex,
    changeActiveIndex,
    noActiveIndex,
  }
})
