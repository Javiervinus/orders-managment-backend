import { Module } from '@nestjs/common';
import { ChefsService } from './chefs.service';
import { ChefsController } from './chefs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Chef from './entities/chef.entity';

@Module({
  controllers: [ChefsController],
  providers: [ChefsService],
  imports: [SequelizeModule.forFeature([Chef])]
})
export class ChefsModule { }
