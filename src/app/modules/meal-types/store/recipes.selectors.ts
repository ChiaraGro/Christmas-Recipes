import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RecipesState } from "./recipes.state";

const getRecipesState = createFeatureSelector<RecipesState>('recipes');

export const getSearchResults = createSelector(getRecipesState, (state) => {
    return state.searchResults
});

export const getCurrentRecipe = createSelector(getRecipesState, (state) => {
    return state.currentRecipe
});

export const getSearchError = createSelector(getRecipesState, (state) => {
    return state.searchError
})