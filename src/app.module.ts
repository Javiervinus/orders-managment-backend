import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChefsModule } from './chefs/chefs.module';
import { WaitersModule } from './waiters/waiters.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigService } from './sequelizeconfig.service';
import { RouterModule } from '@nestjs/core';
import { Roles } from './core/constants';
import { ConfigModule } from '@nestjs/config';
import { BranchModule } from './branch/branch.module';
import { TablesModule } from './tables/tables.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    AuthModule,
    UsersModule,
    ChefsModule,
    WaitersModule,
    RestaurantsModule,
    SequelizeModule.forRootAsync({ useClass: SequelizeConfigService }),
    RouterModule.register([
      {
        path: "api/v1",
        children: [
          {
            path: Roles.CHEF,
            module: ChefsModule
          },
          {
            path: Roles.WAITER,
            module: WaitersModule
          },
          {
            path: "auth",
            module: AuthModule
          },
          {
            path: "users",
            module: UsersModule
          },
          {
            path: "restaurants",
            module: RestaurantsModule
          },
          {
            path: "tables",
            module: TablesModule
          }
        ]
      }
    ]),
    BranchModule,
    TablesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
