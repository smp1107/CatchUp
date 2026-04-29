<script setup>
  import { toRefs } from 'vue'
  import CategoryItem from './category-item.component.vue'

  const props = defineProps({
      categories: { type: Array, required: true }
    })

  const emit = defineEmits(['category-selected'])

  const { categories } = toRefs(props)

  function onCategorySelected(category) {
    emit('category-selected', category)
  }

</script>

<template>
  <div aria-label="Category list">
    <category-item
        v-for="category in categories"
        :key="category.id"
        :category="category"
        @category-selected="onCategorySelected"/>
  </div>
</template>

<style scoped>

</style>