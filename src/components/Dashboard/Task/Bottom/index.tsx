import styles from './Bottom.module.css'
import { LiaComment } from 'react-icons/lia'

export const Bottom = () => {
  return (
    <div className={styles.bottom}>
      <div className={styles.date}>12/03/2022</div>
      <div className={styles.right}>
        <div className={styles.comments}>
          <LiaComment />
          <span>17</span>
        </div>
        <div className={styles.responsibles}>
          <div className={styles.responsible}></div>
        </div>
      </div>
    </div>
  )
}
