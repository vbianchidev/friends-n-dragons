import { IsNumber, Min, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationParams {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  page_number?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page_size?: number;
}
