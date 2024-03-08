import styles from './Task.module.css'
import { Top } from './Top'
import { Progress } from './Progress'
import { Bottom } from './Bottom'

export const Task = () => {
  return (
    <div className={styles.task}>
      <Top />
      <Progress />
      <Bottom />
    </div>
  )
}
