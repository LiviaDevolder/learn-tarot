import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
