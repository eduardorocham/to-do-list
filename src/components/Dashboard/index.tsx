import { useState } from 'react'
import styles from './Dashboard.module.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Column } from './Column'
import { Task } from './Task'
import { tasks } from '@/mocks/tasks'
import { TaskType } from '@/types/Task'

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
  }))

const reorder = (list: TaskType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

export const Dashboard = () => {
  const [items, setItems] = useState({
    column1: tasks,
    column2: tasks,
  })

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index,
    )

    setItems(reorderedItems)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.dashboard}>
        <Droppable droppableId="1">
          {(provided, snapshot) => (
            <Column {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <Task
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
            </Column>
          )}
        </Droppable>
        <Droppable droppableId="2">
          {(provided, snapshot) => (
            <Column {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <Task
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
            </Column>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}
