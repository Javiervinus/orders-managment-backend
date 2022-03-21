import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateWaiterDto {
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;

}
