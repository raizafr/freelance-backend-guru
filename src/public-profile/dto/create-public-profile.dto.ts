import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreatePublicProfileDto {
  @IsNotEmpty()
  @MinLength(4)
  screenName: string;

  @IsNotEmpty()
  profilePictureUrl: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  postalCode: string;

  @IsNotEmpty()
  district: string;

  @IsEmail()
  email: string;
}
