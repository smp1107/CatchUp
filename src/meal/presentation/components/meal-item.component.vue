<script setup>
import { toRefs } from 'vue'
import { Meal } from '../../domain/model/meal.entity.js'

  const props = defineProps({
    meal: { type: Meal, required: true }
  })

  const { meal } = toRefs(props)

</script>

<template>
  <pv-card aria-label="Meal card">
    <template #header>
      <img :src="meal.imageUrl"
           :alt="meal.name"
           style="width: 100%; height: 200px; object-fit: cover;"/>
    </template>
    <template #title>
      {{ meal.name }}
    </template>
  </pv-card>
</template>

<style scoped>

</style>