import { FC, Fragment } from 'react'

import { AiFillApple } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { data } from './footer.data.ts'
import styles from './Footer.module.scss'

export const Footer: FC<$TSFixMe> = () => {
  return (
    <footer className={styles.footer}>
      <div className="footer__container">
        <div className={styles.footer__links}>
          {data.map(item => (
            <div className={styles.item} key={item.title}>
              <div className={styles.title}>{item.title}</div>
              <ul className={styles.list__links}>
                {item.links.map(subitem => (
                  <li className={styles.item__link} key={subitem.text}>
                    <Link className={styles.link} to={subitem.to}>
                      {subitem.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.item}>
            <div className={styles.title}>Наше приложение</div>
            <div className={styles.item__body}>
              <Link to="/a" className={styles.button__apps}>
                <span>Скачать</span>{' '}
                <span>
                  <AiFillApple /> <FaGooglePlay />
                </span>
              </Link>
              <div className={styles.footer__qr}>
                <div className={styles.qr__text}>Наведите камеру на QR-код, чтобы скачать</div>
                <div className={styles.qr}>
                  <img src="/footer-qr.svg" alt="" />
                </div>
              </div>
              <div className={styles.footer__available}>Доступно в AppStore, Google Play, AppGallery</div>
            </div>
          </div>
        </div>
        <div className={styles.footer__copy}>
          <div className={styles.copy__left}>
            <div className={styles.copyright}>© 2010 - 2023, FARFOR v22.3.3</div>
            <div className={styles.requisites}>
              Данные о продавце в разделе <Link to="/">Реквизиты</Link>
            </div>
          </div>
          <div className={styles.copy__right}>
            <div className={styles.payment}>
              <img src="/icons/footer-visa.svg" alt="" />
              <img src="/icons/footer-mastercard.svg" alt="" />
              <img src="/icons/footer-mir.svg" alt="" />
            </div>
            <div className={styles.socials}>
              <Link to="https://vk.com/farfordostavka">
                <img src="/vk.svg" alt="" />
              </Link>
              <Link to="https://t.me/farfordostavkaTG">
                <img src="/telegram.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
