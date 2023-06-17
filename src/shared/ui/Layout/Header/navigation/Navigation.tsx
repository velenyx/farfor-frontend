import { FC } from 'react'

import { Link } from 'react-router-dom'

import { BaseNavigation } from './BaseNavigation'
import { MenuData } from './menu.data.ts'
import { NavigationData } from './navigation.data.ts'
import styles from './Navigation.module.scss'

export const Navigation: FC<$TSFixMe> = ({ mode, isSticky }) => {
  const StickySecondNavigation = (mode == 'menu' && isSticky && MenuData) || NavigationData
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__container}>
        <div className={!isSticky || mode === 'default' ? styles.navigation__body : styles.categories}>
          {(!isSticky || mode === 'default') &&
            NavigationData.map(item => <BaseNavigation item={item} key={item.text} />)}
          <CategoryNavigation data={MenuData} mode={mode} isSticky={isSticky} />
        </div>
      </div>
    </div>
  )
}

export const CategoryNavigation: FC<$TSFixMe> = ({ data, mode, isSticky }) => {
  if (mode === 'menu' && isSticky) {
    return (
      <div className={styles.categories__wrapper}>
        <div className={styles.categories__body}>
          <div className={styles.categories__content}>
            {data.map((category: $TSFixMe) => (
              <Link to={category.link} className={styles.categories__link} key={category.text}>
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
