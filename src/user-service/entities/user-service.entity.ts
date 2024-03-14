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
export class UserService extends Model {
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
  serviceTitle: string;

  @Column({
    type: DataType.STRING,
  })
  serviceDescription: string;

  @Column({
    type: DataType.BIGINT,
  })
  rateHour: string;

  @Column({
    type: DataType.BIGINT,
  })
  rateWeek: string;

  @Column({
    type: DataType.STRING,
  })
  serviceThumbnailUrl: string;

  @BelongsTo(() => User, { foreignKey: 'userId', as: 'user' })
  user: User;
}
