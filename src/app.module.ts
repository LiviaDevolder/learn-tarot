import { Module } from '@nestjs/common';
import { CardsModule } from './modules/cards/cards.module';
import { CardsController } from './modules/cards/cards.controller';

@Module({
  imports: [CardsModule],
  controllers: [CardsController],
  providers: [],
})
export class AppModule {}
