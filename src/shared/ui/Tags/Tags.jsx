import styles from './Tags.module.scss'

export const Tags = ({ tag, width, height }) => {
  return (
    <div className={styles.tags}>
      <div className={styles.tags__body} key={tag.icon}>
        <img
          className={styles.tag__icon}
          src={`http://localhost:8000/api/v1${tag.icon}`}
          style={{ width: width, height: height }}
        />
        <div className={styles.tag__tooltip}>{tag.name}</div>
      </div>
    </div>
  )
}
