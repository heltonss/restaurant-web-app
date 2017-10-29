import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/shared/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  private restaurant;

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurantService.restaurantsById(this.route.snapshot.params['id'])
      .subscribe(res => this.restaurant = res);
  }

}
