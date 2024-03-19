import { PersonalProfile } from './entities/personal-profile.entity';

export const personalProfileProviders = [
  {
    provide: 'PERSONAL_PROFILE_REPOSITORY',
    useValue: PersonalProfile,
  },
];
