import { PrismaService } from 'src/database/prisma.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DecksRepository {
  constructor(private prisma: PrismaService) {}
  create(createDeckDto: CreateDeckDto) {
    return this.prisma.deck.create({ data: createDeckDto });
  }

  findAll() {
    return this.prisma.deck.findMany();
  }

  findOne(id: string) {
    return this.prisma.deck.findUnique({ where: { id } });
  }

  update(id: string, updateDeckDto: UpdateDeckDto) {
    return this.prisma.deck.update({
      where: { id },
      data: updateDeckDto,
    });
  }

  remove(id: string) {
    return this.prisma.deck.delete({ where: { id } });
  }
}
