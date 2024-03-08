import styles from './SideBar.module.css'
import { RxDashboard } from 'react-icons/rx'
import { FaRegUser } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'

export const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.items}>
        <div className={styles.item}>
          <RxDashboard className={styles.icon} />
        </div>
        <div className={styles.item}>
          <FaRegUser className={styles.icon} />
        </div>
        <div className={styles.item}>
          <IoSettingsOutline className={styles.icon} />
        </div>
      </div>
    </div>
  )
}
