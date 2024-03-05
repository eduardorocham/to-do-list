import styles from './SideBar.module.css'
import { RxDashboard } from 'react-icons/rx'

export const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.items}>
        <div className={styles.item}>
          <RxDashboard className={styles.icon} />
        </div>
      </div>
    </div>
  )
}
