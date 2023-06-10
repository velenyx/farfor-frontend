import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'
import { Layout } from 'shared'

export const NotFound = () => {
  return (
    <Layout>
      <div className={styles.found__container}>
        <div className={styles.image__wrapper}>
          <img src='notFound/not-found.png' alt='Page is not found' />
        </div>
        <div className={styles.text}>Страница не найдена</div>
        <Link to='/' className={styles.button}>
          На главную
        </Link>
      </div>
    </Layout>
  )
}
