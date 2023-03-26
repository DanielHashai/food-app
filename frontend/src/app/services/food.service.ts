import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tag } from 'src/data';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG__URL, FOODS_TAGS_URL, FOODS_URL } from 'src/shared/constants/urls';
import { Food } from 'src/shared/models/Food';
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
  public getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
  }

}
