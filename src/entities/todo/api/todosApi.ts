import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Todo } from '../ToDo';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['Todos'],
    endpoints: builder => ({
        getTodosByUserId: builder.query<Todo[], number>({
            query: userId => `todos?userId=${userId}`,
            providesTags: (_res, _err, userId) => [
                { type: 'Todos', id: `USER_${userId}` },
            ],
        }),
    }),
});

export const {    
    useGetTodosByUserIdQuery,
} = todosApi;