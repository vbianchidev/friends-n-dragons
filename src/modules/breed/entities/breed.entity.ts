import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BreedDocument = HydratedDocument<Breed>;

@Schema({ timestamps: true })
export class Breed {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  height: string;
  @Prop({ required: true })
  Weight: string;
  @Prop({ required: true })
  AttributeValues: number;
  @Prop({ required: true })
  size: string;
  @Prop({ required: true })
  displacement: string;
  @Prop({ required: true })
  eyesight: string;
  @Prop({ required: true })
  languages: string;
  @Prop({ required: true })
  BonusesinSkills: number;
}
export const BreedSchema = SchemaFactory.createForClass(Breed);
