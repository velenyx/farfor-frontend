import { CheckBoxSlide, ProductBuy, Tags, getServerUrl } from 'shared'
import styles from './ModalProductCard.module.scss'
import { Fragment, useState } from 'react'

export const ModalProductCard = ({ product }) => {
  const [checkedFirst, setCheckedFirst] = useState(true)
  const [checkedTwo, setCheckedTwo] = useState(false)

  return (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__image}>
          <div style={{ position: 'relative' }}>
            <img src={getServerUrl(product.image)} alt='' draggable={false} />
            {product.promotion && (
              <div
                className={styles.promotion}
                style={{ backgroundColor: `${product.promotion?.hex_color}` }}>
                {product.promotion.name}
              </div>
            )}
          </div>
          {product.discount > 1 && (
            <span className={styles.discount}>{`-${product.discount}%`}</span>
          )}

          {product.properties.map(tag => (
            <Fragment key={tag.icon}>
              <Tags tag={tag} height={24} width={24} />
            </Fragment>
          ))}
        </div>

        <div className={styles.modal__content}>
          <h3 className={styles.title}>{product.name}</h3>
          <div className={styles.description}>{product.description}</div>
          <div className={styles.kpfc}>
            <div className={styles.kpfc__item}>
              <div className={styles.kpfc__count}>КБЖУ</div>
              <div className={styles.kpfc__description}>на 100г</div>
            </div>
            <div className={styles.kpfc__item}>
              <div className={styles.kpfc__count}>
                {product.kpfc.proteins + ' г'}
              </div>
              <div className={styles.kpfc__description}>белки</div>
            </div>
            <div className={styles.kpfc__item}>
              <div className={styles.kpfc__count}>
                {product.kpfc.fats + ' г'}
              </div>
              <div className={styles.kpfc__description}>жиры</div>
            </div>
            <div className={styles.kpfc__item}>
              <div className={styles.kpfc__count}>
                {product.kpfc.carbohydrates + ' г'}
              </div>
              <div className={styles.kpfc__description}>углеводы</div>
            </div>
            <div className={styles.kpfc__item}>
              <div className={styles.kpfc__count}>
                {product.kpfc.calorie + ' г'}
              </div>
              <div className={styles.kpfc__description}>Ккал</div>
            </div>
          </div>
          {product && product.sizes.length > 1 && (
            <CheckBoxSlide
              product={product}
              checkedTwo={checkedTwo}
              setCheckedTwo={setCheckedTwo}
              checkedFirst={checkedFirst}
              setCheckedFirst={setCheckedFirst}
            />
          )}
          <ProductBuy
            checkedFirst={checkedFirst}
            isTooltip={false}
            product={product}
          />
        </div>
      </div>
    </div>
  )
}
