// store/index.ts
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    count: (() => {
      const storedState = localStorage.getItem('store')
      return storedState ? JSON.parse(storedState).count : 0
    })()
  }),
  actions: {
    increment() {
      this.count++
      this.saveState() // Chamar a função para salvar o estado no localStorage
    },
    saveState() {
      localStorage.setItem('store', JSON.stringify(this.$state))
    },
    loadState() {
      const storedState = localStorage.getItem('store')
      if (storedState) {
        return JSON.parse(storedState).count
      }
      return null
    }
  },
  getters: {
    storedState() {
      return localStorage.getItem('store')
    }
  }
})
