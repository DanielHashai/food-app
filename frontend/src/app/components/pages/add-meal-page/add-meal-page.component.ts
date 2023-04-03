import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/shared/models/Food';
import { Origin } from 'src/shared/models/Origin';

@Component({
  selector: 'app-add-meal-page',
  templateUrl: './add-meal-page.component.html',
  styleUrls: ['./add-meal-page.component.css']
})
export class AddMealPageComponent implements OnInit {

  @ViewChild("image")
  public image: ElementRef<HTMLInputElement>;
  public meal = new Food();
  public origins: Origin[];
  public constructor(private foodService: FoodService, private router: Router) {

  }

  public async ngOnInit(): Promise<void> {
    this.origins = await this.foodService.getAllOrigins();


  }



  public async submit() {

    this.meal.image = this.image.nativeElement.files[0];
    this.router.navigateByUrl("");
    await this.foodService.addMeal(this.meal);


  }

  public async getEventsByType(selectId: any): Promise<void> {
    try {
      const origin = this.origins.find((origin) => origin.originId === +selectId);
      this.meal.origins = origin.country;

    }
    catch (err) {

    }


  }


}
