import { defineStore } from 'pinia'
import { ref } from 'vue'

export const loginDialogFlagStore = defineStore(
  'loginDialogFlag',
  () => {
    const loginDialogFlag = ref(false)
    function changeLoginDialogFlagTrue() {
      loginDialogFlag.value = true
    }
    function changeLoginDialogFlagFalse() {
      loginDialogFlag.value = false
    }
    return {
      loginDialogFlag,
      changeLoginDialogFlagTrue,
      changeLoginDialogFlagFalse,
    }
  },
  {
    persist: true,
  },
)
