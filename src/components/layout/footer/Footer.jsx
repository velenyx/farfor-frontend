import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='footer__container'>
        <div className={styles.footer__links}>
          <div className={styles.item}>
            <div className={styles.title}>Клиентам</div>
            <ul className={styles.list__links}>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Доставка и самовывоз
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Акции
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Оплата
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Бонусы
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Новости
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Поддержка</div>
            <ul className={styles.list__links}>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Оставить отзыв
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Сообщить об ошибке
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Карта сайта
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Компания</div>
            <ul className={styles.list__links}>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Вакансии
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Открыть свое дело
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Полные реквизиты
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Тайный покупатель
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Коммерческое предложение
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Информация</div>
            <ul className={styles.list__links}>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Политика конфиденциальности
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Пользовательское соглашение
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Для потребителей
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Правила продажи
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Наше приложение</div>
            <ul className={styles.list__links}>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Доставка и самовывоз
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Акции
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Оплата
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Бонусы
                </Link>
              </li>
              <li className={styles.item__link}>
                <Link className={styles.link} to='/'>
                  Новости
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__copy}>
          <div className={styles.copy__left}>
            <div className={styles.copyright}>© 2010 - 2023, FARFOR v22.3.3</div>
            <div className={styles.requisites}>
              Данные о продавце в разделе <Link to='/'>Реквизиты</Link>
            </div>
          </div>
          <div className={styles.copy__right}></div>
        </div>
      </div>
    </footer>
  )
}
