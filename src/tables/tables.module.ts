import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Tables from './entities/table.entity';

@Module({
  controllers: [TablesController],
  providers: [TablesService],
  imports: [SequelizeModule.forFeature([Tables])]
})
export class TablesModule { }
