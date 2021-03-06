import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from 'app/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';
import { OrderComponent } from 'app/order/order.component';
import { LoginComponent } from 'app/security/login/login.component';

const routes: Routes = [

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'restaurants/:id',
    component: RestaurantDetailComponent,
    children: [
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      }
    ]
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class MtRoutingModule { }
