import { HomeBanner, Layout, ProductCard } from '@components'

import json from '../../components/productCard/product.json'

const data = json.results[0]

export const Home = () => {
  return (
    <Layout>
      <div>
        <ProductCard item={data} />
        <HomeBanner />
      </div>
    </Layout>
  )
}
