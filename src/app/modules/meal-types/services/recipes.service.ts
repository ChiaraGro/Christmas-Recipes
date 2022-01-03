import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBasicRes, IDetailsRes, IRecipe } from 'src/app/shared/models/recipe.model';
import { environment } from 'src/environments/environment.prod';
import { map, tap } from 'rxjs/operators';
import { RecipeDetails } from 'src/app/shared/models/recipeDetail.model';
import { SearchForm } from '../components/search/search.component';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  search(search: SearchForm, endPoint: string, mealType: string): Observable<IRecipe[]>{
    
    if (search.text == '' &&  sessionStorage.getItem(mealType)) //controlla se la chiamata è di tipo random e se le ricette random sono già state fetchate
      return of(JSON.parse(sessionStorage.getItem(mealType)!)) //se sì, le prende dal session storage
    
    //altrimenti, fa la chiamata 
    console.log(search);
    let params = new HttpParams()
    
      .set('apiKey', environment.apiKey)
      .set('type', mealType)
      .set('number', 5);
      params = search.text != '' ?  params.set('query',search.text) : params;
      params = search.cuisines?.length ? params.set('cuisine',search.cuisines.toString()) : params;
      params = search.intolerances?.length ? params.set('intolerances',search.intolerances.toString()): params;
      params = search.vegetarian == true && search.vegan == false ? params.set('diet', 'Vegetarian') : params;
      params = search.vegan == true ? params.set('diet', 'Vegan') : params;

    return this.http.get<IDetailsRes | IBasicRes>(`${environment.apiUrl}${endPoint}`, {params})
      .pipe(
        map(res => 'results' in res ? res.results : res.recipes),
        map(recipes => recipes.map(recipe => ({id:recipe.id, title:recipe.title, image:recipe.image, imageType:recipe.imageType}))),
        tap(recipes => search.text == '' && sessionStorage.setItem(mealType, JSON.stringify(recipes))) //se la chiamata è di tipo random, mette i data nel session storage
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
