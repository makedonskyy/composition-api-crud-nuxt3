import { defineStore } from 'pinia'
import { TemperatureItem, TemperatureState } from '~/types/types'

export const useTemperatureStore = defineStore('temperature', {
  state: (): TemperatureState => ({
    readings: JSON.parse(localStorage.getItem('temperatureData') || '[]' as string) as TemperatureItem[]
  }),
  actions: {
    addReading (reading: TemperatureItem): void {
      this.readings.unshift(reading)
      this.updateLocalStorage()
    },
    updateReading (updatedReading: TemperatureItem): void {
      const index: number = this.readings.findIndex(reading => reading.id === updatedReading.id)
      if (index !== -1) {
        this.readings.splice(index, 1, updatedReading)
        this.updateLocalStorage()
      }
    },
    deleteReading (readingId: string): void {
      const index: number = this.readings.findIndex(reading => reading.id === readingId)
      if (index !== -1) {
        this.readings.splice(index, 1)
        this.updateLocalStorage()
      }
    },
    updateLocalStorage (): void {
      localStorage.setItem('temperatureData', JSON.stringify(this.readings))
    }
  }
})
