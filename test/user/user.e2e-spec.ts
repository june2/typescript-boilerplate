import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../../src/api/user/user.module';
import { User } from '../../src/api/user/user.entity';
import { UserService } from '../../src/api/user/user.service';

describe('Cats', () => {
  const userService = {
    findAll: () => ['test', 'test'],
    create: () => 'test'
  };

  let app: INestApplication;

  beforeAll(async () => {

    const moduleFixture = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature([User]),
        UserModule,
      ]
    })
      .overrideProvider(UserService)
      .useValue(userService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`GET /users`, () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(userService.findAll());
  });

  // it(`POST /user`, () => {
  //   return request(app.getHttpServer())
  //     .post('/user')
  //     .send({ name: 'test' })
  //     .expect(201)
  //     .expect(userService.create());
  // });

  afterAll(async () => {
    await app.close();
  });
});
