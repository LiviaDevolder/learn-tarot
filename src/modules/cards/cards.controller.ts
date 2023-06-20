import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Card } from '@prisma/client';
import { CardsService } from './cards.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post(`create`)
  async create(
    @Body()
    data: {
      id: string;
      name: string;
      number: number;
      image: string;
      deckId: string;
    },
  ): Promise<Card> {
    return this.cardsService.create({
      content: {
        name: data.name,
        number: data.number,
        image: data.image,
        createdAt: new Date(),
        updatedAt: new Date(),
        deck: {
          connect: {
            id: data.deckId,
          },
        },
      },
    });
  }

  @Get('findAll')
  findAll(): Promise<Card[]> {
    return this.cardsService.find();
  }

  @Put('update')
  async update(
    @Body()
    data: {
      id: string;
      name: string;
      number: number;
      image: string;
    },
  ): Promise<Card> {
    return this.cardsService.update({
      where: data.id,
      data,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Card> {
    return this.cardsService.delete({ where: { id } });
  }
}
