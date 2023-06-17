import { FC } from 'react'

import { ProductList } from '~/features/productList'
import { HomeBanner, Layout } from '~/shared'

export const Home: FC = () => {
  return (
    <>
      <Layout mode="menu">
        <div>
          <ProductList />
          <HomeBanner />
        </div>
      </Layout>
    </>
  )
}
