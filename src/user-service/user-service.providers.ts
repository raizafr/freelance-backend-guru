import { UserService } from './entities/user-service.entity';

export const userServiceProviders = [
  {
    provide: 'USER_SERVICE_REPOSITORY',
    useValue: UserService,
  },
];
