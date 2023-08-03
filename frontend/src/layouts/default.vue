<script setup lang="ts">

</script>

<template>
  <ClientOnly>
    <div class="overflow-hidden xl:overflow-auto">
      <slot />
    </div>
  </ClientOnly>
</template>

<style lang="scss">
@use '@/assets/scss/base';
</style>
