import { IsEmail, IsNotEmpty } from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    password: string
    @IsEmail()
    email: string;
    rol: string;

}

