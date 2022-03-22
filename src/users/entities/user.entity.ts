import { AfterFind, BeforeCreate, BeforeFind, BeforeFindAfterExpandIncludeAll, BeforeUpdate, Column, DataType, Default, Model, Table } from "sequelize-typescript";
import { hash } from 'bcrypt';
import { Roles } from "src/core/constants";
import { Exclude } from "class-transformer";

@Table({ timestamps: true })
export default class User extends Model {
    @Column
    name: string;
    @Column
    lastName: string;
    @Column
    email: string;
    @Default(false)
    @Column
    isAdmin: boolean;
    @Column
    password: string;
    @Column(DataType.ENUM(Roles.CHEF, Roles.WAITER))
    rol: string;
    @BeforeCreate
    @BeforeUpdate
    static async hashPasswordBeforeCreate(user: User) {
        if (user.password) {
            user.password = await hash(user.password, 10);
        }
    }


}
