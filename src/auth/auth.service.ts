import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { async } from 'rxjs';
import { ChefsService } from 'src/chefs/chefs.service';
import { Roles } from 'src/core/constants';
import { WaitersService } from 'src/waiters/waiters.service';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private waiterService: WaitersService,
        private chefService: ChefsService) { }
    async validateUser(username: string, pass: string, rol: string): Promise<any> {
        switch (rol) {
            case Roles.CHEF:
                return this.chefService.login(username, pass);
                break;
            case Roles.WAITER:
                return this.waiterService.login(username, pass);
                break;

            default:
                return null;
        }
    }
    async login(user: any) {
        return {
            ...user,
            access_token: this.jwtService.sign(user),
        };
    }
}

