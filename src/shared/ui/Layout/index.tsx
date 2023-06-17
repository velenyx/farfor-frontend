import { FC } from 'react'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

import { AcceptCookie } from '~/features/acceptCookie'

export const Layout: FC<$TSFixMe> = ({ children, mode = 'default' }) => {
  return (
    <>
      <Header mode={mode} />
      <main className="main__container" style={{ paddingTop: 132 }}>
        {children}
      </main>
      <Footer />
      <AcceptCookie />
    </>
  )
}
