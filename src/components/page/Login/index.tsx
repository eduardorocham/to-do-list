import styles from './Login.module.css'
// Components
import { Input } from './Inputs/Input'
import { PasswordInput } from './Inputs/PasswordInput'
import { Button } from './Button'
// Icons
import { FaRegUser } from 'react-icons/fa6'

export const LoginPage = () => {
  return (
    <div className={styles.page_area}>
      <div className={styles.box}>
        <Input placeholder="Username ou e-mail" icon={FaRegUser} />
        <PasswordInput />
        <Button />
      </div>
    </div>
  )
}
