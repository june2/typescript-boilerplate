import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { ConfigModule } from './common/config/config.module';
import { ConfigService } from './common/config/config.service';

const config : ConfigService = new ConfigService();

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      type: config.dbType,      
      host: config.dbHost,
      port: config.dbPort,
      database: config.dbName,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true
    }),
    AuthModule,
    UserModule
  ]
})
export class ApplicationModule { }
