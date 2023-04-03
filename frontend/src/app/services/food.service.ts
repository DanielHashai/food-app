import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG__URL, FOODS_TAGS_URL, FOODS_URL, ORIGINS_URL } from 'src/shared/constants/urls';
import { Food } from 'src/shared/models/Food';
import { Origin } from 'src/shared/models/Origin';
import { Tag } from 'src/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Food[]> {


    return this.http.get<Food[]>(FOODS_URL);
  }
  public getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  public getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }
  public getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === 'All' ? this.getAll() :
      this.http.get<Food[]>(FOODS_BY_TAG__URL + tag);
  }
  // the ( ?? ) means if the code on the left is undefiend
  public getFoodById(foodId: number): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
  }

  public getAllOrigins(): Promise<Origin[]> {
    const originsContainer = this.http.get<Origin[]>(ORIGINS_URL);
    const origins = firstValueFrom(originsContainer);
    return origins;
  }

  public async addMeal(food: Food): Promise<Food> {
    const formData = new FormData();
    formData.append('name', food.name);
    formData.append('price', food.price.toString());
    formData.append('image', food.image);
    formData.append('origins', food.origins);
    formData.append('cookTime', food.cookTime);


    const addedMealContainer = this.http.post<Food>(FOODS_URL, formData);
    const mealAdded = await firstValueFrom(addedMealContainer);
    return mealAdded;
  }


}
