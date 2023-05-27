/* eslint-disable no-plusplus */
import { setupWorker } from 'msw';
import { db } from './db';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

const createStudents = () => {
  for (let i = 0; i < 15; i++) {
    db.student.create();
  }
};

createStudents();

window.mock = {
  createStudents,
  getStudents: () => db.student.getAll(),
};
