import { rest } from 'msw';
import { db } from 'mocks/db';

const arrayOfGroups = ['A', 'B', 'C'];

export const groups = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups: arrayOfGroups }));
  }),

  rest.get('/groups/:id', (req, res, ctx) => {
    const students = db.student.getAll();
    if (req.params.id) {
      const matchingStudents = db.student.findMany({
        where: {
          group: {
            equals: req.params.id,
          },
        },
      });

      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudents,
        })
      );
    }
    return res(ctx.status(200), ctx.json({ students }));
  }),
];
