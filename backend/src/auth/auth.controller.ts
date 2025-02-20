import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() body: { nome: string; idade: number; email: string; senha: string }) {
    return this.userService.create(body.nome, body.idade, body.email, body.senha);
  }

  @Post('login')
  async login(@Body() body: { email: string; senha: string }) {
    const user = await this.authService.validateUser(body.email, body.senha);
    console.log("Tentativa de login", body.email)
    return this.authService.login(user);
  }
}
