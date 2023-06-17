/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useRef, useState } from 'react'

import { IoIosArrowUp } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './ProductList.module.scss'

import { ModalProductCard } from '~/entities/ModalProductCard'
import { ProductCard } from '~/entities/productCard'
import { usePopularProductsQuery } from '~/entities/productCard/api/productApi'
import { Modal } from '~/shared'

import 'swiper/css'

export const ProductList: FC<$TSFixMe> = ({ clickHandler }) => {
  const [isModalShow, setIsModalShow] = useState(false)
  const [productId, setProductId] = useState(null)

  const swiperRef = useRef()

  const { data = [], isFetching } = usePopularProductsQuery()

  // if (!isSuccess) {
  //   return <h1>Loading....</h1>
  // }

  return (
    <>
      {/* <LayoutModal>
        <ProductModal
          isShowModal={isShowModal}
          handleClose={() => SetIsShowModal(false)}
          product={productId}
        />
      </LayoutModal> */}
      <Modal isShow={isModalShow} handleClose={setIsModalShow}>
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper
          }}
          /* TODO-false */
          // Прокинуть индекс и ставить его onClick-setIndex
          allowTouchMove={false}
          speed={0}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoHeight={true}
          initialSlide={3}>
          <div onClick={() => swiperRef.current.slidePrev()} className={styles.swiper__prev}>
            <IoIosArrowUp />
          </div>
          {data.results?.map(product => (
            <SwiperSlide key={product.pk}>
              <ModalProductCard product={product} />
            </SwiperSlide>
          ))}
          <div onClick={() => swiperRef.current.slideNext()} className={styles.swiper__next}>
            <IoIosArrowUp />
          </div>
        </Swiper>
      </Modal>
      <div style={{ display: 'flex', gap: '100px 36px', flexWrap: 'wrap' }}>
        {data.results?.length < 2 && <h1>Nothing</h1>}
        {data.results?.map((product, index) => (
          <ProductCard
            index={index}
            handleSwiper={() => swiperRef.current.slideTo(index)}
            product={product}
            key={product.pk}
            handleProduct={() => setProductId(product)}
            handleModal={setIsModalShow}
          />
        ))}
      </div>
    </>
  )
}
