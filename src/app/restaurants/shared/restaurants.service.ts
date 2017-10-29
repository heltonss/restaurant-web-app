import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AppApi } from 'app/shared/app.api';
import { Observable } from 'rxjs/Rx';
import { ErrorHandler } from 'app/shared/error.handler';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http, private appApi: AppApi) { }

  restaurants(): Observable<any[]> {
    return this.http.get(this.appApi.getRestaurants)
      .map(this.handleData)
      .catch(ErrorHandler.handleError);
  }

  restaurantsById(id: string): Observable<any> {
    return this.http.get(`${this.appApi.getRestaurants}/${id}`)
      .map(this.handleData)
      .catch(ErrorHandler.handleError)
  }

  reviewsOfRestarurant(id: string): Observable<any> {
    return this.http.get(`${this.appApi.getRestaurants}/${id}/reviews`)
      .map(this.handleData)
      .catch(ErrorHandler.handleError);
  }

  menuOfRestarurant(id: string): Observable<any> {
    return this.http.get(`${this.appApi.getRestaurants}/${id}/menu`)
      .map(this.handleData)
      .catch(ErrorHandler.handleError);
  }

  private handleData(res: Response) {
    const body = res.json()
    return body;
  }
}