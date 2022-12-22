import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClassesbookDocument = HydratedDocument<Classes>;
export type dice = 4 | 6 | 8 | 10 | 12 | 20;
@Schema({ timestamps: true })
export class Classes {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  BP: number;

  @Prop({ required: true })
  hitdice: dice;

  @Prop({ required: true })
  Weapons: string;

  @Prop({ required: true })
  armor: string;

  @Prop({ required: true })
  Tool: string;

  @Prop({ required: true })
  ResistanceTests: string;

  @Prop({ required: true })
  Skills: string;

  @Prop()
  ConjurationSkill?: string;
}
export const ClassesSchema = SchemaFactory.createForClass(Classes);
