import { FC } from 'react'

import Categories from '~/entities/Categories/ui/Categories'
import { ProductList } from '~/features/productList'
import { HomeBanner, Layout } from '~/shared'

export const Home: FC = () => {
  return (
    <>
      <Layout mode="menu">
        <Categories />
        <div>
          <ProductList />
          <HomeBanner />
        </div>
      </Layout>
    </>
  )
}
