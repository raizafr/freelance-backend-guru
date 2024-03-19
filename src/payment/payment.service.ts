import { Inject, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
    @Inject('PAYMENT_REPOSITORY')
    private paymentRepository: typeof Payment,
  ) {}
  async addPayment(createPaymentDto: CreatePaymentDto, res: Response) {
    const { email, cardType, cardNumber, cardExpired, cvc, billingAddress } =
      createPaymentDto;
    try {
      const findUser = await this.usersRepository.findOne({ where: { email } });
      if (!findUser) {
        return res.status(404).json({ message: `${email} not found` });
      }
      await this.paymentRepository.create({
        userId: findUser.id,
        cardType,
        cardNumber,
        cardExpired,
        cvc,
        billingAddress,
      });
      res.status(201).json({ message: `payment added` });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
