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
      <div class="button_place button_margin">
        <ButtonMain type="submit">
          Save
        </ButtonMain>

        <ButtonMain type="button">
          <a href="#modal-home">Go home</a>
        </ButtonMain>

        <div id="modal-home" class="modal">
          <div class="modal__content">
            <h1>Are you sure you don't want to save this value?</h1>
            <div class="button_place">
              <ButtonMain style="background-color: red" type="button">
                <NuxtLink to="/">
                  Don't save
                </NuxtLink>
              </ButtonMain>
              <ButtonMain type="submit">
                Save
              </ButtonMain>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

import { TemperatureItem } from '~/types/types'
import ButtonMain from '~/components/ui/ButtonMain.vue'

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

<style scoped lang="scss">
.button_margin {
  margin-top: 10px;
}

h2{
  color: white;
}
</style>
