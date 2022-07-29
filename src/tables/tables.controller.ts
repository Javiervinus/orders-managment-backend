import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { RolesAdm } from 'src/core/decorators/roles.decorator';
import { Roles } from 'src/core/constants';
import { User } from 'src/core/decorators/user.decorator';

@Controller()
export class TablesController {
  constructor(private readonly tablesService: TablesService) { }
  @RolesAdm(Roles.ADMIN)
  @Post()
  create(@Body() body: any, @User() user) {
    return this.tablesService.create(body, user);
  }

  @Get()
  findAll() {
    return this.tablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tablesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
    return this.tablesService.update(+id, updateTableDto);
  }
  @RolesAdm(Roles.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tablesService.remove(+id);
  }
}
