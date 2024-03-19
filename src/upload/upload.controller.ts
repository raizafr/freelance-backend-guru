import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  Res,
  UploadedFile,
  FileTypeValidator,
  ParseFilePipe,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('profile-image')
  @UseInterceptors(FileInterceptor('image'))
  profileImage(
    @Body() createUploadDto: CreateUploadDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/*' })],
      }),
    )
    file: Express.Multer.File,
    @Res() res: Response,
  ) {
    return this.uploadService.profileImage(createUploadDto, file, res);
  }

  @Post('upload-doc')
  @UseInterceptors(FileInterceptor('file'))
  docFile(
    @Body() createUploadDto: CreateUploadDto,
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    return this.uploadService.docFile(createUploadDto, file, res);
  }
}
