import { BelongsTo, Column, DeletedAt, ForeignKey, Model, Table } from "sequelize-typescript";
import Branch from "src/branch/entities/branch.entity";
@Table({ timestamps: true, tableName: "Tables" })
export default class Tables extends Model {
    @ForeignKey(() => Branch)
    @Column
    branchId: number;

    @Column
    name: string;
    @DeletedAt
    deleteAt: Date

    @BelongsTo(() => Branch)
    branch: Branch;
}
