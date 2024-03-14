import { Module } from '@nestjs/common';
import { PersonalProfileService } from './personal-profile.service';
import { PersonalProfileController } from './personal-profile.controller';

@Module({
  controllers: [PersonalProfileController],
  providers: [PersonalProfileService],
})
export class PersonalProfileModule {}
