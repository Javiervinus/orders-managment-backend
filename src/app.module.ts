import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChefsModule } from './chefs/chefs.module';
import { WaitersModule } from './waiters/waiters.module';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [AuthModule, UsersModule, ChefsModule, WaitersModule, RestaurantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
