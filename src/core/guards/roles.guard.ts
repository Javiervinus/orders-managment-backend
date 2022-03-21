import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { includes } from 'lodash';
import { IS_PUBLIC_KEY } from 'src/core/decorators/public.decorator';
import { Roles } from 'src/core/constants';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }
        const roles =
            this.reflector.get<string[]>('roles', context.getHandler()) ||
            Object.values(Roles);
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const userRole = request.user.rol;
        return includes(roles, userRole);
    }
}
