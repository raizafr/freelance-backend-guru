import { Inject, Injectable } from '@nestjs/common';
import { CreateUserServiceDto } from './dto/create-user-service.dto';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UserService } from './entities/user-service.entity';

@Injectable()
export class UserServiceService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
    @Inject('USER_SERVICE_REPOSITORY')
    private usersServiceRepository: typeof UserService,
  ) {}
  async addUserService(
    createUserServiceDto: CreateUserServiceDto,
    res: Response,
  ) {
    const {
      email,
      serviceTitle,
      serviceDescription,
      serviceCostperHour,
      serviceCostperWeek,
    } = createUserServiceDto;

    try {
      const findUser = await this.usersRepository.findOne({ where: { email } });
      if (!findUser) {
        return res.status(404).json({ message: `${email} not found` });
      }

      await this.usersServiceRepository.create({
        userId: findUser.id,
        serviceTitle,
        serviceDescription,
        rateHour: serviceCostperHour,
        rateWeek: serviceCostperWeek,
      });
      res.status(201).json({ message: 'service created' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}
