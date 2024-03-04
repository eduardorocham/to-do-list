import { ElementType } from 'react'
import styled from 'styled-components'

const InputArea = styled.div``

interface InputProps {
  placeholder: string
  icon: ElementType
}

export const Input = ({ placeholder, icon: Icon }: InputProps) => {
  return (
    <InputArea>
      <input placeholder={placeholder} />
      <Icon />
    </InputArea>
  )
}
