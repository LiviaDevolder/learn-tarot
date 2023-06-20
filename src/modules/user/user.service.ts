import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async create(params: { content: User }) {
    const { content } = params;
    const { name, cpf, password, email, birthdate, lastname } = content;

    const user = await this.repository.create({
      data: {
        name,
        cpf,
        password,
        email,
        birthdate,
        lastname,
      },
    });

    return user;
  }

  async find() {
    return this.repository.get({});
  }
}
