import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SpellsService } from './spells.service';
import { CreateSpellDto } from './dto/create-spell.dto';
import { UpdateSpellDto } from './dto/update-spell.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/core/auth/auth.constants';
import { PaginationParams } from '../../core/interfaces/pagination-params';

@ApiTags('spells')
@Controller('spells')
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @Public()
  @Post()
  create(@Body() createSpellDto: CreateSpellDto) {
    return this.spellsService.newSpell(createSpellDto);
  }

  @Public()
  @Get()
  async getAllPosts(@Query() { skip, limit }: PaginationParams) {
    return this.spellsService.findAllPaged(skip, limit);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spellsService.findOne(id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpellDto: UpdateSpellDto) {
    return this.spellsService.update(id, updateSpellDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spellsService.remove(id);
  }
}
