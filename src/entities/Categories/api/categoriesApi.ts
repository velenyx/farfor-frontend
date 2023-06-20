import { baseApi } from '~/shared/api/baseApi'

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query<any, void>({
      query: () => ({
        url: `/categories/`,
      }),
    }),
  }),
})

export const { useGetCategoriesQuery } = categoriesApi
