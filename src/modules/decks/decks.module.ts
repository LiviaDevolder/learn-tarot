import { Module } from '@nestjs/common';
import { DecksService } from './decks.service';
import { DecksController } from './decks.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { DecksRepository } from './decks.repository';

@Module({
  controllers: [DecksController],
  providers: [DecksService, DecksRepository],
  imports: [PrismaModule],
})
export class DecksModule {}
