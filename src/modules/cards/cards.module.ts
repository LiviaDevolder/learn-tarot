import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { CardsRepository } from './cards.repository';
import { CardsService } from './cards.service';

@Module({
  imports: [PrismaModule],
  providers: [CardsRepository, CardsService],
  exports: [CardsService],
})
export class CardsModule {}
