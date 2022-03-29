import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateWaiterDto } from 'src/waiters/dto/create-waiter.dto';


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
    isAdmin: boolean;

    @ValidateNested()
    @Type(() => CreateWaiterDto)
    waiter: CreateWaiterDto;

}

