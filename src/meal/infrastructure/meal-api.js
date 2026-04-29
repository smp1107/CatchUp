import axios from 'axios';

const http = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',

})

export class MealApi {
    getCategories() {
        return http.get('/categories.php')    }
    getMealsByCategory(categoryName) {
        return http.get('/filter.php', { params: { c: categoryName } })    }
}