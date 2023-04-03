import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/shared/models/Food';
import { Origin } from 'src/shared/models/Origin';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  public food: Food;

  public constructor(private activateRoute: ActivatedRoute, private foodService: FoodService, private cartService: CartService, private router: Router) {

  }
  public async ngOnInit(): Promise<void> {
    this.activateRoute.params.subscribe(async (params) => {
      let observable: Observable<Food>
      if (params.id)
        observable = this.foodService.getFoodById(params.id);
      this.food = await firstValueFrom(observable);
    })

  }
  public addToCart(): void {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl("/cart-page");
  }

}
