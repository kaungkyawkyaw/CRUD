import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes:["exampleApi"],
  endpoints: (builder) => ({
    getExample: builder.query({
      query: () => `/`,
      providesTags:["exampleApi"]
    }),
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = exampleApi