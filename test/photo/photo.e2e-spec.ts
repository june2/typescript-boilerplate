import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from '../../src/api/photo/photo.module';
import { Photo } from '../../src/api/photo/photo.entity';
import { PhotoService } from '../../src/api/photo/photo.service';

describe('Cats', () => {
  const photoService = {
    findAll: () => ['test', 'test'],
    create: () => 'test'
  };

  let app: INestApplication;

  beforeAll(async () => {

    const moduleFixture = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature([Photo]),
        PhotoModule,
      ]
    })
      .overrideProvider(PhotoService)
      .useValue(photoService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`GET /photo`, () => {
    return request(app.getHttpServer())
      .get('/photo')
      .expect(200)
      .expect(photoService.findAll());
  });

  it(`POST /photo`, () => {
    return request(app.getHttpServer())
      .post('/photo')
      .send({ name: 'test' })
      .expect(201)
      .expect(photoService.create());
  });

  afterAll(async () => {
    await app.close();
  });
});
