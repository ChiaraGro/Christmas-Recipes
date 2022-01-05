import { createReducer, on } from "@ngrx/store";
import { searchRecipesSuccess, getRecipeDetailSuccess, searchRecipesFailed, searchRecipes, getRecipeDetail } from "./recipes.actions";
import { recipesState } from "./recipes.state";

export const recipesReducer = createReducer(
    recipesState,
    on(searchRecipes, (state) => {
        return {
            ...state,
            searchResults: undefined,
            searchError: false
        }
    }),
    on(searchRecipesSuccess, (state, action) => {
        return {
            ...state,
            searchResults: [...action.recipes]
        }
    }),
    on(getRecipeDetail, (state) => {
        return {
            ...state,
            currentRecipe: undefined
        }
    }),
    on(getRecipeDetailSuccess, (state, action) => {
        return {
            ...state,
            currentRecipe: {...action.recipe}
        }
    }),
    on(searchRecipesFailed, (state) => {
        return {
            ...state,
            searchError: true
        }
    })
)