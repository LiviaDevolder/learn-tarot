import { ApiProperty } from '@nestjs/swagger';

export class CreateDeckDto {
  @ApiProperty()
  name: string;
}
