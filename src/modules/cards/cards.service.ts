import { Injectable } from '@nestjs/common';
import { Card, User } from '@prisma/client';
import { CardsRepository } from './cards.repository';

@Injectable()
export class CardsService {
  constructor(private repository: CardsRepository) {}

  async create(params: { content: Card; userId: User[`id`] }) {
    const { content, userId } = params;
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
    } = content;

    const card = await this.repository.create({
      data: {
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
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return card;
  }

  async find() {
    return this.repository.get({});
  }
}
