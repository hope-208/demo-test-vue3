import { defineStore } from 'pinia'

export const useCarInfoStore = defineStore({
 id: 'carInfo',
 state: () => ({
  countCars: 0
 })
})