import { IsInt, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreatePhotoDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsString()
  // @IsOptional()
  readonly filename: string;

  @IsBoolean() 
  @IsOptional() 
  readonly isPublished: boolean;
}
