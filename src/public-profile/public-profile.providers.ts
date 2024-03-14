import { PublicProfile } from './entities/public-profile.entity';

export const publicProfileProviders = [
  {
    provide: 'PUBLIC_PROFILE_REPOSITORY',
    useValue: PublicProfile,
  },
];
