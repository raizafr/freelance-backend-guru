import { Controller } from '@nestjs/common';
import { PublicProfileService } from './public-profile.service';

@Controller('public-profile')
export class PublicProfileController {
  constructor(private readonly publicProfileService: PublicProfileService) {}
}
