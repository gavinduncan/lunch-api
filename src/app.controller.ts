import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Restaurant } from './restaurant.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): string {
    return 'our lunch app is up and running, use the GET on /restaurant to get all restaurants';
  }
  
  @Get('restaurant')
  getAllRestaurants(): Restaurant[] {
    return this.appService.getAllRestaurants();
  }
}
