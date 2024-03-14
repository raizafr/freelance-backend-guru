import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { Response } from 'express';
import { AddPasswordDto } from './dto/add-password.dto';
import { CreatePublicProfileDto } from 'src/public-profile/dto/create-public-profile.dto';
import { PublicProfileService } from 'src/public-profile/public-profile.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly publicProfileService: PublicProfileService,
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
}
