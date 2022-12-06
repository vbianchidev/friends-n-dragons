import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Spell, SpellDocument } from 'src/modules/spells/entities/spell.entity';
import { User } from 'src/modules/user/entities/user.entity';

export type SpellbookDocument = HydratedDocument<Spellbook>;

@Schema({ timestamps: true })
export class Spellbook {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: User.name })
  user: User;

  @Prop({ type: [Types.ObjectId], ref: Spell.name })
  spells: SpellDocument[];
}

export const SpellbookSchema = SchemaFactory.createForClass(Spellbook);
