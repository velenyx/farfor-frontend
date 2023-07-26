import styles from './SalesList.module.scss'

import { SaleCard, useGetSalesQuery } from '~/entities/saleCard'
import type { Sale } from '~/entities/saleCard'

export const SalesList = () => {
  const { data = [], isFetching } = useGetSalesQuery()

  const getGoogleMap = () => {
    return
  }

  return (
    <div className={styles.sales__grid}>
      {data.results?.map((sale: Sale, i: number) => (
        <SaleCard key={i} sale={sale} />
      ))}
    </div>
  )
}
