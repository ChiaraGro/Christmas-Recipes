import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasicRecipe, IBasicRes, IDetailsRes, IRecipe, Recipe } from 'src/app/shared/models/recipe.model';
import { environment } from 'src/environments/environment.prod';
import { map, tap } from 'rxjs/operators';

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
    else { 
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
  }
}
