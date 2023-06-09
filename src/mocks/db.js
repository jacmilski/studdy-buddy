import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

faker.seed(123);

const groups = ['A', 'B', 'C'];

export const db = factory({
  student: {
    id: primaryKey(faker.string.uuid),
    name: () => faker.person.fullName(),
    attendance: () => `${faker.number.int({ min: 0, max: 100 })}`,
    average: () => `${faker.number.float({ min: 2, max: 5, precision: 0.1 })}`,
    group: () => faker.helpers.arrayElement(groups),
    course: () => faker.word.words(),
    grades: () => [
      {
        subject: 'Busines Philosophy',
        average: `${faker.number.float({ min: 2, max: 5, precision: 0.1 })}`,
      },
      {
        subject: 'Marketing',
        average: `${faker.number.float({ min: 2, max: 5, precision: 0.1 })}`,
      },
      {
        subject: 'Modern Economy',
        average: `${faker.number.float({ min: 2, max: 5, precision: 0.1 })}`,
      },
    ],
  },

  group: {
    id: primaryKey(String),
  },

  teacher: {
    id: primaryKey(() => '1'),
    name: () => 'Jacek Placek',
    login: () => 'jacek@placek.com',
    password: () => '1234',
  },

  note: {
    id: primaryKey(faker.string.uuid),
    title: () => faker.lorem.words({ min: 2, max: 4 }),
    content: () => faker.lorem.words({ min: 6, max: 15 }),
  },
});
