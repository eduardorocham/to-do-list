import styles from './Header.module.css'
import { getCurrentDate } from '@/utils/getCurrentDate'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.welcome}>Welcome back! 👋</div>
      <div className={styles.right}>
        <div className={styles.calendar}>
          <FaRegCalendarAlt />
          <div>{getCurrentDate()}</div>
        </div>
        <div className={styles.profile}>
          <FaRegUser />
        </div>
      </div>
    </header>
  )
}
