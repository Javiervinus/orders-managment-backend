import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import User from "src/users/entities/user.entity";

@Table({ timestamps: true })
export default class Waiter extends Model {
    @ForeignKey(() => User)
    @Column
    userId: number;


    @BelongsTo(() => User)
    user: User;
}


