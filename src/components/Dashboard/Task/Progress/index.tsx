import styles from './Progress.module.css'
import { FaList } from 'react-icons/fa'

interface ProgressInterface {}

export const Progress = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.title}>
          <FaList />
          <h4>Progresso</h4>
        </div>
        <div className={styles.count}>4/10</div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slider_percent}></div>
      </div>
    </div>
  )
}
