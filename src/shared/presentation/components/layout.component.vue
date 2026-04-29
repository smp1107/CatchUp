<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { mealStore } from '../../../meal/application/meal.store.js'
import CategoryList from '../../../meal/presentation/components/category-list.component.vue'
import MealList from '../../../meal/presentation/components/meal-list.component.vue'
import LanguageSwitcher from './language-switcher.component.vue'
import FooterContent from './footer-content.component.vue'
const {t} = useI18n();

const categories = computed(() => mealStore.categories)
const meals = computed(() => mealStore.meals)

const onCategorySelected = (category) => {
  mealStore.setSelectedCategory(category)
}

onMounted(() => {
  mealStore.loadCategories()
})
</script>

<template>
  <div>
    <!-- Toolbar -->
    <pv-toolbar aria-label="Main toolbar">
      <template #start>
        <span class="text-xl font-bold">{{ t('toolbar.title') }}</span>
      </template>
      <template #end>
        <language-switcher/>
      </template>
    </pv-toolbar>

    <!-- Descripción -->
    <div class="p-3">
      <p>{{ t('home.description') }}</p>
    </div>

    <!-- Dos paneles -->
    <div class="flex">

      <!-- Panel izquierdo: categorías -->
      <div style="width: 250px; min-width: 250px;">
        <pv-panel :header="'Categories'" aria-label="Categories panel">
          <category-list
              :categories="categories"
              @category-selected="onCategorySelected"/>
        </pv-panel>
      </div>

      <!-- Panel derecho: platillos -->
      <div class="flex-1">
        <pv-panel :header="'Meals'" aria-label="Meals panel">
          <meal-list :meals="meals"/>
        </pv-panel>
      </div>

    </div>

    <!-- Footer -->
    <footer-content/>
  </div>
</template>

<style scoped>

</style>