import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { v4 as uuidv4 } from 'uuid';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(`create`)
  async create(
    @Body()
    data: {
      name: string;
      lastname: string;
      cpf: string;
      password: string;
      email: string;
      birthdate: string;
    },
  ): Promise<User> {
    const { name, cpf, password, email, birthdate, lastname } = data;

    return this.userService.create({
      content: {
        id: uuidv4(),
        name,
        cpf,
        password,
        email,
        birthdate,
        lastname,
      },
    });
  }

  @Get('find')
  find() {
    return this.userService.find();
  }
}
