<template>
  <div class="container">
    <h2>Temperature readings</h2>
    <ul class="responsive-table">
      <li class="table-header">
        <div class="col col-4">
          Id
        </div>
        <div class="col col-2">
          Значение температуры
        </div>
        <div class="col col-1">
          <NuxtLink :to="`/${id}/edit`" @click="setStatus(false)">
            Add
          </NuxtLink>
        </div>
      </li>
      <li v-for="item in listTemperature" :key="item.id" class="table-row">
        <div class="col col-4" data-label="id">
          {{ item.id }}
        </div>
        <div class="col col-2" data-label="temperature">
          {{ item.temperature }}
        </div>
        <div class="col col-1 flex" data-label="buttons">
          <NuxtLink :to="`/${item.id}/edit`" @click="setStatus(true)">
            Edit
          </NuxtLink>
          <button type="button" @click="deleteTemperature(item)">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">

import { computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useTemperatureStore } from '~/store/temperatureStore'
import { TemperatureItem } from '~/types/types'

// сразу генерируем id нового показания
const id = ref(uuidv4())

// получаем экземпляр хранилища
const temperatureStore = useTemperatureStore()

// вычисляемое свойство для получения массива данных
const listTemperature = computed(() => temperatureStore.data)

// методы, использующие actions из хранилища
const setStatus = (status: boolean) => temperatureStore.setStatus(status)
const deleteTemperature = (item: TemperatureItem) => temperatureStore.deleteTemperature(item)

</script>
