import styles from './Dashboard.module.css'
import { Column } from './Column'
import { Task } from './Task'

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
      <Column>
        <Task />
      </Column>
    </div>
  )
}
