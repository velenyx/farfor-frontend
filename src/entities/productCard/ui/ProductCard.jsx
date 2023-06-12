import { Fragment, useEffect, useRef, useState } from 'react'
import styles from './ProductCard.module.scss'
import cn from 'clsx'
import { CheckBoxSlide, Tags } from 'shared'

export const ProductCard = ({
  item,
  handleProduct,
  handleModal,
  index,
  handleSwiper,
}) => {
  const [checkedFirst, setCheckedFirst] = useState(true)
  const [checkedTwo, setCheckedTwo] = useState(false)
  const twoPrice = checkedFirst ? item.sizes[0].price : item.sizes[1].price
  const twoPriceDiscount = checkedFirst
    ? item.sizes[0].discount_price
    : item.sizes[1].discount_price

  const twoWeight = checkedFirst ? item.sizes[0].weight : item.sizes[1].weight

  return (
    <div
      className={styles.product}
      onClick={() => {
        handleModal(true)
        handleSwiper(index)
      }}>
      <div className={styles.product__image}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url('http://localhost:8000/api/v1${item.image}')`,
          }}
        />
        {item.discount > 1 && (
          <span className={styles.discount}>{`-${item.discount}%`}</span>
        )}
      </div>
      {item.properties.map(tag => (
        <Fragment key={tag.name}>
          <Tags tag={tag} />
        </Fragment>
      ))}
      <div className={styles.product__sale}>
        {/*TODO - Декомпозировать*/}
        {item.promotion && (
          <div
            className={styles.promotion}
            style={{ backgroundColor: `${item.promotion?.hex_color}` }}>
            {item.promotion.name}
          </div>
        )}
      </div>
      <div className={styles.product__body}>
        <div className={styles.title} onClick={() => handleProduct(item)}>
          {item.name}
        </div>
        <div className={styles.description}>{item.description}</div>
        {item.sizes.length > 1 && (
          <CheckBoxSlide
            item={item}
            checkedTwo={checkedTwo}
            setCheckedTwo={setCheckedTwo}
            checkedFirst={checkedFirst}
            setCheckedFirst={setCheckedFirst}
          />
        )}

        <div className={styles.buy}>
          {item.sizes.length > 1 && !item.discount && (
            <div className={styles.price}>{twoPrice}</div>
          )}
          {item.sizes.length > 1 && item.discount && (
            <div className={styles.price}>{twoPriceDiscount}</div>
          )}
          {item.sizes.length === 1 && !item.discount && (
            <div className={styles.price}>{item.sizes[0].price}</div>
          )}
          {item.sizes.length === 1 && (
            <div className={styles.price__wrapper}>
              <div className={styles.price__new}>
                {item.sizes[0].discount_price}
              </div>
              <div className={styles.price__old}>{item.sizes[0].price}</div>
            </div>
          )}

          <div className={styles.buy__button}>Хочу!</div>
        </div>
        <div className={styles.weight__wrapper}>
          {item.sizes.length === 1 && (
            <div className={styles.weight}>{item.sizes[0].weight + ' г'}</div>
          )}
          {item.sizes.length > 1 && (
            <div className={styles.weight}>{twoWeight + ' г'}</div>
          )}
          <div className={styles.weight__tooltip}>
            <div className={styles.tooltip__trigger}>КБЖУ</div>
            <div className={styles.tooltip__body}>
              <div className={styles.tooltip__header}>
                Пищевая ценность на 100г
              </div>
              <div className={styles.kpfc}>
                <div className={styles.kpfc__item}>
                  <div className={styles.kpfc__count}>{item.kpfc.proteins}</div>
                  <div className={styles.kpfc__description}>белки</div>
                </div>
                <div className={styles.kpfc__item}>
                  <div className={styles.kpfc__count}>{item.kpfc.fats}</div>
                  <div className={styles.kpfc__description}>жиры</div>
                </div>
                <div className={styles.kpfc__item}>
                  <div className={styles.kpfc__count}>
                    {item.kpfc.carbohydrates}
                  </div>
                  <div className={styles.kpfc__description}>углеводы</div>
                </div>
                <div className={styles.kpfc__item}>
                  <div className={styles.kpfc__count}>{item.kpfc.calorie}</div>
                  <div className={styles.kpfc__description}>Ккал</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
