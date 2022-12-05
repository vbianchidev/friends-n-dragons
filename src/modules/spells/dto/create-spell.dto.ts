import { IsEnum, IsNotEmpty, IsString, Max } from 'class-validator';
import { MSG } from 'src/core/utils/messages.utils';
import {
  DamageType,
  MagicComponents,
  MagicSchool,
  SpellCondition,
  CastingTime,
} from '../entities/spell.enum';

export class CreateSpellDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @Max(9, { message: MSG.LEVEL })
  level: number;

  @IsEnum(SpellCondition, { message: MSG.SPELLCONDITION_NOT_EXIST })
  conditions: SpellCondition[];

  @IsEnum(DamageType, { message: MSG.DAMAGETYPE_NOT_EXIST })
  damage: DamageType;

  @IsEnum(MagicSchool, { message: MSG.MAGICSCHOOL })
  school: MagicSchool;

  @IsEnum(CastingTime, { message: MSG.CASTINGTIME })
  castingTime: CastingTime;

  @IsString()
  range: string;

  @IsEnum(MagicComponents, { message: MSG.MAGICCOMPONETS })
  components: MagicComponents[];

  @IsString()
  duration: string;
}
