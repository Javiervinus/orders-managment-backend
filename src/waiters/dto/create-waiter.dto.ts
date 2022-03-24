import { Type } from "class-transformer";
import { buildMessage, validate, Validate, ValidateNested, validateOrReject, ValidationError } from "class-validator";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateWaiterDto {
    userId: number;
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;

}
