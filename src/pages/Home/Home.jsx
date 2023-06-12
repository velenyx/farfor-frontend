import { ProductList } from 'features/productList'
import { HomeBanner, Layout } from 'shared'

export const Home = () => {
  return (
    <>
      <Layout mode='menu'>
        <div>
          <ProductList />
          <HomeBanner />
        </div>
      </Layout>
    </>
  )
}
