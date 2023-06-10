import { useProductCard } from './useProductCard'
import styles from './ProductCard.module.scss'
import cn from 'clsx'

export const ProductCard = ({ item }) => {
  const { data, isSuccess } = useProductCard()
  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <div className={styles.image} style={{ backgroundImage: `url('http://localhost:8000/api/v1${item.image}')` }} />
      </div>
      <div className={styles.product__sale}></div>
      <div className={styles.product__body}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.description}>{item.description}</div>
        <div className={styles.buy}>
          <div className={styles.price}>{item.sizes[0].price + ' ₽'}</div>
          <div className={styles.buy__button}>Хочу!</div>
        </div>
        <div className={styles.weight__wrapper}>
          <div className={styles.weight}>{item.sizes[0].weight + ' г'}</div>
          <div className={styles.weight__tooltip}>
            <div className={styles.tooltip__trigger}>КБЖУ</div>
            <div className={styles.tooltip__body}>
              <div className={styles.tooltip__header}>Пищевая ценность на 100г</div>
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
                  <div className={styles.kpfc__count}>{item.kpfc.carbohydrates}</div>
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
