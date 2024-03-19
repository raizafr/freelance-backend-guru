import { Module } from '@nestjs/common';
import { PersonalProfileService } from './personal-profile.service';
import { PersonalProfileController } from './personal-profile.controller';
import { personalProfileProviders } from './personal-profile.providers';
import { usersProviders } from 'src/users/users.providers';

@Module({
  controllers: [PersonalProfileController],
  providers: [
    PersonalProfileService,
    ...personalProfileProviders,
    ...usersProviders,
  ],
})
export class PersonalProfileModule {}
