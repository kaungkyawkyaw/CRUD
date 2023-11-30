import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes:["productApi"],
    endpoints: (builder) => ({
    product: builder.query({
      query: () => `/products`,
      providesTags:["productApi"]
    }),
    singleproduct:builder.query({
      query:(id)=>`/products/${id}`,
      providesTags:["productApi"]
    }),
    Create:builder.mutation({
      query:(newProduct)=>({
        url:`/products`,
        method:"POST",
        body:newProduct
      }),
      invalidatesTags:["productApi"]
    }),
    Delete:builder.mutation({
      query:(id)=>({
        url: `/products/${id}`,
        method:"DELETE",
        body:id
      }),
      invalidatesTags:["productApi"]
    }),
    Edit:builder.mutation({
      query:(editProduct)=>({
        url: `/products/${editProduct.id}`,
        method:"PATCH",
        body:editProduct
      }),
      invalidatesTags:["productApi"]
    }),


    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useProductQuery,useSingleproductQuery, useCreateMutation,useDeleteMutation,useEditMutation } = productApi