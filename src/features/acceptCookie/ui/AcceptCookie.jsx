import { Link } from 'react-router-dom'
import styles from './AcceptCookie.module.scss'

export const AcceptCookie = () => {
  return (
    <div className={styles.cookies__container}>
      <div className={styles.description}>
        <img src='cookies.svg' alt='Cookie' />
        <div className={styles.description__text}>
          Пользуясь сайтом, вы соглашаетесь с{' '}
          <Link to='/confidential' className={styles.agree}>
            использованием cookies
          </Link>
        </div>
      </div>
    </div>
  )
}
