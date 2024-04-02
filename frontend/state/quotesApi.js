import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quotesApi = createApi({
    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/' }),
    tagTypes: ['Quotes'],
    endpoints: builder => ({
        getQuotes: builder.query({
            query: () => 'quotes',
            providesTags: ['Quotes'],
        }),
        createQuote: builder.mutation({
            query: ({ authorName, quoteText }) => ({
                url: 'quotes',
                body: { authorName, quoteText },
                method: 'POST',
            }),
            invalidatesTags: ['Quotes'],
        }),
        deleteQuote: builder.mutation({
            query: id => ({
                url: `quotes/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Quotes'],
        }),
        toggleFake: builder.mutation({
            query: (id, apocryphal) => ({
                url: `quotes/${id}`,
                method: 'PUT',
                body: { apocryphal },
            }),
            invalidatesTags: ['Quotes']
        })
    }),
})

export const {
    useGetQuotesQuery, useCreateQuoteMutation, useDeleteQuoteMutation, useUpdateQuoteMutation,
} = quotesApi