import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { IDetailsRes, IBasicRes, IRecipe, RecipeDetails } from "src/app/shared/models/recipe.model";
import { environment } from "src/environments/environment.prod";
import { searchRecipes, searchRecipesSuccess, getRecipeDetail, getRecipeDetailSuccess } from "./recipes.actions";

@Injectable()
export class recipesEffects {

    search = createEffect(() => this.actions$.pipe(
        ofType(searchRecipes),
        switchMap(({mealType, search}) => {
            if (search.text == '' &&  sessionStorage.getItem(mealType)) {
                return of(searchRecipesSuccess(
                    {recipes: (JSON.parse(sessionStorage.getItem(mealType)!) as IRecipe[]) }
                    ));
            }
            console.log(mealType)
            let params = new HttpParams()
                .set('apiKey', environment.apiKey)
                .set('type', mealType)
                .set('number', 9);

            params = search.text != '' ?  params.set('query',search.text) : params;
            params = search.cuisines?.length ? params.set('cuisine',search.cuisines.toString()) : params;
            params = search.intolerances?.length ? params.set('intolerances',search.intolerances.toString()): params;
            params = search.vegetarian == true && search.vegan == false ? params.set('diet', 'Vegetarian') : params;
            params = search.vegan == true ? params.set('diet', 'Vegan') : params;

            return this.http.get<IDetailsRes | IBasicRes>(`${environment.apiUrl}complexSearch`, {params})
                .pipe(
                    map(res => 'results' in res ? res.results : res.recipes),
                    map(recipes => recipes.map(recipe => ({id:recipe.id, title:recipe.title, image:recipe.image, imageType:recipe.imageType} as IRecipe))),
                    tap(recipes => search.text == '' && sessionStorage.setItem(mealType, JSON.stringify(recipes))),
                    map(recipes => searchRecipesSuccess({recipes}))
        
      )  
        })
        ));
        getRecipe = createEffect(()=> this.actions$.pipe(
    
            ofType(getRecipeDetail),
            switchMap(({id})=> {
                if (localStorage.getItem(id.toString())) {
                    return of(getRecipeDetailSuccess(
                        {recipe: (JSON.parse(localStorage.getItem(id.toString())!) as RecipeDetails) }
                        ));
                }
        
                const params = new HttpParams()
                .set('apiKey', environment.apiKey)
                
                return this.http.get<RecipeDetails>(`${environment.apiUrl}${id}/information`, {params})
                .pipe(
                    tap(recipe => localStorage.setItem(recipe.id.toString(), JSON.stringify(recipe) )),
                    map(recipe => getRecipeDetailSuccess({recipe}))
          )
            })
        ))




    constructor(
        private actions$: Actions,
        private http: HttpClient
    ){}
}