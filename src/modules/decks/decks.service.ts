import { Injectable } from '@nestjs/common';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { DecksRepository } from './decks.repository';

@Injectable()
export class DecksService {
  constructor(private readonly decksRepository: DecksRepository) {}
  create(createDeckDto: CreateDeckDto) {
    return 'This action adds a new deck';
  }

  findAll() {
    return this.decksRepository.findAll();
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
