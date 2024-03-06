import styles from './Item.module.css'
// Modules
import { useState } from 'react'
// Icons
import { FaAngleDown } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'

export const Item = () => {
  const [openSubItems, setOpenSubItems] = useState(false)

  const Icon = openSubItems ? FaAngleDown : FaAngleRight

  return (
    <div className={styles.item}>
      <div
        className={styles.title}
        onClick={() => setOpenSubItems((prevState) => !prevState)}
      >
        <h3>Projetos</h3>
        <Icon />
      </div>
      <div className={`${styles.sub}  ${openSubItems ? styles.open : ''}`}>
        <div className={styles.lines}></div>
        <div className={styles.subitems}>
          <div className={styles.subitem}>Todos os projetos</div>
        </div>
      </div>
    </div>
  )
}
