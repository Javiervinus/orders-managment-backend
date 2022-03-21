import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { async } from 'rxjs';
import { Roles } from 'src/core/constants';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }
    async validateUser(username: string, pass: string, rol: string): Promise<any> {
        switch (rol) {
            case Roles.CHEF:

                break;
            case Roles.WAITER:

                break;

            default:
                return null;
        }
    }
    async login(user: any) {
        return {
            ...user,
            token: this.jwtService.sign(user),
        };
    }
}

