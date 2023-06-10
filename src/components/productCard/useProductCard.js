import { useQuery } from '@tanstack/react-query'
import ProductService from '../../services/product/product.service'
import { SERVER_URL } from '@helpers'

export const useProductCard = async () => {
  const { data, isSuccess } = useQuery(['get products'], () => ProductService.getAll(), { select: ({ data }) => data })

  return { data, isSuccess }
}
