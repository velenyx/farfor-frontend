import type { Sale } from '../model/types'

import { baseApi } from '~/shared/api/baseApi'

export const saleApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    getSales: builder.query<any, void>({
      query: () => ({
        url: `/promotions/`,
      }),
    }),
    getSaleDetail: builder.query<Sale, string | undefined>({
      query: slug => ({
        url: `/promotions/${slug}/`,
      }),
    }),
  }),
})

export const { useGetSalesQuery, useGetSaleDetailQuery } = saleApis
