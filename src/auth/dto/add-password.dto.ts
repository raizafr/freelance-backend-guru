import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class AddPasswordDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
