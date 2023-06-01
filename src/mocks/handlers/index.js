import { students } from './students';
import { groups } from './groups';
import { auth } from './auth';

export const handlers = [...groups, ...students, ...auth];
