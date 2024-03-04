import styled from 'styled-components'
import { Input } from './Input'
// import { FaRegUser } from 'react-icons/fa6'

const PageArea = styled.div`
  background-color: var(--primary-gray);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  /* display: block; */
  background-color: var(--white);
  width: 37.4rem;
  height: 50rem;
  border-radius: 3rem;
`

export const LoginPage = () => {
  return (
    <PageArea>
      <Box>
        {/* <Input placeholder="E-mail ou username" icon={FaRegUser} /> */}
      </Box>
    </PageArea>
  )
}
