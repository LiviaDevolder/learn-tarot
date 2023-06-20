import { Injectable } from '@nestjs/common';
import { Card, Prisma } from '@prisma/client';
import { CardsRepository } from './cards.repository';

@Injectable()
export class CardsService {
  constructor(private repository: CardsRepository) {}

  async create(params: { content: Prisma.CardCreateInput }) {
    const { content } = params;
    const { name, number, image } = content;

    const card = await this.repository.create({
      data: {
        name,
        number,
        image,
        deck: {
          connect: {
            id: content.deck.connect?.id,
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
