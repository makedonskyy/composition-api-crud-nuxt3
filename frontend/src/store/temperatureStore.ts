import { defineStore } from 'pinia'
import { TemperatureItem, TemperatureState } from '~/types/types'

const localStorageKey = 'temperature_list'

export const useTemperatureStore = defineStore('temperatureStore', {
  state: (): TemperatureState => {
    return {
      data: [{ id: '123', temperature: '23' }] as TemperatureItem[],
      isLoading: false,
      isCreating: false
    }
  },
  actions: {
    // устанавливаем статус страницы -- добавление или редактирование
    setStatus (status: boolean): void {
      this.isCreating = status
    },
    // функция для получения текущего элемента
    getItemTemperature (id: string): TemperatureItem {
      const res: TemperatureItem = this.data?.find(item => item.id === id) as TemperatureItem
      if (res) {
        return res
      } else {
        // если такой элемент не найден, то по умолчанию устанавливаем значение температуры как пустую строку
        return { id, temperature: '' }
      }
    },
    // добавляем новую температуру в массив данных
    addTemperature (item: TemperatureItem): void {
      this.data ? this.data.push(item) : console.log('adding error')
      this.saveToLocalStorage()
    },
    // изменяем температуру
    editTemperature (item: TemperatureItem): void {
      this.data
        ? this.data.splice(this.data.indexOf(this.data.find(el => el.id === item.id) as TemperatureItem), 1, item)
        : console.log('editing error')
      this.saveToLocalStorage()
    },
    deleteTemperature (item: TemperatureItem) {
      this.data ? this.data.splice(this.data.indexOf(item), 1) : console.log('deleting error')
      this.saveToLocalStorage()
    },

    saveToLocalStorage () {
      localStorage.setItem(localStorageKey, JSON.stringify(this.data))
    },

    // Инициализация данных из localStorage при старте приложения
    initializeData (): void {
      const savedData: string | null = localStorage.getItem(localStorageKey)
      if (savedData) {
        this.data = JSON.parse(savedData)
      }
    },
    // очищаем локальное хранилище
    removeData () {
      localStorage.removeItem(localStorageKey)
    }
  }
})
