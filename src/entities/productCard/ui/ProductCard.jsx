import { useEffect, useRef, useState } from 'react'
import styles from './ProductCard.module.scss'
import cn from 'clsx'

export const ProductCard = ({ item, handleProduct, handleModal }) => {
  const [checkedFirst, setCheckedFirst] = useState(true)
  const [checkedTwo, setCheckedTwo] = useState(false)
  const twoPrice = checkedFirst ? item.sizes[0].price : item.sizes[1].price
  const twoWeight = checkedFirst ? item.sizes[0].weight : item.sizes[1].weight
  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url('http://localhost:8000/api/v1${item.image}')`,
          }}
        />
      </div>
      <div className={styles.product__tags}>
        {/*TODO - Декомпозировать*/}
        {item.property.map(tag => (
          <div className={styles.tags__body} key={tag.icon}>
            <img
              className={styles.tag__icon}
              src={`http://localhost:8000/api/v1${tag.icon}`}
            />
            <div className={styles.tag__tooltip}>{tag.name}</div>
          </div>
        ))}
      </div>
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
          <CheckBoxes
            item={item}
            checkedTwo={checkedTwo}
            setCheckedTwo={setCheckedTwo}
            checkedFirst={checkedFirst}
            setCheckedFirst={setCheckedFirst}
          />
        )}

        <div className={styles.buy}>
          {item.sizes.length > 1 && (
            <div className={styles.price}>{twoPrice}</div>
          )}
          {item.sizes.length === 1 && (
            <div className={styles.price}>{item.sizes[0].price}</div>
          )}

          <div className={styles.buy__button}>Хочу!</div>
        </div>
        <div className={styles.weight__wrapper}>
          {item.sizes.length === 1 && (
            <div className={styles.weight}>{item.sizes[0].weight}</div>
          )}
          {item.sizes.length > 1 && (
            <div className={styles.weight}>{twoWeight}</div>
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

const CheckBoxes = ({
  item,
  checkedTwo,
  setCheckedTwo,
  checkedFirst,
  setCheckedFirst,
}) => {
  return (
    <div className={styles.checkboxes__body}>
      {' '}
      <div
        className={cn(styles.checkbox__toggle, {
          [styles.checkbox__toggle_right]: checkedTwo,
        })}
      />
      <div className={styles.checkbox__wrapper}>
        <input
          checked={checkedFirst}
          className={styles.checkbox}
          type='checkbox'
          id={item.sizes[0].size + item.name}
        />
        <label
          className={cn(styles.checkbox__label, {
            [styles.checkbox__label_left]: checkedFirst,
          })}
          onClick={() => {
            setCheckedFirst(!checkedFirst), setCheckedTwo(!checkedTwo)
          }}>
          {item.sizes[0].size}
        </label>
      </div>
      <div className={styles.checkbox__wrapper}>
        <input
          checked={checkedTwo}
          className={styles.checkbox}
          type='checkbox'
          id={item.sizes[0].size + item.name}
        />
        <label
          className={cn(styles.checkbox__label, {
            [styles.checkbox__label_right]: checkedTwo,
          })}
          onClick={() => {
            setCheckedFirst(!checkedFirst), setCheckedTwo(!checkedTwo)
          }}>
          {item.sizes[1].size}
        </label>
      </div>
    </div>
  )
}
