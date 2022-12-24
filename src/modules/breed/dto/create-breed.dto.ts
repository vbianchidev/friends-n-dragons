import { IsNotEmpty } from 'class-validator';

export class CreateBreedDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  height: string;
  @IsNotEmpty()
  Weight: string;
  @IsNotEmpty()
  AttributeValues: string;
  @IsNotEmpty()
  size: string;
  @IsNotEmpty()
  displacement: string;
  @IsNotEmpty()
  eyesight: string;
  @IsNotEmpty()
  languages: string;
  @IsNotEmpty()
  BonusesinSkills: string;
}
