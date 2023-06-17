import { baseApi } from '~/shared/api/baseApi'

export const productApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    popularProducts: builder.query<any, any>({
      query: () => ({
        url: `/products/`,
      }),
    }),
  }),
})

export const { usePopularProductsQuery } = productApis
