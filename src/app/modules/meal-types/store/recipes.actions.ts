import { createAction, props } from "@ngrx/store";
import { IRecipe, RecipeDetails } from "src/app/shared/models/recipe.model";
import { SearchForm } from "../components/search/search.component";

export const searchRecipes = createAction('[recipes] search', props<{mealType:string,search:SearchForm}>());
export const searchRecipesSuccess = createAction('[recipes] searchSuccess', props<{recipes:IRecipe[]}>());
export const searchRecipesFailed = createAction('[recipes] searchError');

export const getRecipeDetail = createAction('[recipeDetail] getDetail', props<{id:number}>());
export const getRecipeDetailSuccess = createAction('[recipeDetail] getDetailSuccess', props<{recipe:RecipeDetails}>());
