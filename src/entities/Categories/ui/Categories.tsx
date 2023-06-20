import { FC } from 'react'

import styles from './Categories.module.scss'

import { useGetCategoriesQuery } from '~/entities/Categories/api/categoriesApi'
import { CategoryItem } from '~/entities/Categories/ui/category-item/CategoryItem'

const Categories: FC = () => {
  const { data: categories = [], isLoading } = useGetCategoriesQuery()
  return (
    <div className={styles.categories__wrapper}>
      <div className={styles.categories}>
        {categories?.results?.map((category: $TSFixMe) => (
          <CategoryItem name={category.name} image={category.image} slug={category.slug} key={category.pk} />
        ))}
      </div>
    </div>
  )
}

export default Categories
