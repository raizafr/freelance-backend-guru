import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { usersProviders } from 'src/users/users.providers';

@Module({
  controllers: [UploadController],
  providers: [UploadService, ...usersProviders],
})
export class UploadModule {}
