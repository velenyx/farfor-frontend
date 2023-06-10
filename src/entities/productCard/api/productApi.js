import { useQuery } from '@tanstack/react-query'
import { $axios } from 'shared'

export const productApi = {
  getAll: function () {
    const { data, isSuccess } = useQuery(['get products'], () => $axios.get(`/products/`).then(data => data), {
      select: ({ data }) => data,
    })

    return { data, isSuccess }
  },
}
