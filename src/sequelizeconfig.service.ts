/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor() {
    dotenv.config();
  }
  createSequelizeOptions(
    _connectionName?: string,
  ): SequelizeModuleOptions | Promise<SequelizeModuleOptions> {
    const config: SequelizeModuleOptions = {
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [__dirname + '/**/*.entity{.ts,.js}'],
      //autoLoadModels: true,
      //sync: { alter: true },
    };
    return config;
  }
}
