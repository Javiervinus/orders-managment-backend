import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            passReqToCallback: true,
            usernameField: 'user',
            passwordField: 'password',
        });
    }
    async validate(req: Request, username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(
            username,
            password,
            req.params.rol
        );
        if (!user) {
            throw new UnauthorizedException("Credenciales invalidas");
        }
        return user;

    }

}