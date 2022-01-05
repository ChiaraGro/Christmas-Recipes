import { createReducer, on } from "@ngrx/store";
import { searchRecipesSuccess, getRecipeDetailSuccess, resetRecipeDetail, emptyRecipes } from "./recipes.actions";
import { recipesState } from "./recipes.state";

export const recipesReducer = createReducer(
    recipesState,
    on(searchRecipesSuccess, (state, action) => {
        return {
            ...state,
            searchResults: [...action.recipes]
        }
    }),
    on(getRecipeDetailSuccess, (state, action) => {
        return {
            ...state,
            currentRecipe: {...action.recipe}
        }
    }),
    on(resetRecipeDetail, (state) => {
        return {
            ...state,
            currentRecipe: undefined
        }
    }),
    on(emptyRecipes, (state) => {
        return {
            ...state,
            searchResults: undefined
        }
    })
)