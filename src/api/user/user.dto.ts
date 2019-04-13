import { IsInt, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()  
  readonly email: string;

  @IsString()  
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly name: string;
}

export class UpdateUserDto {  
  @IsString()
  @IsOptional()
  readonly name: string;
}
