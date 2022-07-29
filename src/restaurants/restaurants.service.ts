import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import Restaurant from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(@InjectModel(Restaurant) private restaurantModel: typeof Restaurant) { }
  create(createRestaurantDto: CreateRestaurantDto) {

    return this.restaurantModel.create(createRestaurantDto as any, {
      include: "branches"
    });
  }

  findAll() {
    return this.restaurantModel.findAll({ include: { association: "branches", include: ["tables"] } });
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
