import styles from './Dashboard.module.css'
import { Task } from './Task'

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Task />
    </div>
  )
}
