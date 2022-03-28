import { Module } from '@nestjs/common';
import { ChefsService } from './chefs.service';
import { ChefsController } from './chefs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Chef from './entities/chef.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [ChefsController],
  providers: [ChefsService],
  imports: [SequelizeModule.forFeature([Chef]), UsersModule],
  exports: [ChefsService]
})
export class ChefsModule { }
