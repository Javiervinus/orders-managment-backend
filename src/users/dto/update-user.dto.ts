import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
    @IsOptional()
    name: string;
    @IsOptional()
    lastName: string;
    @IsOptional()
    password: string
    @IsOptional()
    @IsEmail()
    email: string;
    rol: string;

}
