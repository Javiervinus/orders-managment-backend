import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Restaurant from './entities/restaurant.entity';

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
  imports: [SequelizeModule.forFeature([Restaurant])]
})
export class RestaurantsModule { }
