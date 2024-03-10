import { Draggable } from 'react-beautiful-dnd'
import styles from './Task.module.css'
import { Top } from './Top'
import { Progress } from './Progress'
import { Bottom } from './Bottom'

interface TaskInterface {
  key: string
  draggableId: string
  index: number
}

export const Task = ({ draggableId, index, key }: TaskInterface) => {
  return (
    <Draggable key={key} draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          className={styles.task}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Top />
          <Progress />
          <Bottom />
        </div>
      )}
    </Draggable>
  )
}
