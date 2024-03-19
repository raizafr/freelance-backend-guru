import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { Response } from 'express';
import { AddPasswordDto } from './dto/add-password.dto';
import { CreatePublicProfileDto } from 'src/public-profile/dto/create-public-profile.dto';
import { PublicProfileService } from 'src/public-profile/public-profile.service';
import { CreatePersonalProfileDto } from 'src/personal-profile/dto/create-personal-profile.dto';
import { PersonalProfileService } from 'src/personal-profile/personal-profile.service';
import { CreateUserServiceDto } from 'src/user-service/dto/create-user-service.dto';
import { UserServiceService } from 'src/user-service/user-service.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly publicProfileService: PublicProfileService,
    private readonly personalProfileService: PersonalProfileService,
    private readonly userServiceService: UserServiceService,
  ) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    return this.usersService.create(createUserDto, res);
  }

  @Post('add-password')
  addPassword(@Body() addPassowrdDto: AddPasswordDto, @Res() res: Response) {
    return this.authService.addPassword(addPassowrdDto, res);
  }

  @Post('add-public-identity')
  addPublicIdentity(
    @Body() createPublicProfileDto: CreatePublicProfileDto,
    @Res() res: Response,
  ) {
    return this.publicProfileService.addPublicIdentity(
      createPublicProfileDto,
      res,
    );
  }

  @Post('add-personal-profile')
  addPersonalProfile(
    @Body() createPersonalProfileDto: CreatePersonalProfileDto,
    @Res() res: Response,
  ) {
    return this.personalProfileService.addPersonalProfile(
      createPersonalProfileDto,
      res,
    );
  }

  @Post('add-user-service')
  addUserService(
    @Body() createUserServiceDto: CreateUserServiceDto,
    @Res() res: Response,
  ) {
    return this.userServiceService.addUserService(createUserServiceDto, res);
  }
}
