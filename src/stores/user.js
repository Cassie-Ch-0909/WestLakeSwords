import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserInfoAPI, modifyUserInfoAPI } from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    /*
        从localstorage获取token
    */
    const token = ref('')
    // token.value = localStorage.getItem('token')

    const userInfo = ref()
    /*
        获取用户信息
    */
    async function getUserInfo() {
      const res = await getUserInfoAPI()
      userInfo.value = res.data
      token.value = res.data.token
    }

    /*
        修改用户信息
    */
    async function modifyUserInfo(data) {
      await modifyUserInfoAPI(data)
      await getUserInfo()
    }

    return {
      userInfo,
      token,
      getUserInfo,
      modifyUserInfo,
    }
  },
)
