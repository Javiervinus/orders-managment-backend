import { Column, Model, Table } from "sequelize-typescript";

@Table({ timestamps: true })
export default class Restaurant extends Model {
    @Column
    name: string;
    @Column
    logo: string;

}
