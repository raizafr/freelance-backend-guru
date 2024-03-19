import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserServiceDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  serviceTitle: string;

  @IsNotEmpty()
  serviceDescription: string;

  @IsNumber()
  serviceCostperHour: string;

  @IsNumber()
  serviceCostperWeek: string;
}
