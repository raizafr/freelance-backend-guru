import { Controller } from '@nestjs/common';
import { PersonalProfileService } from './personal-profile.service';

@Controller('personal-profile')
export class PersonalProfileController {
  constructor(
    private readonly personalProfileService: PersonalProfileService,
  ) {}
}
