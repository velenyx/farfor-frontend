import { FC } from 'react'

import styles from './Tags.module.scss'

import { getServerUrl } from '~/shared'

export const Tags: FC<$TSFixMe> = ({ tag, width, height }) => {
  const TagIconSrc = getServerUrl(tag.icon)

  return (
    <div className={styles.tags}>
      <div className={styles.tags__body} key={tag.icon}>
        <img className={styles.tag__icon} src={TagIconSrc} style={{ width: width, height: height }} />
        <div className={styles.tag__tooltip}>{tag.name}</div>
      </div>
    </div>
  )
}
