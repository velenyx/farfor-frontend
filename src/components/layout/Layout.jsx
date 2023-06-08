import { Footer } from './footer/Footer'
import { Header } from './header/Header'

const Layout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main__container' style={{ padding: 50 }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
