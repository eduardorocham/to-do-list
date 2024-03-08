import styles from './Top.module.css'
import { IoIosMore } from 'react-icons/io'

export const Top = () => {
  return (
    <div className={styles.top}>
      <h4>Make twitter banner</h4>
      <div className={styles.more}>
        <IoIosMore />
      </div>
    </div>
  )
}
