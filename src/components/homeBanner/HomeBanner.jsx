import { Link } from 'react-router-dom'
import styles from './HomeBanner.module.scss'

export const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.order}>
        <div className={styles.title}>Заказывайте в приложении и получите пиццу в подарок!</div>
        <div className={styles.text}>
          Пицца «Мясная» 25 см в подарок при заказе через приложение! Подробности при скачивании:
        </div>
        <div className={styles.buttons}>
          <Link to='https://apps.apple.com/ru/app/id1158898682?referrer=appmetrica_tracking_id%3D818922990581394302%26ym_tracking_id%3D12865574045399502275'>
            <img src='/homeBanner/app-store.svg' alt='' />
          </Link>
          <Link to='https://play.google.com/store/apps/details?id=ru.farfor&referrer=appmetrica_tracking_id%3D170404690310291845%26ym_tracking_id%3D6050769962065580548'>
            <img src='/homeBanner/google-play.svg' alt='' />
          </Link>
        </div>
      </div>
      <div className={styles.qr}>
        <div className={styles.qr__text}>Наведите камеру на QR-код, чтобы скачать</div>
        <div className={styles.qr__img}>
          <img src='/homeBanner/qr.png' alt='' />
        </div>
      </div>
    </div>
  )
}
