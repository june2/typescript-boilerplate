import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { UserService } from '../../src/api/user/user.service';
import { ApplicationModule } from './../../src/app.module';

describe('Users', () => {
  const userService = {
    findAll: () => ['test', 'test'],
    create: () => 'test'
  };

  let app: INestApplication;

  beforeAll(async () => {

    const moduleFixture = await Test.createTestingModule({
      imports: [ApplicationModule]
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
