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
export class Payment extends Model {
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
  cardNumber: string;

  @Column({
    type: DataType.STRING,
  })
  cardType: string;

  @Column({
    type: DataType.STRING,
  })
  cardExpired: string;

  @Column({
    type: DataType.STRING,
  })
  cvc: string;

  @Column({
    type: DataType.STRING,
  })
  billingAddress: string;

  @BelongsTo(() => User, { foreignKey: 'userId', as: 'user' })
  user: User;
}
