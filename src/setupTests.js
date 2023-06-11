/* eslint-disable no-plusplus */
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { db } from './mocks/db';

const server = setupServer(...handlers);
beforeAll(() => {
  db.group.create({
    id: 'A',
  });
  db.group.create({
    id: 'B',
  });
  db.group.create({
    id: 'C',
  });

  db.teacher.create();

  const createStudents = () => {
    for (let i = 0; i < 15; i++) {
      db.student.create();
    }
  };

  createStudents();

  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
