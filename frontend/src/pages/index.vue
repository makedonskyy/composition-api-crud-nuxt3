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
          <ButtonMain>
            <NuxtLink :to="`/${id}/edit`" @click="setStatus(false)">
              Add
            </NuxtLink>
          </ButtonMain>
        </div>
      </li>
      <li v-for="item in listTemperature" :key="item.id" class="table-row">
        <div class="col col-4" data-label="id">
          {{ item.id }}
        </div>
        <div class="col col-2" data-label="temperature">
          {{ item.temperature }}
        </div>
        <div class="col col-1 button_place" data-label="buttons">
          <ButtonMain>
            <NuxtLink :to="`/${item.id}/edit`" @click="setStatus(true)">
              Edit
            </NuxtLink>
          </ButtonMain>

          <ButtonMain type="button">
            <a href="#modal-delete">Delete</a>
          </ButtonMain>

          <div id="modal-delete" class="modal">
            <div class="modal__content">
              <h1>Are you sure you want to delete this value?</h1>
              <div class="button_place">
                <ButtonMain style="background-color: red" type="button" @click="deleteTemperature(item)">
                  Delete
                </ButtonMain>
                <ButtonMain>
                  <a href="#" class="modal__close">Close</a>
                </ButtonMain>
              </div>
            </div>
          </div>
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
import ButtonMain from '~/components/ui/ButtonMain.vue'

// сразу генерируем id нового показания
const id = ref(uuidv4())

// получаем экземпляр хранилища
const temperatureStore = useTemperatureStore()

// вычисляемое свойство для получения массива данных
const listTemperature = computed(() => temperatureStore.data)

// методы, использующие actions из хранилища
const setStatus = (status: boolean) => temperatureStore.setStatus(status)
const deleteTemperature = (item: TemperatureItem) => temperatureStore.deleteTemperature(item)

const initData = () => temperatureStore.initializeData()

onBeforeMount(() => {
  initData()
})
</script>
