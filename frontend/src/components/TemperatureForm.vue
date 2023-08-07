<template>
  <!--   проверяем, есть ли у нас initialValues, чтобы страница не упала, если они не успели подгрузиться-->
  <div v-if="initialValues">
    <h2>{{ title }}</h2>
    <form @submit="checkForm">
      <div class="form__group field">
        <input
          id="temperature"
          v-model="temperature"
          type="text"
          class="form__field"
          placeholder="Temperature"
          name="temperature"
        >
        <label for="temperature" class="form__label">Temperature</label>
      </div>
      <button type="submit">
        Save
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">

import { TemperatureItem } from '~/types/types'

const emit = defineEmits(['temperatureAddSubmit'])

const props = defineProps({
  create: {
    type: Boolean,
    default: false
  },
  initialValues: {
    type: Object,
    default: () => ({
    } as TemperatureItem),
    require: true
  }
})

const id = props.initialValues.id as string
// нам нужно, чтобы значение температуры было реактивным
const temperature = ref(props.initialValues.temperature)
const title = props.create ? 'Editing value' : 'Adding value'

// эмитим отправление формы
function checkForm (e: Event) {
  e.preventDefault()
  const formData = {
    id, temperature
  }
  emit('temperatureAddSubmit', formData)
}

</script>
