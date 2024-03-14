import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { PersonalProfile } from 'src/personal-profile/entities/personal-profile.entity';
import { PublicProfile } from 'src/public-profile/entities/public-profile.entity';
import { UserService } from 'src/user-service/entities/user-service.entity';

@Table
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
  })
  screenName: string;

  @Column({
    type: DataType.STRING,
    unique: { name: 'User_email_key', msg: 'Email already exists' },
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  profilePictureUrl: string;

  @Column({
    type: DataType.STRING,
  })
  password: string;

  @BelongsToMany(() => User, () => PublicProfile, 'userId')
  publicProfile: User[];

  @BelongsToMany(() => User, () => PersonalProfile, 'userId')
  personalProfile: User[];

  @BelongsToMany(() => User, () => UserService, 'userId')
  userService: User[];
}
