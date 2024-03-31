import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserInfoAPI, modifyUserInfoAPI } from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    /*
        从localstorage获取token
    */
    const token = ref()
    // token.value = localStorage.getItem("token");

    const userInfo = ref()

    /*
        设置userInfo和token的值
    */
    function setUserInfoAndToken(userInfoValue, tokenValue) {
      userInfo.value = userInfoValue
      token.value = tokenValue
    }

    /*
        获取用户信息
    */
    async function getUserInfo() {
      const res = await getUserInfoAPI()
      userInfo.value = res.data
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
      setUserInfoAndToken,
    }
  },
  {
    persist: true,
  },
)
