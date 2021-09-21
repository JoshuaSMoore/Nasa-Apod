<template>
  <card-header class="text-center">
    <form @submit.prevent="findImagebyDate()">
      <input type="date" id="" v-model="state.date">
      <button @click="submit">
        <i class="mdi mdi-space-invaders" type="submit">
        </i>
      </button>
    </form>
    <h4 class="text-center p-2">
      "{{ state.calendar.title }}"
    </h4>
  </card-header>
  <div class="text-center ">
    <img :src="state.calendar.image" />
  </div>
  <div class="d-flex justify-content-bottom text-center">
    <card-footer>
      <span>{{ state.calendar.description }} </span>
    </card-footer>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { nasaService } from '../services/NasaService.js'
export default {
  name: 'CalendarPage',
  setup() {
    const state = reactive({
      date: '',
      calendar: computed(() => AppState.calendar),
      description: computed(() => AppState.description),
      title: computed(() => AppState.title)
    })
    return {
      state,
      async findImagebyDate() {
        await nasaService.findImagebyDate(state.date)
      }
    }
  }
}
</script>
<style scoped>

img{
background-size: cover;
max-height: 50vh;
max-width: 50vw;
min-height: 25vh;
}
</style>
