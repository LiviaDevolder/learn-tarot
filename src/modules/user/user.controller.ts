import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(`create`)
  async create(
    @Body()
    data: {
      name: string;
      cpf: string;
      password: string;
      email: string;
      studyPercentage: string;
    },
  ): Promise<User> {
    const { name, cpf, password, email, studyPercentage } = data;

    return this.userService.create({
      content: {
        id: uuidv4(),
        name,
        cpf,
        password,
        email,
        studyPercentage,
      },
    });
  }

  @Get('find')
  find() {
    return this.userService.find();
  }
}
