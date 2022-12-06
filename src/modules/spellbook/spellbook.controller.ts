import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SpellsbookService } from './spellbook.service';
import { CreateSpellbookDto } from './dto/create-spellbook.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/core/auth/auth.constants';

@ApiTags('spellbook')
@Controller('spellbook')
export class SpellbookController {
  constructor(private readonly spellbookService: SpellsbookService) {}

  @Public()
  @Post()
  create(@Body() createSpellbookDto: CreateSpellbookDto) {
    return this.spellbookService.create(createSpellbookDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.spellbookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spellbookService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spellbookService.remove(id);
  }
}
