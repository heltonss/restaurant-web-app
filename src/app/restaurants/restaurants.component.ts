import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/shared/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: any[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.getRestauratants();
  }

  getRestauratants(): void {
    this.restaurantsService.restaurants()
      .subscribe(res => this.restaurants = res)
  }

}
