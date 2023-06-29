import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
    }),
  }),
});

// use[MethodName][MethodType]
export const { useGetGroupsQuery } = groupsApi;
