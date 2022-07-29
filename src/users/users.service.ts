import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { compare } from 'bcrypt';
import User from './entities/user.entity';
import { Roles } from 'src/core/constants';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) { }
  async create(createUserDto: CreateUserDto) {
    const mailExist = await this.verifyRepeatedMail(createUserDto.email)
    if (mailExist) {
      throw new BadRequestException('Ya existe un usuario con este correo');
    }

    const user = await this.userModel.create(createUserDto as any, {
      include: ["waiter", "chef", "branch"],
    });
    user.$create(createUserDto.rol, null)
    return user;

  }

  findAll() {

    return this.userModel.findAll({ attributes: { exclude: ["password"] }, include: ["waiter", "chef", "branch"] });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  async verifyRepeatedMail(email: string) {
    const count = await this.userModel.count({ where: { email } });
    console.log(count)
    return count > 0;
  }
  async login(email: string, password: string) {
    const user = await this.userModel.findOne(
      {
        where: {
          email: email
        },
        include: ["chef", "waiter", "branch"]
      }
    );
    if (user && (await compare(password, user.password))) {
      const res = user.toJSON();
      delete res.password;
      res.rol = Roles.WAITER;
      return res;
    }
  }
}
