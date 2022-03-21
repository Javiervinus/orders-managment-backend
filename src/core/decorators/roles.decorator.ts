import { SetMetadata } from '@nestjs/common';
import { Roles } from 'src/core/constants';

export const RolesAdm = (...roles: string[]) => SetMetadata('roles', roles);
