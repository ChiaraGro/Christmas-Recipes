import { IRecipe, RecipeDetails } from "src/app/shared/models/recipe.model";

export interface RecipesState {
    searchResults?: IRecipe[];
    searchError: boolean;
    currentRecipe?: RecipeDetails
}

export const recipesState: RecipesState = {
    searchResults: undefined,
    searchError: false,
    currentRecipe: undefined
}
