import { Module } from '@nestjs/common';
import { DecksService } from './decks.service';
import { DecksController } from './decks.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [DecksController],
  providers: [DecksService],
  imports: [PrismaModule],
})
export class DecksModule {}