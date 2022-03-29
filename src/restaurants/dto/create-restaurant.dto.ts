import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { CreateBranchDto } from "src/branch/dto/create-branch.dto";

export class CreateRestaurantDto {
    @ValidateNested()
    @Type(() => CreateBranchDto)
    branches: Array<CreateBranchDto>;
}
