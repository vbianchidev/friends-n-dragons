import {
  DamageType,
  MagicComponents,
  MagicSchool,
  SpellCondition,
} from '../entities/spell.enum';

export class CreateSpellDto {
  name: string;
  description: string;
  level: number;
  conditions: SpellCondition[];
  damage: DamageType;
  school: MagicSchool;
  castingTime: string;
  range: string;
  components: MagicComponents[];
  duration: string;
}
