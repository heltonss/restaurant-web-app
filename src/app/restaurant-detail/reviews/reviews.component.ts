import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/shared/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any;

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getReviewsRestaurant()
  }

  getReviewsRestaurant(){
    this.reviews = this.restaurantsService.reviewsOfRestarurant(this.route.parent.snapshot.params['id']);
  }
}
