import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './api/photo/photo.module';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    PhotoModule, UserModule    
  ]
})
export class ApplicationModule {}
