import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto, res: Response) {
    const { firstName, lastName, email } = createUserDto;
    try {
      const store = await this.usersRepository.create({
        firstName,
        lastName,
        email,
      });
      res.status(201).json({ message: 'user created', data: store });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
