
import { Meal } from '../domain/model/meal.entity.js'

export class MealAssembler {

    static toEntityFromResource(resource) {
        return new Meal({
            id:       resource.idMeal,
            name:     resource.strMeal,
            imageUrl: resource.strMealThumb
        })
    }

    static toEntitiesFromResponse(response) {
        return response.data.meals.map(resource =>
            this.toEntityFromResource(resource)
        )
    }
}