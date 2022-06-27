import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import Table from './entities/table.entity';

@Injectable()
export class TablesService {
  constructor(@InjectModel(Table) private tableModel: typeof Table) { }
  create(createTableDto: CreateTableDto) {
    return this.tableModel.create(createTableDto as any)
  }

  findAll() {
    return this.tableModel.findAll({
      include: [{
        association: 'branch',
        include: ['restaurant']
      }]
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} table`;
  }

  update(id: number, updateTableDto: UpdateTableDto) {
    return `This action updates a #${id} table`;
  }

  remove(id: number) {
    return `This action removes a #${id} table`;
  }
}
