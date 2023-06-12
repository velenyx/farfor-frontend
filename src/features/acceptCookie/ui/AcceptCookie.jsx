import { Link } from 'react-router-dom'
import styles from './AcceptCookie.module.scss'
import { RiCloseLine } from 'react-icons/ri'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { PrivacyCookie } from 'shared'

export const AcceptCookie = () => {
  const ValuePrivacyCookie = Cookies.get(PrivacyCookie)
  const [isAccepted, setIsAccepted] = useState(ValuePrivacyCookie || false)

  const AgreeCookie = () => {
    Cookies.set(PrivacyCookie, 'true')
    setIsAccepted(true)
  }
  if (isAccepted) return null
  return (
    <div className={styles.cookies}>
      <div className={styles.cookies__wrapper}>
        <div className={styles.description}>
          <img src='cookies.svg' alt='Cookie' />
          <div className={styles.description__text}>
            Пользуясь сайтом, вы соглашаетесь с{' '}
            <Link
              to='/confidential'
              className={styles.agree}
              onClick={() => AgreeCookie()}>
              использованием cookies
            </Link>
          </div>
        </div>
        <RiCloseLine onClick={() => AgreeCookie()} />
      </div>
    </div>
  )
}
