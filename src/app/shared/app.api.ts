export class AppApi {
    private urlRestaurants = 'http://localhost:3000/restaurants';

    constructor() { }

    public get getRestaurants(): string {
        return this.urlRestaurants;
    }
}