<script setup>
import { toRefs } from 'vue'
import { Category } from '../../domain/model/category.entity.js'

const props = defineProps({
  category: { type: Category, required: true }
})

const emit = defineEmits(['category-selected'])

const { category } = toRefs(props)

function emitCategorySelected() {
  emit('category-selected', category.value)
}
</script>

<template>
  <div class="flex align-items-center gap-2 p-2 cursor-pointer"
       aria-role="button"
       :aria-label="category.name"
       @click="emitCategorySelected">
    <img :src="category.imageUrl"
         :alt="category.name"
         width="40"
         height="40"
         style="border-radius: 50%"/>
    <span>{{ category.name }}</span>
  </div>
</template>

<style scoped>

</style>