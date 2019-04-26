import { join } from 'path';

//config/database.ts
export default {
  type: 'mongodb',
  host: 'localhost',
  // username: process.env.TYPEORM_USERNAME,
  // password: process.env.TYPEORM_PASSWORD,
  name: 'prod',
  port: 27017,
  logging: process.env.TYPEORM_LOGGING === 'true',
  entities: [join(__dirname, '../../api/**/**.entity{.ts,.js}')],
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  useNewUrlParser: true
};