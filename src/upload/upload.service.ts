import { Inject, Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { Response } from 'express';
import * as fs from 'fs';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UploadService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
  ) {}
  async profileImage(
    createUploadDto: CreateUploadDto,
    file: Express.Multer.File,
    res: Response,
  ) {
    const { email } = createUploadDto;
    try {
      const findUser = await this.usersRepository.findOne({ where: { email } });
      if (!findUser) {
        return res.status(404).json({ message: `${email} not found` });
      }
      const uploadDir = 'public/profile-images';
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const filePath = `${uploadDir}/${file.originalname}`;
      fs.writeFileSync(filePath, file.buffer);

      res.status(201).json({ message: 'image uploaded', path: filePath });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async docFile(
    createUploadDto: CreateUploadDto,
    file: Express.Multer.File,
    res: Response,
  ) {
    const { email } = createUploadDto;
    try {
      const findUser = await this.usersRepository.findOne({ where: { email } });
      if (!findUser) {
        return res.status(404).json({ message: `${email} not found` });
      }

      const uploadDir = 'public/file';
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const filePath = `${uploadDir}/${file.originalname}`;
      fs.writeFileSync(filePath, file.buffer);

      res.status(201).json({ message: 'file uploaded', path: filePath });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}
