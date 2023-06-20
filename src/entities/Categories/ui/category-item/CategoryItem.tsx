import { FC } from 'react'

import cn from 'clsx'
import { Link } from 'react-router-dom'

import styles from './CategoryItem.module.scss'

import { ICategory } from '~/entities/Categories/model/types'
import { getServerUrl } from '~/shared'
interface CategoryItemProps extends ICategory {
  isActive: boolean
}
export const CategoryItem: FC<CategoryItemProps> = ({ image, name, slug, isActive }) => {
  return (
    <Link to={`./${slug}`} className={cn(styles.category, { [styles.category__active]: isActive })}>
      <img src={getServerUrl(image)} alt={name} className={styles.category__image} />
      <h5 className={styles.category__title}>{name}</h5>
    </Link>
  )
}
