import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../model/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
      providesTags: result =>
        result
          ? [
            ...result.map(post => ({ type: 'Posts' as const, id: post.id })),
            { type: 'Posts', id: 'LIST' },
          ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),

    getPostsByUserId: builder.query<Post[], number>({
      query: userId => `posts?userId=${userId}`,
      providesTags: (_res, _err, userId) => [{ type: 'Posts', id: `USER_${userId}` }],
    }),

    getPostById: builder.query<Post, number>({
      query: id => `posts/${id}`,
      providesTags: (_res, _err, id) => [{ type: 'Posts', id }],
    }),
    
    invalidatePosts: builder.mutation<void, void>({
      query: () => ({
        url: 'posts',
        method: 'POST',
        body: {}, 
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
  useGetPostByIdQuery,
  useInvalidatePostsMutation,
} = postsApi;
