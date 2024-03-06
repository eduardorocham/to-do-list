import styles from './Layout.module.css'
// Modules
import { ReactNode } from 'react'
// Components
import { SideBar } from '../partials/SideBar'
import { Projects } from '../partials/Projects'
import { Header } from '../partials/Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={styles.area}>
      <div className={styles.left_area}>
        <SideBar />
        <Projects />
      </div>
      <div className={styles.right_area}>
        <Header />
        {children}
      </div>
    </main>
  )
}
