import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateChefDto } from './dto/create-chef.dto';
import { UpdateChefDto } from './dto/update-chef.dto';
import Chef from './entities/chef.entity';
import { compare } from 'bcrypt';
import { Roles } from 'src/core/constants';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ChefsService {
  constructor(@InjectModel(Chef) private chefModel: typeof Chef,
    private userService: UsersService) {

  }
  async create(createChefDto: CreateChefDto) {
    createChefDto.user.rol = Roles.CHEF
    const mailExist = await this.userService.verifyRepeatedMail(createChefDto.user?.email);
    if (mailExist) {
      throw new BadRequestException('Ya existe un usuario con este correo');
    }
    return this.chefModel.create(createChefDto as any, {
      include: ['user']
    });
  }
  async login(email: string, password: string) {
    const user = await this.chefModel.findOne(
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
    return `This action returns all chefs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chef`;
  }

  update(id: number, updateChefDto: UpdateChefDto) {
    return `This action updates a #${id} chef`;
  }

  remove(id: number) {
    return `This action removes a #${id} chef`;
  }
}
