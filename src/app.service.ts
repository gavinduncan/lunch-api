import { Injectable } from '@nestjs/common';
import { Restaurant, DistanceChoices } from './restaurant.interface';
@Injectable()
export class AppService {
  
  // this function returns restaurants that are made out of the Restaurant interface
  getAllRestaurants(): Restaurant[] {
    // const restaurantDatabase = ['McDonalds', 'Dominos', 'Bob Evans'];
    const mcDonaldsRestaurant: Restaurant = {name: 'McDonalds', type: 'American', distance: DistanceChoices.close, cost: 1};
    const dominoesRestaurant: Restaurant = {name: 'Dominos', type: 'Pizza', distance: DistanceChoices.far, cost: 2};
    const bobEveansRestaurant: Restaurant = {name: 'Bob Evans', type: 'Breakfast', distance: DistanceChoices.close, cost: 3};
    
    const restaurantDatabase: Restaurant[] = new Array();
    restaurantDatabase.push(mcDonaldsRestaurant);
    restaurantDatabase.push(dominoesRestaurant);
    restaurantDatabase.push(bobEveansRestaurant);
    
    return restaurantDatabase;
  }
}
