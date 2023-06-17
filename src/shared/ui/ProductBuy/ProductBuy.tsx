import { FC } from 'react'

import styles from './ProductBuy.module.scss'

export const ProductBuy: FC<$TSFixMe> = ({ product, checkedFirst, isTooltip }) => {
  console.log('@product', product)
  //TODO - Убрать проверки
  const twoPrice = product.sizes.length > 1 && (checkedFirst ? product.sizes[0].price : product.sizes[1].price)
  const twoPriceDiscount =
    product.sizes.length > 1 && (checkedFirst ? product.sizes[0].discount_price : product.sizes[1].discount_price)

  const twoWeight = product.sizes.length > 1 && (checkedFirst ? product.sizes[0].weight : product.sizes[1].weight)

  if (!product.sizes) return null
  return (
    <>
      <div className={styles.buy}>
        {product.sizes.length > 1 && !product.discount && <div className={styles.price}>{twoPrice}</div>}
        {product.sizes.length > 1 && product.discount && <div className={styles.price}>{twoPriceDiscount}</div>}
        {product.sizes.length === 1 && !product.discount && (
          <div className={styles.price}>{product.sizes[0].price}</div>
        )}
        {product.sizes.length === 1 && (
          <div className={styles.price__wrapper}>
            <div className={styles.price__new}>{product.sizes[0].discount_price}</div>
            <div className={styles.price__old}>{product.sizes[0].price}</div>
          </div>
        )}

        <div className={styles.buy__button}>Хочу!</div>
      </div>
      <div className={styles.weight}>
        {product.sizes.length === 1 && <div className={styles.weight__count}>{product.sizes[0].weight + ' г'}</div>}
        {product.sizes.length > 1 && <div className={styles.weight__count}>{twoWeight + ' г'}</div>}
        {isTooltip && (
          <div className={styles.tooltip}>
            <div className={styles.tooltip__trigger}>КБЖУ</div>
            <div className={styles.tooltip__body}>
              <div className={styles.tooltip__header}>Пищевая ценность на 100г</div>
              <div className={styles.kpfc}>
                <div className={styles.kpfc__product}>
                  <div className={styles.kpfc__count}>{product.kpfc.proteins}</div>
                  <div className={styles.kpfc__description}>белки</div>
                </div>
                <div className={styles.kpfc__product}>
                  <div className={styles.kpfc__count}>{product.kpfc.fats}</div>
                  <div className={styles.kpfc__description}>жиры</div>
                </div>
                <div className={styles.kpfc__product}>
                  <div className={styles.kpfc__count}>{product.kpfc.carbohydrates}</div>
                  <div className={styles.kpfc__description}>углеводы</div>
                </div>
                <div className={styles.kpfc__product}>
                  <div className={styles.kpfc__count}>{product.kpfc.calorie}</div>
                  <div className={styles.kpfc__description}>Ккал</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
