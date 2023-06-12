import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

import { NavigationData } from './navigation.data.js'
import { MenuData } from './menu.data.js'
import { BaseNavigation } from './BaseNavigation'

export const Navigation = ({ mode, isSticky }) => {
  const StickySecondNavigation =
    (mode == 'menu' && isSticky && MenuData) || NavigationData
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__container}>
        <div
          className={
            !isSticky || mode === 'default'
              ? styles.navigation__body
              : styles.categories
          }>
          {(!isSticky || mode === 'default') &&
            NavigationData.map(item => <BaseNavigation item={item} />)}
          <CategoryNavigation data={MenuData} mode={mode} isSticky={isSticky} />
        </div>
      </div>
    </div>
  )
}

export const CategoryNavigation = ({ data, mode, isSticky }) => {
  if (mode === 'menu' && isSticky) {
    return (
      <div className={styles.categories__wrapper}>
        <div className={styles.categories__body}>
          <div className={styles.categories__content}>
            {data.map(category => (
              <Link to={category.link} className={styles.categories__link}>
                {category.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return null
}
