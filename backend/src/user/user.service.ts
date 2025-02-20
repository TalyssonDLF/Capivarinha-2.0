import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(nome: string, idade: number, email: string, senha: string): Promise<User> {
    // Verifica se o email já existe antes de criar
    const existingUser = await this.findByEmail(email);
    if (existingUser) {
      throw new Error("Este e-mail já está cadastrado.");
    }

    const hashedPassword = await bcrypt.hash(senha, 10);
    const user = this.userRepository.create({ nome, idade, email, senha: hashedPassword });
    return this.userRepository.save(user);
  }

  // 🔹 Adicionando a função findByEmail para corrigir o erro
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } }) || undefined;
  }
}
