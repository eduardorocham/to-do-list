import type { AppProps } from 'next/app'
import GlobalStyled from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  )
}
