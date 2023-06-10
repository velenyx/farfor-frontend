import { ProductList } from 'features/productList'
import { ProductModal } from 'features/productModal'
import { useState } from 'react'
import { HomeBanner, Layout, LayoutModal } from 'shared'

export const Home = () => {
  return (
    <>
      <Layout>
        <div>
          <ProductList />
          <HomeBanner />
        </div>
      </Layout>
    </>
  )
}
