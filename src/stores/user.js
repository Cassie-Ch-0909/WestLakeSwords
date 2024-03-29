import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // username 从localstorage获取
  const userInfo = ref()
  userInfo.value = JSON.parse(localStorage.getItem('userInfo'))
  const token = ref('')
  token.value = localStorage.getItem('token')
  return (
    {
      userInfo,
      token,
    }
  )
}, {
  persist: true,
})
