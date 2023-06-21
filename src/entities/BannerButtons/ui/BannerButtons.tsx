import { IoIosArrowUp } from 'react-icons/io'
import { useSwiper } from 'swiper/react'

import styles from './BannerButtons.module.scss'

export const BannerButtons = () => {
  const swiper = useSwiper()

  return (
    <>
      <span onClick={() => swiper.slidePrev()} className={styles.swiper__prev}>
        <IoIosArrowUp />
      </span>
      <span onClick={() => swiper.slideNext()} className={styles.swiper__next}>
        <IoIosArrowUp />
      </span>
    </>
  )
}
