import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main__container'>{children}</main>
      <Footer />
    </>
  )
}
