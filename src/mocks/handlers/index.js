import { students } from './students';
import { groups } from './groups';
import { auth } from './auth';
import { notes } from './notes';

export const handlers = [...groups, ...students, ...auth, ...notes];
