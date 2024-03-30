import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserInfoAPI } from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    /*
      从localstorage获取token
  */
    const token = ref('')
    token.value = localStorage.getItem('token')

    const userInfo = ref()
    /*
      获取用户信息
  */
    async function getUserInfo() {
      const res = await getUserInfoAPI()
      userInfo.value = res.data
    }

    return {
      userInfo,
      token,
      getUserInfo,
    }
  },
  {
    persist: true,
  },
)
