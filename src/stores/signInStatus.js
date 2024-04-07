import { defineStore } from 'pinia'
import { ref } from 'vue'

export const signInStatusStore = defineStore(
  'signIn',
  () => {
    const isSignInFlag = ref(true)
    function changeIsSignInFlag() {
      isSignInFlag.value = false
    }

    return {
      isSignInFlag,
      changeIsSignInFlag,
    }
  },
  {
    persist: true,
  },
)
