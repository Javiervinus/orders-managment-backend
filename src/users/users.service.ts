import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { compare } from 'bcrypt';
import User from './entities/user.entity';
import { Roles } from 'src/core/constants';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) { }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {

    return this.userModel.findAll({
      attributes: {
        exclude: ["password"],
      },
      include: ["waiter", "chef"]
    });
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  async verifyRepeatedMail(email: string, rol: string) {
    const count = await this.userModel.count({ where: { email, rol } });
    return count > 0;
  }
  async login(email: string, password: string) {
    const user = await this.userModel.findOne(
      {
        where: {
          email: email
        }
      }
    );
    console.log(user)
    if (user && (await compare(password, user.password))) {
      const res = user.toJSON();
      delete res.password;
      res.rol = Roles.WAITER;
      return res;
    }
  }
}
