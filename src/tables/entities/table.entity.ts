import { BelongsTo, Column, DeletedAt, ForeignKey, Model } from "sequelize-typescript";
import Branch from "src/branch/entities/branch.entity";

export default class Table extends Model {
    @ForeignKey(() => Branch)
    @Column
    branchId: number;

    @DeletedAt
    deleteAt: Date

    @BelongsTo(() => Branch)
    branch: Branch;
}
