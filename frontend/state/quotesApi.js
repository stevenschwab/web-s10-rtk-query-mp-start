import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quotesApi = createApi({
    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/quotes' }),
    tagTypes: ['Quotes'],
    endpoints: builder => ({
        getQuotes: builder.query({
            query: () => 'quotes',
            providesTags: ['Quotes'],
        }),
        createQuote: builder.mutation({
            query: (quoteAuthor, quoteText) => ({
                url: 'quotes',
                method: 'POST',
                body: { quoteAuthor, quoteText },
            }),
            invalidatesTags: ['Quotes'],
        }),
    }),
})

export const {
    useGetQuotesQuery,
    useCreateQuoteMutation,
} = quotesApi