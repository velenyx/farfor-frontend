import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export const Layout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main__container'>{children}</main>
      <Footer />
    </div>
  )
}
