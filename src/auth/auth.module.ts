import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { usersProviders } from 'src/users/users.providers';
import { PublicProfileService } from 'src/public-profile/public-profile.service';
import { publicProfileProviders } from 'src/public-profile/public-profile.providers';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    PublicProfileService,
    ...usersProviders,
    ...publicProfileProviders,
  ],
})
export class AuthModule {}
