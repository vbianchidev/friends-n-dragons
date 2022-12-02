import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  DamageType,
  MagicComponents,
  MagicSchool,
  SpellCondition,
} from './spell.enum';

export type spellDocument = HydratedDocument<Spell>;

@Schema({ timestamps: true })
export class Spell {
  @Prop({ required: true, unique: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ default: 0 })
  level: number;
  @Prop({ default: [SpellCondition.None] })
  conditions: SpellCondition[];
  @Prop({ type: String, enum: DamageType, default: DamageType.None })
  damage: DamageType;
  @Prop({ type: String, enum: MagicSchool, default: MagicSchool.None })
  school: MagicSchool;
  @Prop()
  castingTime: string;
  @Prop()
  range: string;
  @Prop({ default: [] })
  components: MagicComponents[];
  @Prop()
  duration: string;
}

export const SpellSchema = SchemaFactory.createForClass(Spell);
