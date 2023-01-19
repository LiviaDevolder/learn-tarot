import { Body, Controller, Get, Post } from '@nestjs/common';
import { Card } from '@prisma/client';
import { CardsService } from './cards.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('card')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post(`create`)
  async create(
    @Body()
    data: {
      id: string;
      name: string;
      number: number;
      dificulty: string | null;
      firstAnalysis: string | null;
      elements: string | null;
      meaning: string | null;
      loveMeaning: string | null;
      workMeaning: string | null;
      healthMeaning: string | null;
      upsideDown: string | null;
      memory: string | null;
      image: string | null;
      userId: string;
    },
  ): Promise<Card> {
    const {
      name,
      number,
      dificulty,
      firstAnalysis,
      elements,
      meaning,
      loveMeaning,
      workMeaning,
      healthMeaning,
      upsideDown,
      memory,
      image,
      userId,
    } = data;

    return this.cardsService.create({
      content: {
        id: uuidv4(),
        name,
        number,
        dificulty,
        firstAnalysis,
        elements,
        meaning,
        loveMeaning,
        workMeaning,
        healthMeaning,
        upsideDown,
        memory,
        image,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      userId,
    });
  }

  @Get('find')
  find() {
    return this.cardsService.find();
  }
}
