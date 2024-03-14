import { Inject, Injectable } from '@nestjs/common';
import { AddPasswordDto } from './dto/add-password.dto';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
  ) {}

  async addPassword(addPassowrdDto: AddPasswordDto, res: Response) {
    const { email, password } = addPassowrdDto;
    try {
      const findEmail = await this.usersRepository.findOne({
        where: { email },
      });
      if (!findEmail) {
        return res.status(404).json({ message: `${email} not found` });
      }
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      await findEmail.update({ password: hash });
      res.status(201).json({ message: 'created password' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
