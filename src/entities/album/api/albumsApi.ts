import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Album } from '../model/types';

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['Albums'],
    endpoints: builder => ({        
        getAlbumById: builder.query<Album, number>({
            query: id => `albums/${id}`,
            providesTags: (_result, _err, id) => [{ type: 'Albums', id }],
        }),

        getAlbumsByUserId: builder.query<Album[], number>({
            query: userId => `albums?userId=${userId}`,
            providesTags: (_res, _err, userId) => [
                { type: 'Albums', id: `USER_${userId}` },
            ],
        }),
    }),
});

export const {    
    useGetAlbumByIdQuery,
    useGetAlbumsByUserIdQuery,
} = albumsApi;