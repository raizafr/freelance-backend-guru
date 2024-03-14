import { Inject, Injectable } from '@nestjs/common';
import { CreatePublicProfileDto } from './dto/create-public-profile.dto';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { PublicProfile } from './entities/public-profile.entity';

@Injectable()
export class PublicProfileService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
    @Inject('PUBLIC_PROFILE_REPOSITORY')
    private publicProfileRepository: typeof PublicProfile,
  ) {}
  async addPublicIdentity(
    createPublicProfileDto: CreatePublicProfileDto,
    res: Response,
  ) {
    const {
      screenName,
      profilePictureUrl,
      address,
      country,
      street,
      city,
      state,
      postalCode,
      district,
      email,
    } = createPublicProfileDto;
    try {
      const findUser = await this.usersRepository.findOne({ where: { email } });
      if (!findUser) {
        return res.status(404).json({ message: `${email} not registered` });
      }
      await findUser.update({ screenName, profilePictureUrl });
      await this.publicProfileRepository.create({
        address,
        country,
        street,
        city,
        state,
        postalCode,
        district,
      });
      res.status(201).json({ message: 'Public profile added' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
