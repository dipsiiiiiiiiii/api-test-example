import request from 'supertest';
import app from '../src/app';
import prisma from '../prisma';
import { usersData } from './data/users';

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe('/users', () => {
  test('create user', async () => {
    await request(app)
      .post('/users/signup')
      .send({ email: 'test@naver.com', name: '김관희' })
      .expect(201);
  });

  test('get user by id', async () => {
    await prisma.user.createMany({ data: usersData });

    const USER_ID = 1;

    const [data] = usersData.filter(u => u.id === USER_ID);

    await request(app).get(`/users/${USER_ID}`).expect(data);
  });
});
