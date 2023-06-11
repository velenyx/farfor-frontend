import styles from './Modal.module.scss'
import './modal.scss'
import cn from 'clsx'

export const Modal = ({ children, isShow, handleClose }) => {
  const bodyTag = document.querySelector('body')
  if (isShow) {
    bodyTag.classList.add('modal-show')
  } else {
    bodyTag.classList.remove('modal-show')
  }
  return (
    <div
      className={cn(styles.modal, { [styles.modal_show]: isShow })}
      onClick={() => handleClose(false)}>
      <div className={styles.modal__wrapper}>
        <div
          className={styles.modal__content}
          onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  )
}
