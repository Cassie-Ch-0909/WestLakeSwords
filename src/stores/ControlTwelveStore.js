import { defineStore } from 'pinia'

export const ControlTwelveStore = defineStore('ControlTwelveStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      isTwelveShow: false,
    }
  },
})
