import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { usersProviders } from 'src/users/users.providers';
import { paymentProviders } from './payment.providers';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, ...usersProviders, ...paymentProviders],
})
export class PaymentModule {}
