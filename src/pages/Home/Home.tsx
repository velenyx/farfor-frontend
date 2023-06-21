import { FC } from 'react'

import { ProductList } from '~/features/productList'
import { HomeBanner, Layout } from '~/shared'
import { Banner } from '~/widgets/Banner'

export const Home: FC = () => {
  return (
    <>
      <Layout mode="menu">
        <div>
          <Banner />
          <ProductList />
          <HomeBanner />
        </div>
      </Layout>
    </>
  )
}
