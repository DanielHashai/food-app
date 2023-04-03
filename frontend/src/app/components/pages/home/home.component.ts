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
  public imagesFood: string[];
  public img: string;
  public foods: Food[] = []

  // this activateRoute: ActivatedRoute --> is used for getting the real time route params . the router:Router only can reference back to a page and not get the params
  constructor(private foodService: FoodService, private activateRoute: ActivatedRoute) {
    // everytime the params of the link above changes this subscribe function will trigger
  }
  public i = 0;
  public async ngOnInit(): Promise<void> {
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
        console.log("Here!");
        
      }
      


      this.foods = await firstValueFrom(foodObservable);
      this.imagesFood = this.foods.map((food) => "http://localhost:5001/api/foods/image/images" + food.imageName);
      this.img = this.imagesFood[this.i];
      console.log(this.imagesFood);
      setInterval(() => {
        this.img = this.imagesFood[this.i];
        if (this.i === this.imagesFood.length - 1) {
          console.log("at i");
          this.i = 0;
          // this.img = this.imagesFood[this.i];
          
        }
        else {
          this.i = this.i + 1;  
        }
      }, 2000)

    });

  }

  

}
