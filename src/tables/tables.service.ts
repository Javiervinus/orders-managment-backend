import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Branch from 'src/branch/entities/branch.entity';
import User from 'src/users/entities/user.entity';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import Tables from './entities/table.entity';

@Injectable()
export class TablesService {
  constructor(@InjectModel(Tables) private tableModel: typeof Tables) { }
  async create(body: any, user: User) {
    // this.tableModel.create({ branchId: user.branchId })
    const branch = await Branch.findByPk(user.branchId, { include: ["tables"] })

    return branch.$create("table", body);
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

  async remove(id: number) {
    const response = await this.tableModel.destroy({ where: { id } })

    return response == 1 ? "Mesa eliminada" : "Mesa no eliminada";
  }
}
