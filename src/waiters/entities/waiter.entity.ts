import { BelongsTo, Column, DataType, DeletedAt, ForeignKey, Model, Table, Unique } from "sequelize-typescript";
import Branch from "src/branch/entities/branch.entity";
import User from "src/users/entities/user.entity";
@Table({ timestamps: true })
export default class Waiter extends Model {
    @ForeignKey(() => User)
    @Column({
        unique: true
    })
    userId: number;
    @ForeignKey(() => Branch)

    @DeletedAt
    deleteAt: Date



    @BelongsTo(() => User)
    user: User;

}


