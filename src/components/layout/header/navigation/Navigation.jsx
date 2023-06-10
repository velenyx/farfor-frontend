import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { AiFillStar } from 'react-icons/ai'
import { NavigationData } from './navigation.data.js'

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__container}>
        <div className={styles.navigation__body}>
          {NavigationData.map(item => {
            if (item.icon) {
              return (
                <Link className={styles.link} to={item.link} key={item.link + item.text}>
                  <item.icon />
                  <span>{item.text}</span>
                </Link>
              )
            } else {
              return (
                <Link className={styles.link} to={item.link} key={item.link + item.text}>
                  {item.text}
                </Link>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
