import { SESSION_TAG, baseApi } from '~/shared/api'

export const sessionApi = baseApi.injectEndpoints({
  endpoints: build => ({
    checkToken: build.mutation<$TSFixMe, $TSFixMe>({
      query: () => ({
        url: 'auth/token/',
        method: 'POST',
      }),
      invalidatesTags: [SESSION_TAG],
    }),
  }),
})

export const { useCheckTokenMutation } = sessionApi
