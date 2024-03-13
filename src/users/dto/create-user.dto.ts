import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  id: number;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  screenName: string;

  @IsNotEmpty()
  imageUrl: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
