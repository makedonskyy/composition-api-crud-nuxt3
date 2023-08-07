<template>
  <div>
    <TemperatureForm
      :initial-values="getItemTemperature(id as string)"
      :create="isCreatingStatus"
      @temperature-add-submit="onSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { useTemperatureStore } from '~/store/temperatureStore'
import { TemperatureItem } from '~/types/types'

// Получаем текущий роут с помощью useRoute()
const route = useRoute()
const id = ref(route.params.id)

const temperatureStore = useTemperatureStore()

// Получаем данные из хранилища текущего статуса страницы
const isCreatingStatus = computed(() => temperatureStore.isCreating)

// Получаем функции из хранилища
const getItemTemperature = (id: string) => temperatureStore.getItemTemperature(id)

const addTemperature = (item: TemperatureItem) => temperatureStore.addTemperature(item)

const editTemperature = (item: TemperatureItem) => temperatureStore.editTemperature(item)

// Обработчик отправки формы
function onSubmit (data: TemperatureItem) {
  // Проверяем, какой у нас сейчас статус -- добавления или редактирования
  if (!isCreatingStatus.value) {
    addTemperature(data)
    navigateTo('/')
  } else {
    // Если редактирование
    editTemperature(data)
    navigateTo('/')
  }
}
</script>
