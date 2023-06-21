import { useParams } from 'react-router-dom'

import { Layout } from '~/shared'
import { SaleInfo } from '~/widgets/SaleInfo'

export const SaleDetail = () => {
  const { saleSlug } = useParams()

  return (
    <Layout>
      <SaleInfo slug={saleSlug} />
    </Layout>
  )
}
