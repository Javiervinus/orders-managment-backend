import { Column, HasMany, Model, Table } from "sequelize-typescript";
import Branch from "src/branch/entities/branch.entity";

@Table({ timestamps: true })
export default class Restaurant extends Model {
    @Column
    name: string;
    @Column
    logo: string;

    @HasMany(() => Branch)
    branches: Branch;
}
