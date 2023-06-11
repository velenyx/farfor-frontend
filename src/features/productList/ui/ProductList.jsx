import { ProductCard, productApi } from 'entities/productCard'
import styles from './ProductList.module.scss'
import { useState } from 'react'
import { Modal, useOnClickOutside } from 'shared'
import { ProductModal } from 'features/productModal'

export const ProductList = ({ clickHandler }) => {
  const [isModalShow, setIsModalShow] = useState(false)
  console.log('@isShow', isModalShow)
  const [productId, setProductId] = useState(null)
  console.log('ProductID', productId)

  const { data, isSuccess } = productApi.getAll()

  if (!isSuccess) {
    return <h1>Loading....</h1>
  }

  return (
    <>
      {/* <LayoutModal>
        <ProductModal
          isShowModal={isShowModal}
          handleClose={() => SetIsShowModal(false)}
          product={productId}
        />
      </LayoutModal> */}
      <Modal isShow={isModalShow} handleClose={setIsModalShow}>
        123123
      </Modal>
      <div
        style={{ display: 'flex', gap: '100px 36px', flexWrap: 'wrap' }}
        onClick={() => setIsModalShow(true)}>
        {data.results.map(product => (
          <ProductCard
            item={product}
            key={product.pk}
            handleProduct={() => setProductId(product)}
            handleModal={() => setIsModalShow(true)}
          />
        ))}
      </div>
    </>
  )
}
