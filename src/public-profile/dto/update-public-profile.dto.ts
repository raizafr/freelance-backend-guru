import { PartialType } from '@nestjs/mapped-types';
import { CreatePublicProfileDto } from './create-public-profile.dto';

export class UpdatePublicProfileDto extends PartialType(CreatePublicProfileDto) {}
