import { PrismaService } from 'src/database/prisma.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

export class DecksRepository {
  constructor(private prisma: PrismaService) {}
  create(createDeckDto: CreateDeckDto) {
    return 'This action adds a new deck';
  }

  findAll() {
    return this.prisma.deck.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} deck`;
  }

  update(id: number, updateDeckDto: UpdateDeckDto) {
    return `This action updates a #${id} deck`;
  }

  remove(id: number) {
    return `This action removes a #${id} deck`;
  }
}
