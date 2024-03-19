import { Inject, Injectable } from '@nestjs/common';
import { CreatePersonalProfileDto } from './dto/create-personal-profile.dto';
import { Response } from 'express';
import { PersonalProfile } from './entities/personal-profile.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PersonalProfileService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
    @Inject('PERSONAL_PROFILE_REPOSITORY')
    private publicProfileRepository: typeof PersonalProfile,
  ) {}
  async addPersonalProfile(
    createPersonalProfileDto: CreatePersonalProfileDto,
    res: Response,
  ) {
    const {
      screenName,
      type,
      email,
      profilePictureUrl,
      tagline,
      bio,
      verifyYourIdentityUrl,
      verifyYourAddresUrl,
      companyHistory,
    } = createPersonalProfileDto;
    try {
      const findUser = await this.usersRepository.findOne({ where: { email } });
      if (!findUser) {
        return res.status(404).json({ message: `${email} not found` });
      }
      await findUser.update({ screenName, profilePictureUrl });
      await this.publicProfileRepository.create({
        userId: findUser.id,
        type,
        tagline,
        bio,
        verifyYourIdentityUrl,
        verifyYourAddresUrl,
        companyHistory,
      });
      res.status(404).json({ message: 'personal profile updated' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
