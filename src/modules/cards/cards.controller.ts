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
    return this.cardsService.create({
      content: {
        id: uuidv4(),
        name: data.name,
        number: data.number,
        dificulty: data.dificulty,
        firstAnalysis: data.firstAnalysis,
        elements: data.elements,
        meaning: data.meaning,
        loveMeaning: data.loveMeaning,
        workMeaning: data.workMeaning,
        healthMeaning: data.healthMeaning,
        upsideDown: data.upsideDown,
        memory: data.memory,
        image: data.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      userId: data.userId,
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