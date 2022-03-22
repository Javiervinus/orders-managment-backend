import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from 'src/core/constants';
import { UsersService } from 'src/users/users.service';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import Waiter from './entities/waiter.entity';
import { compare } from 'bcrypt';

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
    return this.waiterModel.create(createWaiterDto as any, {
      include: ['user']
    });
  }
  async login(email: string, password: string) {
    const user = await this.waiterModel.findOne(
      {
        include: [
          {
            association: "user",
            where: {
              email: email
            }
          }
        ]
      }
    );
    if (user && (await compare(password, user.user.password))) {
      const res = user.toJSON();
      delete res.user.password;
      res.rol = Roles.WAITER;
      return res;
    }
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
