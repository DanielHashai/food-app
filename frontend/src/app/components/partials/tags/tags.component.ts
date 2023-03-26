import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  public tags?: Tag[];
  public constructor(private foodService: FoodService) {

  }
  public async ngOnInit(): Promise<void> {
    let observable = this.foodService.getAllTags();
    this.tags = await firstValueFrom(observable);

  }
}
