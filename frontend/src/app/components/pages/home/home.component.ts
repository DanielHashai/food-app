import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public foods: Food[] = []
  // this activateRoute: ActivatedRoute --> is used for getting the real time route params . the router:Router only can reference back to a page and not get the params
  constructor(private foodService: FoodService, private activateRoute: ActivatedRoute) {
    // everytime the params of the link above changes this subscribe function will trigger
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(async (params) => {
      let foodObservable: Observable<Food[]>
      if (params.searchTerm) {
        foodObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      }
      else if (params.tag) {
        foodObservable = this.foodService.getAllFoodsByTag(params.tag);
      }
      else {
        foodObservable = this.foodService.getAll();
      }
      this.foods = await firstValueFrom(foodObservable);

    });

  }

}
