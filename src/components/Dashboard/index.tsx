import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { OnDragEndResponder } from 'react-beautiful-dnd'
import { TaskType } from '@/types/Task'
import { Task } from './Task'
import { Column } from './Column'
import styles from './Dashboard.module.css'
import { tasks } from '@/mocks/tasks'

export const Dashboard = () => {
  const [tasksList, setTasksList] = useState<TaskType[]>(tasks)

  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return

    const items = Array.from(tasksList)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setTasksList(items)
  }

  return (
    <div className={styles.dashboard}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Column>
          {tasks.map((task, index) => (
            <Task draggableId={task.id} key={task.id} index={index} />
          ))}
        </Column>
      </DragDropContext>
    </div>
  )
}
