import { FC, useEffect, useState } from 'react'

import cn from 'clsx'
import { AiOutlineClose, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
import { Navigation } from './navigation/Navigation'

import { Modal, useOnClickOutside } from '~/shared'

export const Header: FC<$TSFixMe> = ({ backLink = '/', mode }) => {
  const [showCityModal, setShowCityModal] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 1) setIsSticky(true)
    if (window.scrollY < 1) setIsSticky(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { isShow: showTimeModal, setIsShow: setShowTimeModal, ref } = useOnClickOutside(false)

  return (
    <header
      className={cn(styles.header__wrapper, {
        [styles.header__wrapper_sticky]: isSticky,
      })}>
      {/* <div
        className={cn(styles.city__modal_substrate, {
          [styles.opacityShow]: showCityModal,
        })}> */}
      <Modal isShow={showCityModal} handleClose={setShowCityModal}>
        {/* <div className={styles.city__modal_wrapper}> */}
        <div className={styles.city__modal_header}>
          <input type="text" placeholder="Начните вводить ваш город" className={styles.city__modal_input} />
          <div className={styles.city__modal_selected_city}>
            Выбран: <span>Липецк</span>
          </div>
          <div className={styles.city__modal_close} onClick={() => setShowCityModal(!showCityModal)}>
            <AiOutlineClose />
          </div>
        </div>
        <div className={styles.city__modal_body}>
          <ul>
            <li>
              <Link> Кохма</Link>
            </li>
            <li>
              <Link> Краснодар</Link>
            </li>
            <li>
              <Link> Крымск</Link>
            </li>
            <li>
              <Link> Курск</Link>
            </li>
            <li>
              <Link> Кохма</Link>
            </li>
            <li>
              <Link> Краснодар</Link>
            </li>
            <li>
              <Link> Крымск</Link>
            </li>
            <li>
              <Link> Курск</Link>
            </li>
            <li>
              <Link> Кохма</Link>
            </li>
            <li>
              <Link> Краснодар</Link>
            </li>
            <li>
              <Link> Крымск</Link>
            </li>
            <li>
              <Link> Курск</Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </Modal>

      {/* </div> */}
      <div className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.information}>
            <Link className={styles.information__logo} to={backLink}>
              <img src="/logo.svg" alt="Логотип" className={styles.logo__img} />
            </Link>
            <div className={styles.information__location}>
              <div className={styles.city__container}>
                <div className={styles.city} onClick={() => setShowCityModal(!showCityModal)}>
                  Липецк
                </div>
              </div>
              <div className={styles.work__container}>
                <div ref={ref} className={styles.workTime}>
                  <div onClick={() => setShowTimeModal(!showTimeModal)}>
                    с 11:00 до 22:00 <MdOutlineKeyboardArrowDown />
                  </div>
                  <div
                    className={cn(styles.workTime__menu, {
                      [styles.open]: showTimeModal,
                    })}>
                    <ul className={styles.workTime__list}>
                      <li className={styles.workTime__item}>ПН с 11:00 до 22:00</li>
                      <li className={styles.workTime__item}>ВТ с 11:00 до 22:00</li>
                      <li className={styles.workTime__item}>СР с 11:00 до 22:00</li>
                      <li className={styles.workTime__item}>ЧТ с 11:00 до 22:00</li>
                      <li className={styles.workTime__item}>ПТ с 11:00 до 22:00</li>
                      <li className={styles.workTime__item}>СБ с 11:00 до 22:00</li>
                      <li className={styles.workTime__item}>ВС с 11:00 до 22:00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.information__delivery}>
              <div className={styles.delivery__time}>Доставка ~60 минут</div>
              <Link to="/delivery" className={styles.delivery__calc}>
                Рассчитать для меня
              </Link>
            </div>
            <div className={styles.information__phones}>
              <a className={styles.phone} href="tel:+74742370437">
                +7 (4742) 37-04-37
              </a>
              <a className={styles.phone} href="tel:+79202414241">
                +7-920-241-42-41
              </a>
            </div>
          </div>
          <div className={styles.widgets}>
            <Link to="/login" className={styles.auth}>
              <AiOutlineUser /> <span>Вход</span>
            </Link>
            <Link to="/basket" className={styles.cart}>
              <AiOutlineShoppingCart />
              <span>Корзина</span>
            </Link>
          </div>
        </div>
      </div>
      <Navigation mode={mode} isSticky={isSticky} />
    </header>
  )
}
