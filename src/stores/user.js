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
        单独设置userInfo的值
    */
    function setUserInfo(userInfoValue) {
      userInfo.value = userInfoValue
    }

    /*
        获取用户信息
    */
    async function getUserInfo() {
      const res = await getUserInfoAPI()
      // userInfo.value =
      setUserInfo(res.data)
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
