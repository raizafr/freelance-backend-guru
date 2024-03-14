import { Module } from '@nestjs/common';
import { PublicProfileService } from './public-profile.service';
import { PublicProfileController } from './public-profile.controller';
import { usersProviders } from 'src/users/users.providers';
import { publicProfileProviders } from './public-profile.providers';

@Module({
  controllers: [PublicProfileController],
  providers: [
    PublicProfileService,
    ...publicProfileProviders,
    ...usersProviders,
  ],
})
export class PublicProfileModule {}
