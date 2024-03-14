import { Sequelize } from 'sequelize-typescript';
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
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'freelance-guru',
      });
      sequelize.addModels([User, PublicProfile, PersonalProfile, UserService]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
