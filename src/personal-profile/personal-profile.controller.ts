import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalProfileService } from './personal-profile.service';
import { CreatePersonalProfileDto } from './dto/create-personal-profile.dto';
import { UpdatePersonalProfileDto } from './dto/update-personal-profile.dto';

@Controller('personal-profile')
export class PersonalProfileController {
  constructor(private readonly personalProfileService: PersonalProfileService) {}

  @Post()
  create(@Body() createPersonalProfileDto: CreatePersonalProfileDto) {
    return this.personalProfileService.create(createPersonalProfileDto);
  }

  @Get()
  findAll() {
    return this.personalProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalProfileDto: UpdatePersonalProfileDto) {
    return this.personalProfileService.update(+id, updatePersonalProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalProfileService.remove(+id);
  }
}
