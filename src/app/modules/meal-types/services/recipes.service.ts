import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDetailsRes, Recipe } from 'src/app/shared/models/recipe.model';
import { environment } from 'src/environments/environment.prod';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  search(text: string, endPoint: string, mealType: string): Observable<Recipe[]>{
    console.log(text);
    const params = new HttpParams()
      .set('apiKey', environment.apiKey)
      .set('tags', mealType)
      .set('number', 5)
      .set('query',text)

    return this.http.get<IDetailsRes>(`${environment.apiUrl}${endPoint}`, {params})
      .pipe(
        tap(res => console.log(res)),
        map(res => res.recipes)
      )
  }
}
