import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './Banner.module.scss'
import 'swiper/css'
import 'swiper/css/autoplay'

import { BannerButtons } from '~/entities/BannerButtons'
import { Sale, useGetSalesQuery } from '~/entities/saleCard'
import { getServerUrl } from '~/shared'

export const Banner = () => {
  const { data = [], isFetching } = useGetSalesQuery()

  const renderSlides = (items: Array<any>) => {
    if (!items) {
      return null
    }

    const slides = []

    for (let i = 0; i < items.length; i += 3) {
      const group = items.slice(i, i + 3).map((item: Sale) => {
        const backgroundImgSrc = getServerUrl(item.image)

        return (
          <Link to={`/sales/${item.slug}`} key={item.pk} className={styles.carousel__slide}>
            <img alt={item.title} src={backgroundImgSrc} />
          </Link>
        )
      })

      const slide = (
        <SwiperSlide key={i}>
          <div className={styles['slide-group__wrapper']}>{group}</div>
        </SwiperSlide>
      )

      slides.push(slide)
    }

    return slides
  }

  return (
    <Swiper
      modules={[Autoplay]}
      navigation
      allowTouchMove={false}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      loop={true}
      className={styles.relative}>
      {renderSlides(data.results)}
      <BannerButtons />
    </Swiper>
  )
}
