import { InjectModel } from '@nestjs/sequelize';
import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
export class CustomUnique implements ValidatorConstraintInterface {
    validate(id: number) {

        return true;
    }
}
