import { ProductCard, productApi } from 'entities/productCard'
import styles from './ProductList.module.scss'
import { useState } from 'react'
import { LayoutModal, useOnClickOutside } from 'shared'
import { ProductModal } from 'features/productModal'

export const ProductList = ({ clickHandler }) => {
  const [productId, setProductId] = useState(null)
  console.log('ProductID', productId)
  const { isShow: isShowModal, setIsShow: SetIsShowModal } = useOnClickOutside()

  const { data, isSuccess } = productApi.getAll()

  if (!isSuccess) {
    return <h1>Loading....</h1>
  }

  return (
    <>
      <LayoutModal>
        <ProductModal
          isShowModal={isShowModal}
          handleClose={() => SetIsShowModal(false)}
          product={productId}
        />
      </LayoutModal>
      <div
        style={{ display: 'flex', gap: '100px 36px', flexWrap: 'wrap' }}
        onClick={() => SetIsShowModal(!isShowModal)}>
        {data.results.map(product => (
          <ProductCard
            item={product}
            key={product.pk}
            handleProduct={() => setProductId(product)}
            handleModal={() => SetIsShowModal(true)}
          />
        ))}
      </div>
    </>
  )
}
