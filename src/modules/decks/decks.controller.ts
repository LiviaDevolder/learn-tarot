import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DecksService } from './decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DeckEntity } from './entities/deck.entity';

@ApiTags('Decks')
@Controller('decks')
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  @Post()
  @ApiCreatedResponse({ type: DeckEntity })
  create(@Body() createDeckDto: CreateDeckDto) {
    return this.decksService.create(createDeckDto);
  }

  @Get()
  @ApiOkResponse({ type: DeckEntity, isArray: true })
  findAll() {
    return this.decksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DeckEntity })
  findOne(@Param('id') id: string) {
    return this.decksService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DeckEntity })
  update(@Param('id') id: string, @Body() updateDeckDto: UpdateDeckDto) {
    return this.decksService.update(id, updateDeckDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeckEntity })
  remove(@Param('id') id: string) {
    return this.decksService.remove(id);
  }
}
