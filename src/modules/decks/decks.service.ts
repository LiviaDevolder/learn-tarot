import { Injectable } from '@nestjs/common';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { DecksRepository } from './decks.repository';

@Injectable()
export class DecksService {
  constructor(private readonly decksRepository: DecksRepository) {}
  create(createDeckDto: CreateDeckDto) {
    return this.decksRepository.create(createDeckDto);
  }

  findAll() {
    return this.decksRepository.findAll();
  }

  findOne(id: string) {
    return this.decksRepository.findOne(id);
  }

  update(id: string, updateDeckDto: UpdateDeckDto) {
    return this.decksRepository.update(id, updateDeckDto);
  }

  remove(id: string) {
    return this.decksRepository.remove(id);
  }
}
