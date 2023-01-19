import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Card } from '@prisma/client';

@Injectable()
export class CardsRepository {
  constructor(private prisma: PrismaService) {}

  async create(params: { data: Prisma.CardCreateInput }): Promise<Card> {
    const { data } = params;
    return this.prisma.card.create({ data });
  }

  async get(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CardWhereUniqueInput;
    where?: Prisma.CardWhereInput;
    orderBy?: Prisma.CardOrderByWithRelationInput;
  }): Promise<Card[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.card.findMany({ skip, take, cursor, where, orderBy });
  }

  async update(params: {
    where: Prisma.CardWhereUniqueInput;
    data: Prisma.CardUpdateInput;
  }): Promise<Card> {
    const { where, data } = params;
    return this.prisma.card.update({ where, data });
  }

  async delete(params: { where: Prisma.CardWhereUniqueInput }): Promise<Card> {
    const { where } = params;
    return this.prisma.card.delete({ where });
  }
}
