import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(senha, user.senha))) {
      return { id: user.id, nome: user.nome, idade: user.idade, email: user.email };
    }
    throw new UnauthorizedException('Email ou senha inválidos');
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, nome: user.nome, idade: user.idade };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
