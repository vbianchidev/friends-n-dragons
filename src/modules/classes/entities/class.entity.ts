import { Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClassesbookDocument = HydratedDocument<Classes>;

@Schema({ timestamps: true })
export class Classes {}
