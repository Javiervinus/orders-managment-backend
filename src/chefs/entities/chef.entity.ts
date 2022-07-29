import { BelongsTo, Column, DeletedAt, ForeignKey, Model, Table } from "sequelize-typescript";
import User from "src/users/entities/user.entity";
@Table({ timestamps: true })
export default class Chef extends Model {
    @ForeignKey(() => User)
    @Column
    userId: number;
    @DeletedAt
    deleteAt: Date

    @BelongsTo(() => User)
    user: User;
}
