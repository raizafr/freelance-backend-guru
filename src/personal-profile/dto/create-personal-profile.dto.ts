import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreatePersonalProfileDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(4)
  screenName: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  profilePictureUrl: string;

  @IsNotEmpty()
  tagline: string;

  @IsOptional()
  bio: string;

  @IsOptional()
  verifyYourIdentityUrl: string;

  @IsOptional()
  verifyYourAddresUrl: string;

  @IsOptional()
  companyHistory: string;

  @IsOptional()
  operatingSince: string;

  @IsOptional()
  featuredTeamMembersUrl: string;
}
