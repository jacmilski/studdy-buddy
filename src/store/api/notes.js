import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuid } from 'uuid';

export const notesApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Notes'],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => 'notes',
      providesTags: ['Notes'],
    }),
    addNote: builder.mutation({
      query: (body) => ({
        url: 'notes',
        method: 'POST',
        body: { id: uuid(), ...body },
      }),
      invalidatesTags: ['Notes'],
    }),
    removeNote: builder.mutation({
      query: (body) => ({
        url: 'notes',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Notes'],
    }),
  }),
});

export const { useGetNotesQuery, useAddNoteMutation, useRemoveNoteMutation } = notesApi;
