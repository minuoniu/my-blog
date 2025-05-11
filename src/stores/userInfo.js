import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useUserInfoStore = defineStore('userInfo', () => {
    const userInfo = ref({
      name: '',
      age: '',
      address: ''
    })

    function setUserInfo(payload) {
      userInfo.value = payload
    }

    return {userInfo, setUserInfo}
  },
  {
    persist: {
      storage: sessionStorage,
      key: ['userInfo']
    }
  }
)
