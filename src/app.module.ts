import { Module } from '@nestjs/common';
import { CardsModule } from './modules/cards/cards.module';
import { CardsController } from './modules/cards/cards.controller';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { DecksModule } from './modules/decks/decks.module';

@Module({
  imports: [CardsModule, UserModule, DecksModule],
  controllers: [CardsController, UserController],
  providers: [],
})
export class AppModule {}
