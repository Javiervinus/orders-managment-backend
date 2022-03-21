import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from 'src/core/constants';
import { UsersService } from 'src/users/users.service';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import Waiter from './entities/waiter.entity';

@Injectable()
export class WaitersService {
  constructor(
    @InjectModel(Waiter) private waiterModel: typeof Waiter,
    private userService: UsersService) { }



  async create(createWaiterDto: CreateWaiterDto) {
    createWaiterDto.user.rol = Roles.WAITER;
    const mailExist = await this.userService.verifyRepeatedMail(createWaiterDto.user?.email, Roles.WAITER);
    if (mailExist) {
      throw new BadRequestException('Ya existe un usuario con este correo');
    }
    return this.waiterModel.create(createWaiterDto, {
      include: ['user']
    });
  }

  findAll() {
    return `This action returns all waiters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} waiter`;
  }

  update(id: number, updateWaiterDto: UpdateWaiterDto) {
    return `This action updates a #${id} waiter`;
  }

  remove(id: number) {
    return `This action removes a #${id} waiter`;
  }
}
