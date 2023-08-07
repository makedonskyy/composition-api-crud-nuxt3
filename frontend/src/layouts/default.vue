<script setup lang="ts">
import { useTemperatureStore } from '~/store/temperatureStore'

const temperatureStore = useTemperatureStore()
const removeData = () => temperatureStore.removeData()
onBeforeUnmount(() => {
  removeData()
})
</script>

<template>
  <ClientOnly>
    <div>
      <slot />
    </div>
  </ClientOnly>
</template>

<style lang="scss">
@use '@/assets/scss/base';
</style>
