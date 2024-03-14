import { Test, TestingModule } from '@nestjs/testing';
import { PersonalProfileController } from './personal-profile.controller';
import { PersonalProfileService } from './personal-profile.service';

describe('PersonalProfileController', () => {
  let controller: PersonalProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalProfileController],
      providers: [PersonalProfileService],
    }).compile();

    controller = module.get<PersonalProfileController>(PersonalProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
