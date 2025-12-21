import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Comment } from '../model/types';

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['Comments'],
    endpoints: builder => ({
        getComments: builder.query<Comment[], void>({
            query: () => 'comments',
            providesTags: ['Comments'],
        }),

        getCommentsByPostId: builder.query<Comment[], number>({
            query: postId => `comments?postId=${postId}`,
            providesTags: (_res, _err, postId) => [
                { type: 'Comments', id: `POST_${postId}` },
            ],
        }),
    }),
});

export const {
    useGetCommentsQuery,
    useGetCommentsByPostIdQuery,
} = commentsApi;