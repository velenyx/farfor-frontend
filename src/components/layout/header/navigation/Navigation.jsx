import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { AiFillStar } from 'react-icons/ai'

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__container}>
        <div className={styles.navigation__body}>
          <Link className={styles.link} to='/sales'>
            <AiFillStar />
            <span>Акции</span>
          </Link>
          <Link className={styles.link} to='/delivery'>
            Наши рестораны
          </Link>
          <Link className={styles.link} to='/bonus'>
            Бонусы
          </Link>
          <Link className={styles.link} to='/payment'>
            Оплата
          </Link>
          <Link className={styles.link} to='/back'>
            Оставить отзыв
          </Link>
          <Link className={styles.link} to='/control'>
            Тайный покупатель
          </Link>
          <Link className={styles.link} to='/jobs'>
            Работа в FARFOR
          </Link>
          <Link className={styles.link} to='/partner'>
            Франшиза
          </Link>
        </div>
      </div>
    </div>
  )
}
