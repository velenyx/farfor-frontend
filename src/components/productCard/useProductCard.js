import { useQuery } from '@tanstack/react-query'
import { $axios } from '@helpers'

export const useProductCard = () => {
  // const { data, isSuccess } = useQuery(['get products'], () => fetch('http://localhost:8000/api/v1/products'))

  console.log('@data', data)

  return { data, isSuccess }
}
