import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@Table
export class PersonalProfile extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column({
    type: DataType.STRING,
  })
  typeIdentity: string;

  @Column({
    type: DataType.TEXT,
  })
  tagline: string;

  @Column({
    type: DataType.TEXT,
  })
  bio: string;

  @Column({
    type: DataType.TEXT,
  })
  companyHistory: string;

  @Column({
    type: DataType.STRING,
  })
  operatingSince: string;

  @Column({
    type: DataType.STRING,
  })
  featuredTeamMembers: string;

  @Column({
    type: DataType.STRING,
  })
  verifyIdentityUrl: string;

  @Column({
    type: DataType.STRING,
  })
  verifyAddressUrl: string;

  @BelongsTo(() => User, { foreignKey: 'userId', as: 'user' })
  user: User;
}
