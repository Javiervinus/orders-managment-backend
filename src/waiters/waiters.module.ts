import { Module } from '@nestjs/common';
import { WaitersService } from './waiters.service';
import { WaitersController } from './waiters.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Waiter from './entities/waiter.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [WaitersController],
  providers: [WaitersService],
  exports: [WaitersService],
  imports: [UsersModule, SequelizeModule.forFeature([Waiter])]
})
export class WaitersModule { }
