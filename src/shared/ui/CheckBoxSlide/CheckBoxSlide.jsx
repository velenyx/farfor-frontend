import styles from './CheckBoxSlide.module.scss'
import cn from 'clsx'

export const CheckBoxSlide = ({
  product,
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
          id={product.sizes[0].size + product.name}
          readOnly
        />
        <label
          className={cn(styles.checkbox__label, {
            [styles.checkbox__label_left]: checkedFirst,
          })}
          onClick={() => {
            setCheckedFirst(!checkedFirst), setCheckedTwo(!checkedTwo)
          }}>
          {product.sizes[0].size}
        </label>
      </div>
      <div className={styles.checkbox__wrapper}>
        <input
          checked={checkedTwo}
          className={styles.checkbox}
          type='checkbox'
          id={product.sizes[0].size + product.name}
          readOnly
        />
        <label
          className={cn(styles.checkbox__label, {
            [styles.checkbox__label_right]: checkedTwo,
          })}
          onClick={() => {
            setCheckedFirst(!checkedFirst), setCheckedTwo(!checkedTwo)
          }}>
          {product.sizes[1].size}
        </label>
      </div>
    </div>
  )
}
