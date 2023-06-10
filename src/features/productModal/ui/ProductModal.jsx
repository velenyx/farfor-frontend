import cn from 'clsx'
import styles from './ProductModal.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useOnClickOutside } from 'shared'
import { useEffect, useRef } from 'react'

const handleClickOutside = (event, ref, handleClose) => {
  if (ref.current && !ref.current.contains(event?.target)) {
    handleClose()
  }
}

export const ProductModal = ({ product, handleClose, isShowModal }) => {
  const myRef = useRef()
  useEffect(() => {
    document.addEventListener(
      'click',
      () => handleClickOutside(event, myRef, handleClose),
      true,
    )
    return () => {
      document.removeEventListener(
        'click',
        () => handleClickOutside(event, myRef, handleClose),
        true,
      )
    }
  })
  return (
    <div className={cn(styles.hidden, { [styles.open]: isShowModal })}>
      <div className={styles.modal}></div>
      <div className={styles.wrapper}>
        <div style={{ transformOrigin: 'center center', maxWidth: 794 }}>
          <div ref={myRef} className={styles.container}>
            <div>123</div>
            <div className={styles.close}>
              <AiOutlineClose onClick={() => handleClose()} />
            </div>
            {/*TODO - Убрать знак */}
            <img src={`http://localhost:8000/api/v1${product?.image}`} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
