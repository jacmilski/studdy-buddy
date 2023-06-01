/* eslint-disable no-plusplus */
import { setupWorker } from 'msw';
import { db } from './db';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

const seed = () => {
  db.group.create({
    id: 'A',
  });
  db.group.create({
    id: 'B',
  });
  db.group.create({
    id: 'C',
  });
};
seed();

db.teacher.create();

const createStudents = () => {
  for (let i = 0; i < 15; i++) {
    db.student.create();
  }
};

createStudents();

window.mock = {
  createStudents,
  getStudents: () => db.student.getAll(),
  getGroups: () => db.group.getAll(),
};
