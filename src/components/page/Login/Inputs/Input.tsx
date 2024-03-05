import styles from './Input.module.css'
import { ElementType } from 'react'

interface InputProps {
  placeholder: string
  icon: ElementType
}

export const Input = ({ placeholder, icon: Icon }: InputProps) => {
  return (
    <div className={styles.input_area}>
      <input placeholder={placeholder} />
      <Icon className={styles.icon} />
    </div>
  )
}
