import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Branch from "src/branch/entities/branch.entity";
import User from "src/users/entities/user.entity";

@Table({ timestamps: true })
export default class Waiter extends Model {
    @ForeignKey(() => User)
    @Column
    userId: number;
    @ForeignKey(() => Branch)
    @Column
    branchId: number;

    @BelongsTo(() => Branch)
    branch: Branch;
    @BelongsTo(() => User)
    user: User;

}


