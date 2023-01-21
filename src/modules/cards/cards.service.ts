import { Injectable } from '@nestjs/common';
import { Card, Prisma, User } from '@prisma/client';
import { CardsRepository } from './cards.repository';

@Injectable()
export class CardsService {
  constructor(private repository: CardsRepository) {}

  async create(params: {
    content: Prisma.CardCreateInput;
    userId: User[`id`];
  }) {
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

  async find(): Promise<Card[]> {
    return this.repository.get({});
  }

  async update(params: { where: Card[`id`]; data: Prisma.CardUpdateInput }) {
    const { where, data } = params;
    return this.repository.update({ where: { id: where }, data });
  }

  async delete(params: { where: { id: Card[`id`] } }) {
    const { where } = params;
    return this.repository.delete({ where });
  }
}
