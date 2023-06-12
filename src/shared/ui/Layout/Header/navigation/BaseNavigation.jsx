import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

export const BaseNavigation = ({ item }) => {
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
}
