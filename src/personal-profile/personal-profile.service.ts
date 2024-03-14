import { Injectable } from '@nestjs/common';
import { CreatePersonalProfileDto } from './dto/create-personal-profile.dto';
import { UpdatePersonalProfileDto } from './dto/update-personal-profile.dto';

@Injectable()
export class PersonalProfileService {
  create(createPersonalProfileDto: CreatePersonalProfileDto) {
    return 'This action adds a new personalProfile';
  }

  findAll() {
    return `This action returns all personalProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalProfile`;
  }

  update(id: number, updatePersonalProfileDto: UpdatePersonalProfileDto) {
    return `This action updates a #${id} personalProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalProfile`;
  }
}
