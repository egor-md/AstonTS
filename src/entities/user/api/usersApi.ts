import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../model/types';
 
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users',
      providesTags: result =>
        result
          ? [
              ...result.map(user => ({ type: 'Users' as const, id: user.id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),   

    getUserById: builder.query<User, number>({
      query: id => `users/${id}`,
      providesTags: (_res, _err, id) => [{ type: 'Users', id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
} = usersApi;
