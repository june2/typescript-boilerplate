import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user.module';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto'

describe('UserService', () => {
  let service: UserService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({      
      imports: [
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature([User]),
        UserModule,
      ]
    })
    .compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find all', async () => {
    let users = await service.findAll();
    // console.log(users);
    // expect(users).toBeDefined();
  });

  // it('create', async () => {
  //   let createUserDto = new CreateUserDto();
  //   createUserDto.email = 'test@test.com';
  //   createUserDto.password = '12345';
  //   createUserDto.name = 'test';
  //   let user = await service.create(createUserDto);
  //   expect(user).toBeDefined();
  // });
});
