import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateSpellbookDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  user: ObjectId;
}
