import { FC, Fragment, useState } from 'react'

import styles from './ProductCard.module.scss'

import { CheckBoxSlide, ProductBuy, Tags, getServerUrl } from '~/shared'

export const ProductCard: FC<$TSFixMe> = ({ product, handleModal, index, handleSwiper }) => {
  const [checkedFirst, setCheckedFirst] = useState(true)
  const [checkedTwo, setCheckedTwo] = useState(false)

  const backgroundImgSrc = getServerUrl(product.image)

  return (
    <div className={styles.product}>
      <div
        className={styles.product__image}
        onClick={() => {
          handleModal(true)
          handleSwiper(index)
        }}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${backgroundImgSrc})`,
          }}
        />
        {product.discount > 1 && <span className={styles.discount}>{`-${product.discount}%`}</span>}
      </div>
      {product.properties.map((tag: $TSFixMe) => (
        <Fragment key={tag.name}>
          <Tags tag={tag} />
        </Fragment>
      ))}
      <div className={styles.product__sale}>
        {/*TODO - Декомпозировать*/}
        {product.promotion && (
          <div className={styles.promotion} style={{ backgroundColor: `${product.promotion?.hex_color}` }}>
            {product.promotion.name}
          </div>
        )}
      </div>
      <div className={styles.product__body}>
        <div
          className={styles.title}
          onClick={() => {
            handleModal(true)
            handleSwiper(index)
          }}>
          {product.name}
        </div>
        <div
          className={styles.description}
          onClick={() => {
            handleModal(true)
            handleSwiper(index)
          }}>
          {product.description}
        </div>
        {product.sizes.length > 1 && (
          <CheckBoxSlide
            product={product}
            checkedTwo={checkedTwo}
            setCheckedTwo={setCheckedTwo}
            checkedFirst={checkedFirst}
            setCheckedFirst={setCheckedFirst}
          />
        )}
        {product.sizes.length > 1 && <ProductBuy checkedFirst={checkedFirst} isTooltip={true} product={product} />}
      </div>
    </div>
  )
}
