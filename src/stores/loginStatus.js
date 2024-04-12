import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginStatusStore = defineStore(
  'loginStatusFlag',
  () => {
    const loginStatusFlag = ref(false)
    function changeLoginStatusFlagTrue() {
      loginStatusFlag.value = true
    }
    function changeLoginStatusFlagFalse() {
      loginStatusFlag.value = false
    }
    return {
      loginStatusFlag,
      changeLoginStatusFlagTrue,
      changeLoginStatusFlagFalse,
    }
  },
  {
    persist: true,
  },
)
