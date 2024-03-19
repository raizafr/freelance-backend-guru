import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { usersProviders } from 'src/users/users.providers';
import { PublicProfileService } from 'src/public-profile/public-profile.service';
import { publicProfileProviders } from 'src/public-profile/public-profile.providers';
import { PersonalProfileService } from 'src/personal-profile/personal-profile.service';
import { personalProfileProviders } from 'src/personal-profile/personal-profile.providers';
import { UserServiceService } from 'src/user-service/user-service.service';
import { userServiceProviders } from 'src/user-service/user-service.providers';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    PublicProfileService,
    PersonalProfileService,
    UserServiceService,
    ...usersProviders,
    ...publicProfileProviders,
    ...personalProfileProviders,
    ...userServiceProviders,
  ],
})
export class AuthModule {}
