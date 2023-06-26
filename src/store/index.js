import { configureStore, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = [
  {
    id: uuid(),
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet',
  },
];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push({
        id: uuid(),
        ...action.payload,
      });
    },
    removeNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;

export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
  },
});

/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
