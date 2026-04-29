import {Category}  from "../domain/model/category.entity.js";

export class CategoryAssembler {
    static toEntityFromResource(resource) {
        return new Category({
            id: resource.idCategory,
            name: resource.strCategory,
            imageUrl: resource.strCategoryThumb
        })
    }
    static toEntitiesFromResponse(response) {
        return response.data.categories.map(resource =>
            this.toEntityFromResource(resource)
        )
    }
}