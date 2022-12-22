import { IsNotEmpty, IsString } from 'class-validator';
import { dice } from '../entities/class.entity';

export class CreateClassDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  BP: number;

  hitdice: dice;

  Weapons: string;

  @IsString()
  armor: string;

  @IsString()
  Tool: string;

  @IsString()
  ResistanceTests: string;

  @IsString()
  Skills: string;

  @IsString()
  ConjurationSkill?: string;
}
