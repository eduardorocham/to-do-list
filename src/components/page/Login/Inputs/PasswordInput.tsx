import styles from './Input.module.css'
// Modules
import { useState } from 'react'
// Icons
import { FaRegEye } from 'react-icons/fa6'
import { FaRegEyeSlash } from 'react-icons/fa6'

export const PasswordInput = () => {
  const [seePassword, setSeePassword] = useState(false)

  const Icon = seePassword ? FaRegEye : FaRegEyeSlash

  return (
    <div className={styles.input_area}>
      <input placeholder="Senha" type={seePassword ? 'text' : 'password'} />
      <Icon
        className={styles.icon}
        style={{ cursor: 'pointer' }}
        onClick={() => setSeePassword((prevState) => !prevState)}
      />
    </div>
  )
}
