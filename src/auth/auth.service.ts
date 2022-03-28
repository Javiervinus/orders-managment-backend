import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { async } from 'rxjs';
import { ChefsService } from 'src/chefs/chefs.service';
import { Roles } from 'src/core/constants';
import { UsersService } from 'src/users/users.service';
import { WaitersService } from 'src/waiters/waiters.service';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userService: UsersService) { }
    async validateUser(username: string, pass: string): Promise<any> {
        return this.userService.login(username, pass);
    }
    async login(user: any) {
        return {
            ...user,
            access_token: this.jwtService.sign(user),
        };
    }
}

