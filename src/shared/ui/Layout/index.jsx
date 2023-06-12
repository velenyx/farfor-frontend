import { AcceptCookie } from 'features/acceptCookie'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Layout = ({ children, mode = 'default' }) => {
  return (
    <>
      <Header mode={mode} />
      <main className='main__container' style={{ paddingTop: 132 }}>
        {children}
      </main>
      <Footer />
      <AcceptCookie />
    </>
  )
}
