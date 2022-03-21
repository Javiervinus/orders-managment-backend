import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { Public } from "src/core/decorators/public.decorator";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";



@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }
    @UseGuards(LocalAuthGuard)
    @Public()
    @Post('login/:rol')
    async login(@Request() req) {
        return this.authService.login(req.user)
    }
}