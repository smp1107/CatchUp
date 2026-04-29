<script setup>
import { toRefs } from 'vue'
import MealItem from './meal-item.component.vue'

  const props = defineProps({
    meals: { type: Array, required: true }
  })

  const { meals } = toRefs(props)
</script>

<template>
  <div class="flex flex-wrap gap-3 p-3" aria-label="Meal list">
    <div v-for="meal in meals"
         :key="meal.id"
         style="width: 200px;">
      <meal-item :meal="meal"/>
    </div>
  </div>
</template>

<style scoped>

</style>