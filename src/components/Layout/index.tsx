import styles from './Layout.module.css'
import { SideBar } from '../partials/SideBar'
import { Projects } from '../partials/Projects'

export const Layout = () => {
  return (
    <main>
      <div className={styles.left_area}>
        <SideBar />
        <Projects />
      </div>
    </main>
  )
}
