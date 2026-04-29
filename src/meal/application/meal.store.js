import { reactive } from 'vue'
import { MealApi } from '../infrastructure/meal-api.js'
import { CategoryAssembler } from '../infrastructure/category.assembler.js'
import { MealAssembler } from '../infrastructure/meal.assembler.js'
import { Category } from '../domain/model/category.entity.js'

const mealApi = new MealApi()

export const mealStore = reactive({
    categories: [],
    meals: [],
    errors: [],
    selectedCategory: null,

    loadCategories() {
        this.errors = []
        mealApi.getCategories()
            .then(response => {
                this.categories = CategoryAssembler.toEntitiesFromResponse(response)
            })
            .catch(error => {
                this.errors.push(error)
                this.categories = []
            })
    },

    setSelectedCategory(category) {
        if (category instanceof Category) {
            this.selectedCategory = category
            this.loadMealsByCategory(category.name)
        }
    },

    loadMealsByCategory(categoryName) {
        mealApi.getMealsByCategory(categoryName)
            .then(response => {
                this.meals = MealAssembler.toEntitiesFromResponse(response)
            })
            .catch(error => {
                this.errors.push(error)
                this.meals = []
            })
    }
})