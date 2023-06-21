import { Link } from 'react-router-dom'

import styles from './SaleCard.module.scss'
import type { Sale } from '../model/types'

import { getServerUrl } from '~/shared'

export const SaleCard = ({ sale }: { sale: Sale }) => {
  const backgroundImgSrc = getServerUrl(sale.image)

  return (
    <div className={styles.sale}>
      <Link to={`${sale.slug}/`}>
        <div className={styles.sale__top}>
          <div className={styles['sale__top-image']}>
            <div className={styles['v-responsive__sizer']} style={{ paddingBottom: '39%' }} />
            <div
              className={styles['v-image__image']}
              style={{
                backgroundImage: `url(${backgroundImgSrc})`,
                backgroundPosition: 'center center',
              }}
            />
            <div className={styles['v-reponse__content']} style={{ width: '400px' }} />
          </div>
          <h2 className={styles['sale__top-headline']}>{sale.title}</h2>
        </div>
      </Link>
      <div className={styles.sale__bottom}>
        <div className={styles['sale__bottom-description']}>{sale.description.split('\n')[0]}</div>
      </div>
    </div>
  )
}
