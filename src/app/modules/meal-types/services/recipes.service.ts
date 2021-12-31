import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBasicRes, IDetailsRes, IRecipe } from 'src/app/shared/models/recipe.model';
import { environment } from 'src/environments/environment.prod';
import { map, tap } from 'rxjs/operators';
import { RecipeDetails } from 'src/app/shared/models/recipeDetail.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  search(text: string, endPoint: string, mealType: string): Observable<IRecipe[]>{
    
    if (text == '' &&  sessionStorage.getItem(mealType)) //controlla se la chiamata è di tipo random e se le ricette random sono già state fetchate
      return of(JSON.parse(sessionStorage.getItem(mealType)!)) //se sì, le prende dal session storage
    
    //altrimenti, fa la chiamata 

    const params = new HttpParams()
      .set('apiKey', environment.apiKey)
      .set('type', mealType)
      .set('number', 5)
      .set('query',text)

    return this.http.get<IDetailsRes | IBasicRes>(`${environment.apiUrl}${endPoint}`, {params})
      .pipe(
        map(res => 'results' in res ? res.results : res.recipes),
        map(recipes => recipes.map(recipe => ({id:recipe.id, title:recipe.title, image:recipe.image, imageType:recipe.imageType}))),
        tap(recipes => text == '' && sessionStorage.setItem(mealType, JSON.stringify(recipes))) //se la chiamata è di tipo random, mette i data nel session storage
      )  
  }

  getRecipeById(id: number): Observable<RecipeDetails>{

    if (localStorage.getItem(id.toString())) return of(JSON.parse(localStorage.getItem(id.toString())!));
    
    const params = new HttpParams()
      .set('apiKey', environment.apiKey)
    
    return this.http.get<RecipeDetails>(`${environment.apiUrl}${id}/information`, {params})
      .pipe(
        tap(recipe => localStorage.setItem(recipe.id.toString(), JSON.stringify(recipe) ))
      )

  }
}
