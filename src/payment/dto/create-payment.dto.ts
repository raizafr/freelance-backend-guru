import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  cardType: string;

  @IsNotEmpty()
  cardNumber: string;

  @IsNotEmpty()
  cardExpired: string;

  @IsNotEmpty()
  cvc: string;

  @IsNotEmpty()
  billingAddress: string;
}
