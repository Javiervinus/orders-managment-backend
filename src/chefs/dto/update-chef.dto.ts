import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { UpdateUserDto } from "src/users/dto/update-user.dto";

export class UpdateChefDto {
    @ValidateNested()
    @Type(() => UpdateUserDto)
    user: UpdateUserDto;
}
