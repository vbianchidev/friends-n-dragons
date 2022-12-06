import { PartialType } from '@nestjs/mapped-types';
import { CreateSpellbookDto } from './create-spellbook.dto';

export class UpdateSpellbookDto extends PartialType(CreateSpellbookDto) {}
