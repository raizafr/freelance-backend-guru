import { Module } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { UserServiceController } from './user-service.controller';
import { usersProviders } from 'src/users/users.providers';
import { userServiceProviders } from './user-service.providers';

@Module({
  controllers: [UserServiceController],
  providers: [UserServiceService, ...usersProviders, ...userServiceProviders],
})
export class UserServiceModule {}
