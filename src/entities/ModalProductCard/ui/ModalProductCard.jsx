import { Tags } from 'shared'
import styles from './ModalProductCard.module.scss'
import { Fragment } from 'react'

export const ModalProductCard = ({ product }) => {
  console.log('@product', product.properties)
  return (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__image}>
          <img src={`http://localhost:8000/api/v1${product.image}`} alt='' />
          {product.properties.map(tag => (
            <Tags tag={tag} height={24} width={24} />
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
        </div>
      </div>
    </div>
  )
}
