import { LayoutModal } from 'shared'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Layout = ({ children }) => {
  return (
    <>
      <LayoutModal />
      <Header />
      <main className='main__container'>{children}</main>
      <Footer />
    </>
  )
}
