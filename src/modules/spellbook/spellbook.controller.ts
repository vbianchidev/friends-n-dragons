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
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spellbookService.findOne(id);
  }
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spellbookService.remove(id);
  }

  @Public()
  @Post('remove/:id')
  removeSpell(@Param('id') id: string, @Body() body: { spellId: string }) {
    return this.spellbookService.removeSpell(id, body.spellId);
  }

  @Public()
  @Post('add/:id')
  addSpell(@Param('id') id: string, @Body() body: { spellId: string }) {
    return this.spellbookService.addSpell(id, body.spellId);
  }
}
