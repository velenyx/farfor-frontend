import { YMaps, Map, Placemark, GeolocationControl } from '@pbe/react-yandex-maps'
import { Link } from 'react-router-dom'

import styles from './OurRestaurants.module.scss'

import { Layout } from '~/shared'

export const OurRestaurants = () => {
  const distance = '20 км.'
  const cooktime = '30 мин.'

  return (
    <>
      <Layout>
        <>
          <h1 className={styles.delivery__title}>Доставка и самовывоз</h1>
          <p className={styles.delivery__description} data-v-3e03e5a3="">
            Введите свой адрес, и мы расскажем об условиях доставки, покажем ближайшие рестораны и точки самовывоза
          </p>
          <div className={styles.search}>
            <div className={styles.search__container}>
              <input placeholder="Введите адрес" className={styles.input} />
              <button type="submit" className={styles.search_button}>
                <span className={styles.v_button__content}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#fe5000"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.448623 6.88088C0.139459 7.03223 -0.0383566 7.36426 0.00701819 7.70548C0.052393 8.0467 0.3108 8.32072 0.648773 8.38601L6.5572 9.4428L7.61399 15.3512C7.67928 15.6892 7.9533 15.9476 8.29452 15.993C8.63574 16.0384 8.96777 15.8605 9.11911 15.5514L15.9242 1.14059C16.0674 0.835275 16.0039 0.472967 15.7655 0.234513C15.527 -0.00394055 15.1647 -0.0674093 14.8594 0.0757882L0.448623 6.88088Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <section className={styles.delivery__points}>
            <div className={styles.section_points}>
              <ul className={styles.points}>
                <div className={styles.delivery__item}>
                  <div>
                    <div className={styles.delivery__item_top}>
                      <h4 className={styles.delivery__item_title}>Липецк, ул. 8 марта, 9</h4>
                      <div className={styles.delivery__item_distance}>
                        <span>Ближайшая </span>
                        <span>~ {distance}</span>
                      </div>
                    </div>
                    <div className={styles.delivery__item_cooktime}>
                      <span>Время приготовления ~{cooktime}</span>
                    </div>
                    <div className={styles.delivery__item_bottom}>
                      <div className={styles.delivery__item_hours}>ОТКРЫТА ПН-ВС С 11:00 ДО 22:00</div>
                      <div className={styles.delivery__item_tags}></div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
            <YMaps>
              <Map
                className={styles.section__map}
                defaultState={{ center: [52.606708, 39.585059], zoom: 12, controls: ['zoomControl'] }}
                modules={['control.ZoomControl']}>
                <Placemark defaultGeometry={[52.606708, 39.585059]} />
                <GeolocationControl options={{ float: 'right' }} />
              </Map>
            </YMaps>
          </section>

          <div className={styles.delivery__info}>
            <h2 className={styles.delivery__info_headline}>Что делать, если адрес не входит в зону доставки</h2>
            <p className={styles.delivery__info_description}>
              Всю информацию по условиям доставки можно уточнить у менеджера вашего города. Если адрес доставки не
              входит в зону доставки, продавец вправе по договорённости с клиентом осуществить доставку заказа на
              индивидуальных условиях.
            </p>
            <a href="https://t.me/legend_spike" className={styles.v_button}>
              <span className={styles.v_btn__content}>Связаться с нами</span>
            </a>
            <section className={styles.delivery__info_text}>
              <h2 className={styles.section__headline}>Обратите внимание</h2>
              <p className={styles.section__text}>
                В сумму заказа для расчета стоимости доставки не входят клиент -пакеты,напитки и соусы. Заказы на сумму
                более 5000 рублей требуют подтверждения в виде предоплаты, которая составляет 50% от стоимости заказа ,
                для этого с вами свяжется менеджер и направит курьера по указанному адресу.
              </p>
            </section>
            <section className={styles.delivery__info_text}>
              <h2 className={styles.section__headline}>Способы оплаты — онлайн, картой или наличными при получении</h2>
              <p>
                <span>Доступные способы оплаты и информацию об оплате вы можете узнать на странице </span>
                <Link to="/payment/" className={styles.link}>
                  Оплата
                </Link>
              </p>
            </section>
            <section className={styles.delivery__info_text}>
              <h2 className={styles.section__headline}>Среднее время доставки от 60 минут</h2>
              <p className={styles.section__text}>
                Точное время ожидания вам будет сообщено после оформления заказа. Оно может увеличиться в зависимости от
                загруженности нашей кухни или условий доставки.
              </p>
            </section>
          </div>
        </>
      </Layout>
    </>
  )
}
