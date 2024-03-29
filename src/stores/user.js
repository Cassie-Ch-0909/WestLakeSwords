import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // username 从localstorage获取
  const username = ref('')
  username.value = JSON.parse(localStorage.getItem('userInfo'))
  const token = ref('')
  token.value = JSON.parse(localStorage.getItem('token'))
  return (
    {
      username,
      token,
    }
  )
}, {
  persist: true,
})
