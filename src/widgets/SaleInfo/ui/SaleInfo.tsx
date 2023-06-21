import styles from './SaleInfo.module.scss'

import { useGetSaleDetailQuery, type Sale } from '~/entities/saleCard'
import { getServerUrl } from '~/shared'

export const SaleInfo = ({ slug }: { slug: string | undefined }) => {
  const { data, isFetching, isSuccess } = useGetSaleDetailQuery(slug)

  const renderContent = (sale: Sale) => {
    const backgroundImgSrc = getServerUrl(sale.image)

    return (
      <>
        <div className={styles['sale-content__image']}>
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
        <div className={styles['sale-content__section']}>
          <div className={styles['sale-content__text']}>
            <div className={styles['sale-content__title']}>{sale.title}</div>
            <div className={styles['sale-content__description']}>
              {sale.description.split('\n').map((indend: string, i: number) => (
                <p key={i}>{indend}</p>
              ))}
              <ul>
                {sale.conditions.map((condition: string, i: number) => (
                  <li key={i}>{condition}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }

  const spinner = <h1>Загрузка...</h1>
  const content = isSuccess ? renderContent(data) : null

  return <div className={styles['sale-content']}>{content}</div>
}
