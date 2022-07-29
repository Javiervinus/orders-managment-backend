import { BelongsTo, Column, DeletedAt, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Chef from "src/chefs/entities/chef.entity";
import Restaurant from "src/restaurants/entities/restaurant.entity";
import Tables from "src/tables/entities/table.entity";
import User from "src/users/entities/user.entity";
import Waiter from "src/waiters/entities/waiter.entity";
@Table({ timestamps: true })
export default class Branch extends Model {

    @Column
    name: string;

    @Column
    address: string;

    @ForeignKey(() => Restaurant)
    @Column
    restaurantId: number;

    @DeletedAt
    deleteAt: Date

    @BelongsTo(() => Restaurant)
    restaurant: Restaurant
    @HasMany(() => User)
    users: User[]

    @HasMany(() => Tables)
    tables: Tables[]

}
