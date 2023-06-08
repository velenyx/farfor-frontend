import { HomeBanner, Layout, ProductCard } from '@components'

export const Home = () => {
  return (
    <Layout>
      <div>
        <ProductCard />
        <HomeBanner />
      </div>
    </Layout>
  )
}
