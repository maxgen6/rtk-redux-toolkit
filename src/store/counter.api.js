import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const counterApi = createApi({
  reducerPath: 'counter/api',
  tagTypes: ['Counter'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    getTodo: build.query({
      query: (number) => ({
        url: 'todos',
        params: {
          _limit: number,
        }
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Counter', id })),
            { type: 'Counter', id: 'LIST' },
          ]
          : [{ type: 'Counter', id: 'LIST' }],
    }),

    addTodo: build.mutation({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json',
        }
      }),
      invalidatesTags: [{type: 'Counter', id: 'LIST'}]
    })
  })
});

export const { useGetTodoQuery, useAddTodoMutation } = counterApi;