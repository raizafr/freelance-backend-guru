import { Sequelize } from 'sequelize-typescript';
import { Payment } from 'src/payment/entities/payment.entity';
import { PersonalProfile } from 'src/personal-profile/entities/personal-profile.entity';
import { PublicProfile } from 'src/public-profile/entities/public-profile.entity';
import { UserService } from 'src/user-service/entities/user-service.entity';
import { User } from 'src/users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([
        User,
        PublicProfile,
        PersonalProfile,
        UserService,
        Payment,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
