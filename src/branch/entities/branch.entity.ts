import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Chef from "src/chefs/entities/chef.entity";
import Restaurant from "src/restaurants/entities/restaurant.entity";
import Waiter from "src/waiters/entities/waiter.entity";
@Table({ timestamps: true, deletedAt: true })
export default class Branch extends Model {

    @Column
    name: string;
    @Column
    address: string;
    @ForeignKey(() => Restaurant)
    @Column
    restaurantId: number;


    @BelongsTo(() => Restaurant)
    restaurant: Restaurant
    @HasMany(() => Waiter)
    waiters: Waiter
    @HasMany(() => Chef)
    chefs: Chef
}
