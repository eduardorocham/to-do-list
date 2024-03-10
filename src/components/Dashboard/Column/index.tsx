import { ReactNode } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styles from './Column.module.css'
import { IoIosAdd } from 'react-icons/io'

interface ColumnProps {
  children: ReactNode
}

export const Column = ({ children }: ColumnProps) => {
  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <div
          className={styles.column}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className={styles.top}>
            <span>To do (3)</span>
            <button>
              <IoIosAdd />
              <span>Nova tarefa</span>
            </button>
          </div>
          <div className={styles.tasks}>{children}</div>
        </div>
      )}
    </Droppable>
  )
}
