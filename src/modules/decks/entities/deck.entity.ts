import { ApiProperty } from '@nestjs/swagger';
import { Deck } from '@prisma/client';

export class DeckEntity implements Deck {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
