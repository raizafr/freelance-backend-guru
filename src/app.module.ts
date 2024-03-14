import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { PublicProfileModule } from './public-profile/public-profile.module';
import { PersonalProfileModule } from './personal-profile/personal-profile.module';
import { UserServiceModule } from './user-service/user-service.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    DatabaseModule,
    PublicProfileModule,
    PersonalProfileModule,
    UserServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
