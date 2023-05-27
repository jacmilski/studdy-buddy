import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

faker.seed(123);

const groups = ['A', 'B', 'C'];

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
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
});
