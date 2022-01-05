import { IRecipe, RecipeDetails } from "src/app/shared/models/recipe.model";

export interface RecipesState {
    searchResults?: IRecipe[];
    currentRecipe?: RecipeDetails
    // maincourses: IRecipe[];
    // sidedishes: IRecipe[];
    // desserts: IRecipe[],
    // recipes: Map<number, RecipeDetails>

}

export const recipesState: RecipesState = {
    searchResults: undefined,
    currentRecipe: undefined
    // maincourses: sessionStorage.getItem('maincourses') ? [...JSON.parse(sessionStorage.getItem('maincourses')!)] : [],
    // sidedishes: sessionStorage.getItem('sidedishes') ? [...JSON.parse(sessionStorage.getItem('sidedishes')!)] : [],
    // desserts: sessionStorage.getItem('desserts') ? [...JSON.parse(sessionStorage.getItem('desserts')!)] : [],
    // recipes: localStorage.getItem('recipes') ? new Map([...JSON.parse(localStorage.getItem('recipes')!)]) : new Map()
}
