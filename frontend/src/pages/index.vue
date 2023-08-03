<script setup lang="ts">

import { useTemperatureStore } from '~/store/temperatureStore'

const temperatureStore = useTemperatureStore()

// onMounted(() => {
//
// })

</script>

<template>
  <div class="container">
    <h2>Показания температуры</h2>
    <ul class="responsive-table">
      <li class="table-header">
        <div class="col col-1">
          Id
        </div>
        <div class="col col-2">
          Значение температуры
        </div>
        <div class="col col-1">
          <button>
            Добавить
          </button>
        </div>
      </li>
      <li v-for="item in readings" :key="item.id" class="table-row">
        <div class="col col-1" data-label="id">
          {{ item.id }}
        </div>
        <div class="col col-2" data-label="temperature">
          {{ item.temperature }}
        </div>
        <div class="col col-2" data-label="buttons">
          <button @click="confirmDelete(reading.id)">
            Удалить
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
