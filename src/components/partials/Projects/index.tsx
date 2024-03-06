import styles from './Projects.module.css'
import { IoMdAdd } from 'react-icons/io'
import { Item } from './Item'

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.title}>
        <h1>Projetos</h1>
        <button>
          <IoMdAdd />
        </button>
      </div>
      <div className={styles.items}>
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}
